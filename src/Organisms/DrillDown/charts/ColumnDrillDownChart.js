import React from "react";
import ReactHighcharts from "react-highcharts";
import Header from "../../../Atoms/Header";
import getSeries from "../utils/getSeries";
import getSeriesAvgs from "../utils/getSeriesAvgs";
import addDrillDownKeyPropToSeries from "../utils/addDrillDownKeyPropToSeries";
import baseConfig from "../../../utils/highcharts";
// base config from highcharts
// reference https://api.highcharts.com/highcharts/

class ColumnDrillDownChart extends React.Component {
  constructor(props) {
    super(props);
    this.handleClearBreadCrumbsEvent = this.handleClearBreadCrumbsEvent.bind(
      this
    );
    this.handleProductDrillUpEvent = this.handleProductDrillUpEvent.bind(this);
    this.handleYearDrillUpEvent = this.handleYearDrillUpEvent.bind(this);
    this.handleQuarterDrillUpEvent = this.handleQuarterDrillUpEvent.bind(this);
    this.chart = React.createRef();
  }

  componentDidMount() {
    // global events listening for breadcrumb actions

    if(this.chart.current)
      this.chartEvent = this.chart.current.getChart();

    window.addEventListener(
      `product - ${this.props.id}`,
      this.handleProductDrillUpEvent
    );
    window.addEventListener(
      `year - ${this.props.id}`,
      this.handleYearDrillUpEvent
    );
    window.addEventListener(
      `quarter - ${this.props.id}`,
      this.handleQuarterDrillUpEvent
    );
    window.addEventListener(
      `clear-bread-crumbs - ${this.props.id}`,
      this.handleClearBreadCrumbsEvent
    );
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.productLineFilterKeys !== this.props.productLineFilterKeys) {
      return true;
    }

    // Re-render if year dropdown has changed
    if (nextProps.productYearFilter !== this.props.productYearFilter) {
      return true;
    }

    if (nextProps.currentUrl !== this.props.currentUrl) {
      return true;
    }

    return false;
  }

  componentWillUnmount() {
    window.removeEventListener(
      `product - ${this.props.id}`,
      this.handleProductDrillUpEvent
    );
    window.removeEventListener(
      `year - ${this.props.id}`,
      this.handleYearDrillUpEvent
    );
    window.removeEventListener(
      `quarter - ${this.props.id}`,
      this.handleQuarterDrillUpEvent
    );
    window.removeEventListener(
      `clear-bread-crumbs - ${this.props.id}`,
      this.handleClearBreadCrumbsEvent
    );
  }

  handleProductDrillUpEvent() {
    /** 
     * Quick-fix for Chart ref issue
     * When Calendar-year or SearchBy-Product filter changes
    */ 
    if(this.chart.current !== undefined) {
      this.chartEvent = this.chart.current.getChart();
    }

    // if product is clicked go to top level
    this.chartEvent.drillUp();

    if( this.props.quarter ){
      this.chartEvent.drillUp();
    }
  }

  handleYearDrillUpEvent() {
    /** 
     * Quick-fix for Chart ref issue
     * When Calendar-year or SearchBy-Product filter changes
    */ 
    if(this.chart.current !== undefined) {
      this.chartEvent = this.chart.current.getChart();
    }

    // dont drill up unless on quarter value is true
    if (this.props.quarter) {
      this.chartEvent.drillUp();
    }
  }

  handleQuarterDrillUpEvent() {
    // dont drillup on click
    // only shows lowest level and should not leave the level it represents
    // this.chart.drillUp();
  }

  handleClearBreadCrumbsEvent() {
    /** 
     * Quick-fix for Chart ref issue
     * When Calendar-year or SearchBy-Product filter changes
    */ 
    if(this.chart.current !== undefined) {
      this.chartEvent = this.chart.current.getChart();
    }

    // call drillUp three times to ensure top level of drilldown chart reached

    if (this.props.product && this.props.quarter) {  
      this.chartEvent.drillUp();
      this.chartEvent.drillUp();
    }
    else{
      this.chartEvent.drillUp();
    }

    this.props.clearBreadCrumbs();
  }

  render() {
    let baseConfigCDD = baseConfig;
    const { colors } = this.props;
    // ONLY update needed style/data change, otherwise it will reset the whole chart.
    // i.e. if you use drilldown: { series: {...} } to update the chart, it will reset the drilldown style back to default even if you only change drilldown series.

    const yAxisLabels = {
      // align: 'left',
      // x: 0,
      y: -2,
      style: {
        color: "#72757A",
        font: "10px Open Sans",
        fontWeight: "bold",
        letterSpacing: '0.23px',
        lineHeight: '33px'
      },
      formatter() {
        return `${String(this.value).substring(0, 3)}%`;
      }
    };

    const yAxisCurrencyLabels = {
      // align: 'left',
      // x: 0,
      y: -2,
      style: {
        color: "#72757A",
        font: "10px Open Sans",
        fontWeight: "bold",
        letterSpacing: '0.23px',
        lineHeight: '33px'
      },
      formatter() {
        return `$${this.axis.defaultLabelFormatter.call(this)}`;
      }
    };

    baseConfigCDD.colors = colors;

    baseConfigCDD.drilldown.series = this.props.drillDownSeries;
   
    baseConfigCDD.yAxis.labels =
      this.props.dataFormat === "currency" ? yAxisCurrencyLabels : yAxisLabels;
    //baseConfigCDD.tooltip.pointFormat = '<span style="color:{series.color}">{series.name}</span>:AAA {point.y:.0f}%<br/>';

    const siris = addDrillDownKeyPropToSeries(
      getSeries(this.props.data),
      ({ companyName, name }) => `${companyName} - ${name} - byYear`
    );
    const avgSeries = getSeriesAvgs(siris);
    // final configuration passed into ReactHighcharts

    let finalConfig = {
      ...baseConfigCDD,
      series: this.props.dataFormat === "percent" ? avgSeries : siris,
      chart: {
        type: "column",
        height: 305,
        spacingLeft: 0,
        spacingBottom: 10,
        events: {
          load: function(e) {

            if(this.props.product !== null) {
              // Chart is already drilled
              if( this.props.year === true ) {
                // First level drill-down
                /**
                 *  We don't drill-down programmatically by using `doDrilldown` method,
                 *  as it won't drill all the series from that particular point.
                 *  Instead, we trigger click on any particular series 
                 *  In this case it's 0th index of series
                */ 

                e.target.series[0].data[this.props.drillDownProductLevelID._byYear].firePointEvent('click');
                
                //e.target.series[0].data[this.props.drillDownProductLevelID._byYear].doDrilldown();
              }
              if(this.props.year && this.props.quarter) {
                // Second level drill-down, and toggleData sets changed
                if( undefined !== e.target.series[0].data){
                  e.target.series[0].data[this.props.drillDownProductLevelID._byQuarter].firePointEvent('click');
                }
              }
             /* if(this.props.year && this.props.quarter) {
                // Second level drill-down

                if( undefined !== e.target.series[0].data){
                  console.log('drill down to 2 levels');
                  //e.target.series[0].data[this.props.drillDownProductLevelID._byYear].firePointEvent('click');
                  //e.target.series[0].data[this.props.drillDownProductLevelID._byQuarter].firePointEvent('click');
                }
                /*if( undefined === e.target.series[0].data[this.props.drillDownProductLevelID._byYear]){
                  console.log('Undefined Do nothing. Log ========> ', e.target.series[0]);
                }
                else{
                  
                }
              }*/
            }
          }.bind(this),
          drilldown: function drilldownEventHandler(e) {
            if (
              this.props.product == null &&
              this.props.year === false &&
              e.seriesOptions.id.split(" - ")[2] === "byYear"
            ) {
              this.props.setBreadCrumbProduct(
                e.seriesOptions.id.split(" - ")[1]
              );
              this.props.setBreadCrumbYear(true);

              // Save the current drilled Product index
              this.props.setDrillDownProductID(e.category, 'byYear');
            } 
            else if (
              this.props.quarter === false &&
              e.seriesOptions.id.split(" - ")[3] === "byQuarter"
            ) {

              this.props.setDrillDownProductID(e.category, 'byQuarter');
              this.props.setBreadCrumbQuarter(true);
            }
          }.bind(this),
          drillup: function drillupEventHandler(e) {
            if (
              e.seriesOptions.data[0].drilldown.split(" - ")[3] === "byQuarter"
            ) {
              this.props.setBreadCrumbQuarter(false);
            } else if (
              e.seriesOptions.data[0].drilldown.split(" - ")[2] === "byYear"
            ) {
              this.props.setBreadCrumbYear(false);
              this.props.setBreadCrumbProduct(null);
            }
          }.bind(this)
        }
      }
    };
    // Update tooltip config
    finalConfig.tooltip = this.props.toolTipFormat;

    if (finalConfig.series[0].data.length !== 0) {
      return (
        <div style={{ width: "100%" }} id={this.props.ids && this.props.ids.graphGraphContainer ? this.props.ids.graphGraphContainer : null}>
          <ReactHighcharts ref={this.chart} config={finalConfig} />
        </div>
      );
    }
    
    return (
      <div className="no-result-message-drilldown" style={{height: 305, textAlign: "center"}}>
          <Header
            header={'No Results'}
            subheader={'Please change your parameter.'}
            className={'customized'}
          />
      </div>
    );
  }
}

export default ColumnDrillDownChart;