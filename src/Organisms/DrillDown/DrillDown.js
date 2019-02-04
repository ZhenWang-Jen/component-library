import React from "react";
import shortid from 'shortid';
import { Popup, Dropdown, Icon, Grid } from "semantic-ui-react";
// import ReactHighcharts from "react-highcharts";
import * as  ReactHighcharts from 'highcharts';
import  More from 'highcharts/highcharts-more';
More(ReactHighcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(ReactHighcharts);
// ReactDrilldown(ReactHighcharts.Highcharts);

import BreadCrumbs from "./BreadCrumbs";
import SmallTable from "../SmallTable";
import DropDown from "../../Atoms/DropDown";
import ToggleDataSet from "../../Atoms/ToggleDataSet";
import Header from "../../Atoms/Header";
import ToolTip from "../../Atoms/ToolTip";
import Container from "../Container";
import NoDrillDownChart from "./charts/NoDrillDownChart";
import getAllCompanySeries from "./utils/getAllCompanySeries";
import getToolTipConfig from "./utils/getToolTipConfig";
import numberToKilo from "./utils/numberToKilo";
import getDataFormat from "./utils/getDataFormat";
import getExportData from "./utils/getExportData";
import getCompanyProductLineTotal from "./utils/getCompanyProductLineTotal";
import filterDataByArrayOfKeys from "./utils/filterDataByArrayOfKeys";
import filterDataByYearSelected from "./utils/filterDataByYearSelected";
import getAllCompanyDrillDownsByYear from "./utils/getAllCompanyDrillDownsByYear";
import getAllCompanyDrillDownsByQtr from "./utils/getAllCompanyDrillDownsByQtr";
import getAllCompanyDrillDownsByMonth from './utils/getAllCompanyDrillDownsByMonth';
import getSmallTableData from "./utils/getSmallTableData";
import defaultGraph from "../../utils/colors";
import dropdownConfig from "../../utils/dropdowns";

import "./DrillDown.scss";

const calendarOptions = dropdownConfig.calendarDropdown;
const defaultTableColors = defaultGraph.chartColors;
const defaultChartColors = defaultGraph.tableColors;

const PRODUCT_MAX = 9

export default class DrillDown extends React.Component {
  constructor(props) {
    super(props);

    const shortid = require('shortid');

    this.state = {
      productLineFilterKeys: [],
      product: null,
      year: false,
      quarter: false,
      month: false,
      //productYearFilter: this.props.productYearFilter || this.props.calendarDefault,
      drillDownProductLevelID: {
        _byYear: null,
        _byQuarter: null
      },
      icon: "dropdown",

      productLines: [],
      downloadMessage: null,
      productLimit: PRODUCT_MAX
    };
    this.id = shortid.generate();
  }

  componentDidMount() {

    /**
     * Currently trimming product list to 9
     * Can be fixed my using `this.props.data.series[0].products.length`
    */
    if (this.props.data.series) {
      this.setState({ 
        productLines: this.props.data.series,
        productLineFilterKeys: this.selectProducts()
      })
    };
  }

  selectProducts = () => {
    return this.props.data.series[0].products.map(currentProduct => currentProduct.productName).slice(PRODUCT_MAX)
  }

  setBreadCrumbProduct = productName => {
    this.setState({
      product: productName
    });
  };

  setBreadCrumbYear = year => {
    this.setState({
      year: !!year
    });
  };

  setBreadCrumbQuarter = quarter => {
    this.setState({
      quarter: !!quarter
    });
  };

  setBreadCrumbMonth = month => {
    this.setState({
      month: !!month
    });
  }

  clearBreadCrumbs = () => {
    this.setState({
      product: null,
      year: false,
      quarter: false,
      month: false
    });
  };

  uncheckAllItems = () => {
    const allProductLines = this.props.data.series[0].products.map(
      ({ productName }) => productName
    );
    this.setState({
      productLineFilterKeys: allProductLines
    });
    this.clearBreadCrumbs();
  };

  checkAllItems = () => {
    this.setState({
      productLineFilterKeys: this.selectProducts()
    });

    this.clearBreadCrumbs();
  };

  /**
    * Function for chosing option from dropdown
    * can use to get selected option. 
    * @param {text} string the key we want to sort by and the order of the results (i.e. ascending or descending).
    * @return string
  */
  handleProductSelectChange = (e, { name }) => {
    // create a copy of the productLineFilterKeys array
    const productLineFilterKeys = this.state.productLineFilterKeys.slice();

    let newProductLineFilterKeys;
    if (productLineFilterKeys.indexOf(name) !== -1) {
      // remove key if productLine(@name) is in productLineFilterKeys
      newProductLineFilterKeys = productLineFilterKeys.filter(
        key => key !== name
      );
    } else {
      // add key if productLine(@name) is in productLineFilterKeys
      newProductLineFilterKeys = [...productLineFilterKeys, name];
    }

    // set newProductLineFilterKeys as new state
    this.setState({
      productLineFilterKeys: newProductLineFilterKeys
    });
    // reset bread crumbs in state
    this.clearBreadCrumbs();
  };

  handleDropdownChange = (value) => {

    if(value === this.props.productYearFilter) {
      return false;
    }

    if( value === -1 ) {

      const yearsOfData = (this.props.data.yearsOfData) !== undefined ? this.props.data.yearsOfData : null

      if ( yearsOfData > PRODUCT_MAX ) {
        /** Show Download data message */
        if(this.props.data.allDataPass !== undefined && this.props.data.allDataPass !== '') {
         
          this.setState({
            downloadMessage: this.props.data.allDataPass
          })

          this.clearBreadCrumbs();  
        }
      }
      else {
        value = yearsOfData
      }
    }

    if( value !== -1 ) {
      this.setState({
        quarter: false,
        month: false,
        downloadMessage: null
      }, 
        /** TODO: 
         * Show loader while year filter API data gets fetched
        */
        this.props.handleYearFilter ? this.props.handleYearFilter(value) : null
      );

    }

    /*this.setState({
      productYearFilter: valueSelected,
      quarter: false // Test change. Clear Quarter breadcrumb when Year filter changes
    });*/
  };

  handleDataSetUrls = ({ target: { name } }) => {

    this.setState({
      downloadMessage: null
    });

    this.props.setUrl ? this.props.setUrl(name) : null
  }

  drillDownProductID = (ID, drillDownlevel) => {
    if(drillDownlevel === 'byYear') {
      this.setState({
        drillDownProductLevelID: {
          ...this.state.drillDownProductLevelID,
          _byYear: ID 
        }
      });
    }
    /**
    * Not maintaining Quarter drill-down,
    * on Year filter change, ONLY for dataToggleSets
    */ 

    if(drillDownlevel === 'byQuarter') {
      this.setState({
        drillDownProductLevelID: {
          ...this.state.drillDownProductLevelID,
          _byQuarter: ID
        }
      });
    }
  };

  defaultSelection() {

    return calendarOptions.find((element) => {
      return element.value === this.props.calendarDefault;
    }) || calendarOptions[0]
  }

  render() {
    
    if(!this.state.productLines.length) {
      return (
          <div>Data is not available at this time.</div>
        )
    }

    const entireGraphData = this.props.data;
    const productLines = this.state.downloadMessage ? [] : entireGraphData.series;

    const tableColors =
      (this.props.colors && this.props.colors.tableColors) ||
      defaultTableColors;
    const chartColors =
      (this.props.colors && this.props.colors.chartColors) ||
      defaultChartColors;
    const Chart = this.props.drillDownChart || NoDrillDownChart;

    const toolTipFormat = getToolTipConfig(entireGraphData.dataFormat);
    // get the name of each product line
    const productNames = entireGraphData.series[0].products.map(
      ({ productName }) => productName
    );
    const companyNames = productLines.map(({ name }) => name);
    // api data should not include filtered data
    const filteredData = productLines.map(productLine => {
      // Filter for Checbox selections
      let products = productLine.products.filter(
        ({ productName }) => this.state.productLineFilterKeys.indexOf(productName) === -1
      );

      // Filter for QuickDropdown
      if( this.props.mockData ) {
        products = filterDataByYearSelected(products, this.props.productYearFilter)
      }

      return {
        ...productLine,
        products
      };
    });

    const filteredSeries = getAllCompanySeries(filteredData);

    const exportData = getExportData(filteredData);

    const summaryTableData = filteredSeries.length ? filteredSeries[0].data.map(({ name }) => [
      name,
      ...companyNames.map(companyName =>
        getCompanyProductLineTotal(companyName, name, filteredSeries)
      )
    ]) : [];

    // For Small Table
    let drillDownSeries = [];
    let quarterlyDrillDownData = [];
    let monthlyDrillDownData = [];
    
    const chartType = new Chart().chartType;

    if(chartType === undefined) {
      // for Year to Quarter and Column DrillDown charts
      quarterlyDrillDownData = getAllCompanyDrillDownsByQtr(filteredData);

      drillDownSeries = [
        ...getAllCompanyDrillDownsByYear(filteredData),
        ...quarterlyDrillDownData
      ];
    }
    else if( chartType === 'yearMonthDrillDown' ) {
      // for Year to Month DrillDown charts

      monthlyDrillDownData = getAllCompanyDrillDownsByMonth(filteredData);

      drillDownSeries = [
        //...getAllCompanyDrillDownsByYear(filteredData),
        ...monthlyDrillDownData
      ];
    }

    return (
      <Grid style={{margin: 0}} className="DrillDown__Main--wrapper" id={this.props.ids ? this.props.ids.graph : null}>
        <Grid.Column width={12} style={{padding: 0}}>
          <Container
            title={this.props.graphTitle}
            infoText={this.props.data.infoText}
            currentUrl={this.props.currentUrl}
            dataSetUrls={this.props.dataSetUrls}
            handleClick={this.handleDataSetUrls}
            drillDownChart={this.props.drillDownChart}
            dataWarning={this.props.dataWarning}
            ids={this.props.ids ? this.props.ids : null}
          >
        <React.Fragment>
          <Grid.Row style={{padding: 0}}>
            <Grid.Column width={this.props.smallGraph ? 9 : 4} floated='left'>
              <DropDown 
                defaultValue={(this.props.calendarDefault !== undefined) ? this.defaultSelection().value : calendarOptions[0].value}
                options={calendarOptions}
                onChange={this.handleDropdownChange}
                placeholder={(this.props.calendarDefault !== undefined) ? this.defaultSelection().text : null}
                selection
                className="quick-year-filter customized"
                ids={this.props.ids ? this.props.ids.graphYearQuickset : null}
              />
            </Grid.Column>

            {!this.props.searchByDisabled && 
              (<Grid.Column width={9} style={{paddingLeft: 0}}>
                <DropDown
                  search
                  multiple
                  className="search-dropdown customized margin-l-15 selection"
                  ids={this.props.ids ? this.props.ids.graphProductsList : null}
                  selection
                  placeholder="Search by Product(s)"
                  onOpen={() => {
                    this.setState({ icon : "search" })
                  }}
                  onClose={() => {
                    this.setState({ icon : "dropdown" })
                  }}
                  icon={this.state.icon}
                  productLines={productNames}
                  unCheckedProductLines={this.state.productLineFilterKeys}
                  handleProductSelectChange={this.handleProductSelectChange}
                  checkAllItems={this.checkAllItems}
                  uncheckAllItems={this.uncheckAllItems}
                  productLimit={this.state.productLimit}
                />
              </Grid.Column>)
            }

            <Grid.Column width={3} floated='right'>
              {exportData.data.length ? (
                <DropDown
                  className="export-dropdown customized"
                  icon="download"
                  ids={this.props.ids ? this.props.ids.graphExportList : null}
                  chart
                  columnHeaders={exportData.headers}
                  tableData={exportData.data}
                  fileName={this.props.data.title}
                  // filename={`${
                  //   this.props.data.title
                  // }  - ${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}.csv`}
                />
              ) : null}
            </Grid.Column> 
          </Grid.Row>

          <Grid.Row columns={1} style={{ paddingBottom: 0 }}>
            <Grid.Column>
              {(filteredData.length && filteredData[0].products.length) ? 
                (<BreadCrumbs
                  id={this.id}
                  ids={this.props.ids ? this.props.ids : null}
                  product={this.state.product}
                  year={this.state.year}
                  quarter={this.state.quarter}
                  month={this.state.month}
                />) : (<div className='BreadCrumb--section'></div>)
              }

              {(this.state.downloadMessage) ? 
                (<div className="no-result-message-drilldown download-message" style={{height: this.props.smallGraph ? 235 : 305, textAlign: "center"}}>
                  <Header
                    header={'No Results'}
                    subheader={this.state.downloadMessage}
                    className={'customized'}
                  />
                </div>) : 
                  (<Chart
                    id={this.id}
                    ids={this.props.ids ? this.props.ids : null}
                    data={filteredData}
                    dataFormat={getDataFormat(this.props.data.dataFormat)}
                    toolTipFormat={toolTipFormat}
                    product={this.state.product}
                    year={this.state.year}
                    quarter={this.state.quarter}
                    month={this.state.month}
                    setBreadCrumbProduct={this.setBreadCrumbProduct}
                    setBreadCrumbYear={this.setBreadCrumbYear}
                    setBreadCrumbQuarter={this.setBreadCrumbQuarter}
                    setBreadCrumbMonth={this.setBreadCrumbMonth}
                    clearBreadCrumbs={this.clearBreadCrumbs}
                    productLineFilterKeys={this.state.productLineFilterKeys}
                    productYearFilter={this.props.productYearFilter}
                    colors={chartColors}
                    xLabels={productNames}
                    setDrillDownProductID={this.drillDownProductID}
                    drillDownProductLevelID={this.state.drillDownProductLevelID}
                    smallGraph={this.props.smallGraph}
                    drillDownSeries={drillDownSeries}
                    currentUrl={this.props.currentUrl}
                  />)}
            </Grid.Column>
          </Grid.Row>
          </React.Fragment>
        </Container>
      </Grid.Column>
      
      <Grid.Column width={4} style={{padding: 0, backgroundColor: tableColors[1]}}>
        {this.props.smallGraph || this.props.smallTable ?
          <SmallTable 
            data={getSmallTableData(quarterlyDrillDownData)}
            productYearFilter={this.props.productYearFilter} 
            currentUrl={this.props.currentUrl} 
            color={this.props.colors.tableColors}
            ids={this.props.ids ? this.props.ids : null}
            downloadMessage={this.state.downloadMessage}
          />  : (
            <div className="DrillDown__Table" id={this.props.ids ? this.props.ids.graphTableContainer : null}>
              <div
                className="smalltable__header"
                id={this.props.ids ? this.props.ids.graphTableHDR : null}
                style={{ backgroundColor: tableColors[0] }}
              >
                Summary
                {/* <ToggleDataSet
                style={{ backgroundColor: 'red' }}
                  currentUrl="/overview/graph_summary/product_average"
                  dataSetUrls={[
                    {
                      id: 0,
                      title: "%",
                      url: "/"
                    },
                    {
                      id: 1,
                      title: "$",
                      url: "/"
                    }
                  ]}
                  handleClick={() => {}}
                /> */}
              </div>

              <div className="DrillDown__Table--body" id={this.props.ids ? this.props.ids.graphTableBody : null}>
                <div
                    className={
                      filteredSeries.length > 2
                        ? "DrillDown__Table--row"
                        : "DrillDown__Table--three-cols"
                    }
                    id={this.props.ids ? this.props.ids.graphTableColumnHDRContainer : null}
                  >
                    <span className="colHeader">
                      Products
                    </span>
                    
                    {filteredSeries.map((company, index) => {
                      const regulerName = 
                        <span
                          key={shortid.generate()}
                          className="colHeader"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {company.name.length > 7 ? String(company.name).substring(0, 8) : company.name}
                        </span>

                      if (company.name.length > 7) {
                        return (
                          <ToolTip
                            key={shortid.generate()}
                            trigger={ regulerName }
                            infoText={company.name}
                          />
                        );
                      } else return (
                        regulerName
                      );
                    })}
                  </div>

                  {summaryTableData.map((row, index) => (
                    <div
                      key={shortid.generate()}
                      className={
                        filteredSeries.length > 2
                          ? "DrillDown__Table--row"
                          : "DrillDown__Table--three-cols"
                      }
                      style={{ borderBottom: index === summaryTableData.length - 1 ? "0px" : "" }}
                    >
                      {row.map((cellValue, index) => {
                        const regulerSpan = 
                          <span
                            key={shortid.generate()}
                            className={!index? "rowHeader" : "DrillDown__Table--cell"}
                          >
                            {!index? (String(cellValue).length > 10
                              ? `${String(cellValue).substring(0, 10)}...`
                              : cellValue) : numberToKilo(cellValue)}
                          </span>

                        if (String(cellValue.length) > 10) {
                          return (
                            <ToolTip
                              key={shortid.generate()}
                              trigger={regulerSpan}
                              infoText={cellValue}/>
                          );
                        }
                        return ( regulerSpan );
                      })}
                    </div>
                  ))}
              </div>
          </div>)
        }
      </Grid.Column>
    </Grid>
    );
  }
}