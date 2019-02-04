/**
 * Shared Drilldown Container for all Drilldown components and Tables
 */

import React, { Component } from "react";
import * as axios from "axios";
// import 'babel-polyfill';
import { Grid } from 'semantic-ui-react';
import TableDetails from "../../Organisms/TableDetails"
import ComparisonCard from "../../Organisms/ComparisonCard"
import DrillDown from "../../Organisms/DrillDown"
import Loader from "../../Atoms/Loader"
import Container from "../../Organisms/Container"
import Colors from "../../utils/colors"
import Dropdowns from "../../utils/dropdowns"

axios.defaults.baseURL = "https://analytics.plansourcetest.com/analytics_api/v1/";

export default class AllInOneContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      title: "",
      graphTitle: "",
      selectedName: "",
      detailTableTitle: "",
      infoText: null,
      columnHeadings: [],
      tableData: [],
      dataSetUrls: [],
      urlsData: [],
      data: null,
      currentUrl: "",
      currentPlanYearArray: [],
      detailedTableDrawerArray: [],
      clickedId: null,
      dataWarning: false
    };
  }

  async componentDidMount() {
    if (this.props.mockData) {
      // but if mockData is not provided //
      if (!this.props.mockData.length <= 0) {
        this.setState({
          error: `No actual mock data provided to component, please call ${this.props.url}`
        });
      } else {
        this.setState({
          data: this.props.mockData,
          title: this.props.mockData.title || ''
        });
      }
    } 
    
    else if (this.props.dataSetUrls) {
      let updatedTitle = "", updatedInfoText = '';
      let updatedTableTitle = [], updatedColumnHeadings = [], updatedDetailTable = [];

      Promise.all(this.props.dataSetUrls.map(async (dataSetUrl, index) => {

        const hitURL = `${dataSetUrl.url}/${(this.props.calendarDefault === undefined) ? '' : this.props.calendarDefault}`

        await axios
          .get(hitURL)
          .then(resp => {
            const apiData = resp.data.data;

            if (apiData) {
              if (this.props.drillDownChart || this.props.colors) {
                const apiChartData = apiData;
                
                this.setState({
                  dataSetUrls: [...this.state.dataSetUrls, dataSetUrl.url],
                  urlsData: [...this.state.urlsData, apiChartData],
                  graphTitle: apiChartData.title
                });
  
                // set the first tag for landing view
                if (index == 0) {
                  this.setState({
                    currentUrl: dataSetUrl.url,
                    data: apiData,
                    
                  })
                }
              }
  
              else if (!this.props.chartType) {
                const apiTableData = apiData;

                if (this.props.dataSetUrls.length > 1) {
                  updatedTableTitle.push(' & ', apiTableData.title);
                } else { updatedTableTitle.push(apiTableData.title); }

                updatedInfoText = apiTableData.infoText;
                updatedDetailTable.push(apiTableData);
                updatedColumnHeadings = apiTableData.columnHeadings;
              }
            }
          })
          .catch(error => {
            this._errorHandler(error);
          });
      })).then(() => {
          if (!this.props.chartType) {
            if (updatedTableTitle[0] == ' & ') {
              updatedTableTitle.shift();
            }

            this.setState({
              title: updatedTitle,
              detailTableTitle: updatedTableTitle,
              infoText: updatedInfoText,
              columnHeadings: updatedColumnHeadings,
              tableData: updatedDetailTable,
            });
          }
      })
    }
    if (this.props.currentPlanYearUrl && this.props.clickedId) {
      axios
      .get(this.props.currentPlanYearUrl)
      .then(res => {
        const apiData = res.data.data;

        this.setState({
          clickedId: this.props.clickedId,
          selectedName: apiData.length > 1 ? apiData[0].selectedName : apiData.selectedName,
          currentPlanYearArray: apiData.length > 1 ? apiData : [apiData]
        });
        })
        .catch(error => {
          this._errorHandler(error);
        });
    }
    /*if (!this.props.mockData && this.props.chartType && (this.props.chartType =="Map" || this.props.chartType =="Pie")) {
      axios
        .get(`${this.props.dataSetUrls[0].url}/${this.props.calendarDefault}`)
        .then(res => {
          const apiData = res.data.data;

          if (apiData) {
            this.setState({
              data: apiData,
              tableData: apiData.tableData,
              title: apiData.title
            });
          }
        })
        .catch(error => {
          this._errorHandler(error);
        });
    } */
  }

  _errorHandler = (error) => {
    this.setState({
      error: `Failed calling API - ${error}`
    });
  }

  getClickedDrawerUrl = (clickedDrawerUrlFromChild, clickedDrawerIdFromChild) => {
    axios
      .get(clickedDrawerUrlFromChild)
      .then(res => {
        const apiData = res.data.data;

        if (apiData) {
          this.setState({
            detailedTableDrawerArray: Array.isArray(apiData) == false ? [apiData] : apiData,
            clickedId: clickedDrawerIdFromChild
          });
        }
      })
      .catch(error => {
        this._errorHandler(error);
      });
  };

  /*setUrl = ({ target: { name } }) => {
    const data = this.state.urlsData[this.state.dataSetUrls.indexOf(name)];

    this.setState({
      currentUrl: name,
      data: data
    });
  };*/


  setUrl = (name) => {
    
    //const data = this.state.urlsData[this.state.dataSetUrls.indexOf(name)];

    const productYearFilter = this.state.productYearFilter === undefined ? this.props.calendarDefault : this.state.productYearFilter;

    if( this.props.mockData && this.props.drillDownChart !== undefined ) {
      
      const data = this.props.dataSetUrls.find(elem => elem.url === name).mockData;
      this.setState({
        currentUrl: name,
        data: data,
        dataWarning: data.yearsOfData !== undefined && data.yearsOfData < productYearFilter ? data.yearsOfData : false
      })
      return false;
    }

    axios
    .get(name + `/${productYearFilter}`)
      .then(response => {
        const data = response.data.data;
        this.setState({
          currentUrl: name,
          data: data,
          dataWarning: data.yearsOfData !== undefined && data.yearsOfData < productYearFilter ? data.yearsOfData : false
        })
      })
      .catch(error => {
          this._errorHandler(error);
      });
  };

  handleDropdownChange = (timeRangeValue) => {
    if(this.props.mockData) {
      this.setState({
        productYearFilter: timeRangeValue 
      })
    }
    else {

      axios
      .get(this.state.currentUrl + `/${timeRangeValue}`)
        .then(response => {
          const data = response.data.data;

          this.setState({
            data: data,
            productYearFilter: timeRangeValue,
            dataWarning: data.yearsOfData !== undefined && data.yearsOfData < timeRangeValue ? data.yearsOfData : false
          })
        })
        .catch(error => {
            this._errorHandler(error);
        });
    }
  };

  render() {
    let { clickedId, title, detailTableTitle, graphTitle, selectedName,
      infoText,
      columnHeadings,
      tableData,
      detailedTableDrawerArray,
      currentPlanYearArray, 
      data, urlsData } = this.state;
 
    // Only for CompoundTable
    // Only rendering when data is avaiable
    if ((selectedName != "" && tableData.length > 0 && currentPlanYearArray.length > 0) || (!this.props.currentPlanYearUrl && columnHeadings.length > 0)) {
      return (
        <TableDetails
          title={selectedName}
          clickedId={clickedId}
          currentPlanYearArray={currentPlanYearArray}
          detailedTable={tableData}
          detailTableTitle={detailTableTitle}
          hiddenHeadingArray={this.props.hiddenHeadingArray}
          hiddenHeaderArray={this.props.hiddenHeaderArray}
          drawers={this.props.drawerSetUrls ? detailedTableDrawerArray : null}
          toggle={this.props.toggle ? true : false}
          search={this.props.search ? true : false}
          snapShot={this.props.snapShot ? true : false}
          getClickedDrawerUrl={this.getClickedDrawerUrl}
          dataSetUrls={this.props.dataSetUrls}
          drawerSetUrls={this.props.drawerSetUrls}
          // currentUrl={this.props.currentUrl}
          // handleDrawerChange={this.handleDrawerChange}
          current={this.props.currentPlanYearUrl ? true : false}
          largeTable={!this.props.smallTable ? true : false}
          ids={this.props.ids ? this.props.ids : null}
        />
      );
    }

    // Only for Comparison Card
    if (data && this.props.chartType) {
      return (
        <ComparisonCard
          data={data}
          mockData={this.props.mockData}
          chartType={this.props.chartType}
          calendarDefault={this.props.calendarDefault}
          colors={this.props.colors}
          handleYearFilter={this.handleDropdownChange}
          productYearFilter={this.state.productYearFilter === undefined ? this.props.calendarDefault : this.state.productYearFilter}
          ids={this.props.ids ? this.props.ids : null}
          dataWarning={this.state.dataWarning}
        />
      );
    }

    // Only for Drilldown Charts
    if (data) {
      return (
        <DrillDown
          graphTitle={graphTitle}
          data={data}
          drillDownChart={this.props.drillDownChart}
          colors={this.props.colors? this.props.colors : Colors.defaultGraph}
          dataSetUrls={this.props.dataSetUrls}
          setUrl={this.setUrl}
          currentUrl={this.state.currentUrl}
          searchByDisabled={this.props.searchByDisabled}
          calendarDefault={this.props.calendarDefault}
          smallGraph={this.props.smallGraph}
          smallTable={this.props.smallTable}
          handleYearFilter={this.handleDropdownChange}
          productYearFilter={this.state.productYearFilter === undefined ? this.props.calendarDefault : this.state.productYearFilter}
          dataWarning={this.state.dataWarning}
          mockData={this.props.mockData}
          ids={this.props.ids ? this.props.ids : null}
         />
      );
    }

    else {
      return <div className="loading--panel"><Loader>{this.state.error}</Loader></div>;
    }
  }
}