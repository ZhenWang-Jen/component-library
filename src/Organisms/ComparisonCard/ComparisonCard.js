import React from "react";
import { Grid } from 'semantic-ui-react';
import ReactHighcharts from "react-highcharts";
const ReactHighmaps = require("react-highcharts/ReactHighmaps.src");

import DropDown from "../../Atoms/DropDown";
import Header from "../../Atoms/Header";
import Container from "../Container";
import SmallTable from "../SmallTable";

import * as configs from "./configs/config";
import dropdownConfig from "../../utils/dropdowns";
import getSeries from "./utils/getSeries";
import getSmallTableData from './utils/getSmallTableData';
import filterDataByYearSelected from './utils/filterDataByYearSelected';
import filterDataByYearSelectedPie from './utils/filterDataByYearSelectedPie';
import "./ComparisonCard.scss";

const calendarOptions = dropdownConfig.calendarDropdown;
const gainedLostDropdown = dropdownConfig.gainedLostDropdown;

const PRODUCT_MAX = 9

export default class ComparisonCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadMessage: null
    };
  }

  handleDropdownChange = (valueSelected) => {

    if(valueSelected === this.props.productYearFilter) {
      return false;
    }

    if( valueSelected === -1 ) {
      /** All Time selected */
      const yearsOfData = (this.props.data.yearsOfData) !== undefined ? this.props.data.yearsOfData : null

      if ( yearsOfData > PRODUCT_MAX ) {
        /** Show Download data message */
        if(this.props.data.allDataPass !== undefined && this.props.data.allDataPass !== '') {
         
          this.setState({
            downloadMessage: this.props.data.allDataPass
          })
        }
      }
      else {
        valueSelected = yearsOfData
      }
    }

    if( valueSelected !== -1 ) {
      
      /** TODO: 
       * Show loader while year filter API data gets fetched
      */
      this.props.handleYearFilter ? this.props.handleYearFilter(valueSelected) : null

      this.setState({
        downloadMessage: null
      });
    }


    /*if( this.props.chartType !== 'Pie' ) {
      this.props.handleYearFilter ? this.props.handleYearFilter(valueSelected) : null
    }*/
    /*this.setState({
      productYearFilter: valueSelected
    });*/
  }

  defaultSelection() {
    return calendarOptions.find((element) => {
      return element.value === this.props.calendarDefault;
    })
  }

  render() {
    let chartConfig = [], SmallTableData = [];

    for (const key in configs) {
      if (key == (this.props.chartType.toLowerCase() + 'ChartConfig')) {
        chartConfig = configs[key].config;
        //chartConfig = JSON.parse(JSON.stringify(configs[key].config));
      }
    }

    switch(this.props.chartType) {
      default:
      case 'Line':

        if( this.props.mockData ) {
          chartConfig.series = filterDataByYearSelected(
            getSeries(this.props.data.series),
            this.props.productYearFilter
          );
        }
        else {
          chartConfig.series = getSeries(this.props.data.series)
        }
    
        SmallTableData = getSmallTableData(chartConfig.series)

        break;

      case 'Pie':
      // console.log('pie props', this.props)
        /** Data Format */
        chartConfig.plotOptions.pie.dataLabels = {
          ...chartConfig.plotOptions.pie.dataLabels,
          format: (this.props.data.dataFormat === "percent") ? "{y} %" : "{y} K"
        }    
        /** Chart color */
        chartConfig.plotOptions.pie.colors = this.props.colors.chartColors;    
        /** Data Series */
        chartConfig.series[0].data = filterDataByYearSelectedPie(
          this.props.data,
          this.props.productYearFilter
        )[0];

        SmallTableData = filterDataByYearSelectedPie(
          this.props.data,
          this.props.productYearFilter
        )[1];
        break;

      case 'Map':
        /** Chart color */
        chartConfig.colorAxis.minColor = this.props.colors.chartColors[0];
        chartConfig.colorAxis.maxColor = this.props.colors.chartColors[1];
        
        const mapData = this.props.mockData || this.props.data;

        /** Chart formatter */
        chartConfig.tooltip = {
          ...chartConfig.tooltip,
          formatter: function () {
            for (var i = 0; i < mapData.tableData.length; i++) {
              if (this.point["hc-key"] == mapData.tableData[i].state) {
                return 'State: ' + this.point.name + '<br>' +
                'Gained: ' + mapData.tableData[i].gained + '<br>' +
                'Lost: ' + mapData.tableData[i].lost;
              }
            }
          }
        }
  
        let convertedMapData = []; // convert client's customized data series into library-acceptted format.
        
        this.props.data.series.map((stateData, index) => {
          convertedMapData.push(Object.values(stateData))
        });
        
         /** Making deep copy of new data */
        chartConfig.series[0].data = convertedMapData;
        SmallTableData = JSON.parse(JSON.stringify(convertedMapData)); 
        break;

      case 'sparkLine':
        chartConfig.series = this.props.data.config.series;

        // get copy of series data
        const dashedSeries = [...this.props.data.config.series];

        // added dash style to 0th index series.  (This makes the first SparkLine dashed.)
        if(dashedSeries.length > 0){
          dashedSeries[0].dashStyle = "LongDash";
        }
        // Merged the default config with the data / colors from the API.
        chartConfig = Object.assign({}, configs.sparkLineChartConfig.config, {
          series: dashedSeries,
          colors: [...configs.sparkLineChartConfig.config.colors, this.props.color]
        });

        return (
          <ReactHighcharts config={chartConfig} />
        )
        break;

      case 'Bar':
      case 'drillDown':
        chartConfig.series = this.props.data.series;
        break;
    }
    
    if (this.props.chartType != 'sparkLine') {
     return ( 
      <Grid className={'comparisionCard'} id={this.props.ids ? this.props.ids.graph : null}>
        <Grid.Column width={12} style={{padding: 0}}>
          <Container
            title={this.props.data.title}
            infoToolTip
            infoText={this.props.data.infoText}
            ids={this.props.ids ? this.props.ids : null}
          >
            <React.Fragment>
              <Grid.Row style={{padding: 0}}>
                <Grid.Column width={12}>
                  <DropDown 
                    defaultValue={(this.props.calendarDefault !== undefined) ? this.defaultSelection().value : calendarOptions[0].value}
                    options={calendarOptions}
                    onChange={this.handleDropdownChange}
                    placeholder={(this.props.calendarDefault !== undefined) ? this.defaultSelection().text : null}
                    selection
                    ids={this.props.ids ? this.props.ids.graphYearQuickset : null}
                  />
                </Grid.Column> 

                <Grid.Column width={4}>
                  {SmallTableData ? (
                    <DropDown
                      className="export-dropdown"
                      icon="download"
                      ids={this.props.ids ? this.props.ids.graphExportList : null}
                      chart
                      columnHeaders={gainedLostDropdown}
                      tableData={SmallTableData}
                      fileName={this.props.data.title}
                      // fileName={`${
                      //   this.props.title
                      // } - ${new Date().getMonth()}-${new Date().getDate()}-${new Date().getFullYear()}`}
                    />
                  ) : null}
                </Grid.Column> 
              </Grid.Row>
              <Grid.Row columns={1} style={{ paddingBottom: 0 }}>
                <Grid.Column>
                  <div className={'comparisonGraph--wrapper'} id={this.props.ids ? this.props.ids.graphGraphContainer : null}>
                  {(!this.state.downloadMessage && chartConfig.series[0].data.length > 0) ? 
                    (this.props.chartType === 'Map' ? <ReactHighmaps config={chartConfig} /> : <ReactHighcharts config={chartConfig} />)
                      : (<div className={'comparisonGraph--error-container no-result-message'}>
                          <Header
                            header={'No Results'}
                            subheader={this.state.downloadMessage ? this.state.downloadMessage : 'Please change your parameter.'}
                            className={'customized'}
                          />
                        </div>)
                  }
                  </div>
                </Grid.Column>
              </Grid.Row>
            </React.Fragment>
          </Container>
        </Grid.Column>
        
        <Grid.Column width={4} style={{padding: 0, backgroundColor: this.props.colors.tableColors[1]}}>
          <SmallTable 
            title={this.props.data.tableTitle}
            data={this.state.downloadMessage ? [] : SmallTableData}
            chartType={this.props.chartType}
            productYearFilter={this.props.productYearFilter}
            color={this.props.colors.tableColors}
            ids={this.props.ids ? this.props.ids : null}
            downloadMessage={this.state.downloadMessage}
          />
        </Grid.Column>
      </Grid>
    );
   }
  }
};
