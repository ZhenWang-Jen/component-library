import React from "react";
import ReactHighcharts from "react-highcharts";
import getSeries from "../utils/getSeries";
import Header from "../../../Atoms/Header";
import addDrillDownKeyPropToSeries from "../utils/addDrillDownKeyPropToSeries";
import baseConfig from "../../../utils/highcharts";

class YearToMonthDrillDown extends React.Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
    this.handleClearBreadCrumbsEvent = this.handleClearBreadCrumbsEvent.bind(this);
    this.handleProductDrillUpEvent = this.handleProductDrillUpEvent.bind(this);
    this.handleMonthDrillUpEvent = this.handleMonthDrillUpEvent.bind(this);

    this.chartType = 'yearMonthDrillDown';
  }

  componentDidMount() {

    // global event listeners for breakcrumbs

    if(this.chart.current)
      this.chartEvent = this.chart.current.getChart();

    window.addEventListener(
      `product - ${this.props.id}`,
      this.handleProductDrillUpEvent
    );
    window.addEventListener(
      `month - ${this.props.id}`,
      this.handleMonthDrillUpEvent
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

    // Re-render if toggle option is changed
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
      `month - ${this.props.id}`,
      this.handleMonthDrillUpEvent
    );
    window.removeEventListener(
      `clear-bread-crumbs - ${this.props.id}`,
      this.handleClearBreadCrumbsEvent
    );
  }

  handleProductDrillUpEvent() {

    if(this.chart.current !== undefined) {
      this.chartEvent = this.chart.current.getChart();
    }

    // if product is clicked go to top level
    this.chartEvent.drillUp();
  }

  handleMonthDrillUpEvent() {
    // dont drillup on click
    // only shows lowest level and should not leave the level it represents
    // this.chart.drillUp();
  }

  handleClearBreadCrumbsEvent() {

    if(this.chart.current !== undefined) {
      this.chartEvent = this.chart.current.getChart();
    }
    
    this.chartEvent.drillUp();
    this.props.clearBreadCrumbs();
  }

  render() {
    /**
     * Making a deep copy of `baseConfig`,
     * In loop baseConfigYQDD.drilldown obj won't change, 
     * Complex obj's are passed by reference
    */

    let baseConfigYQDD = JSON.parse(JSON.stringify(baseConfig));
    // ONLY update needed style/data change, otherwise it will reset the whole chart.
    // i.e. if you use drilldown: { series: {...} } to update the chart, it will reset the drilldown style back to default even if you only change drilldown series.
    const { colors } = this.props;
    baseConfigYQDD.colors = colors;

    baseConfigYQDD.drilldown.series = this.props.drillDownSeries;

    baseConfigYQDD.chart.events = {
      load: function(e) {
        if(this.props.product !== null) {
          // Chart is already drilled
          if( this.props.month === true ) {
            // First level drill-down
            /**
             *  We don't drill-down programmatically by using `doDrilldown` method,
             *  as it won't drill all the series from that particular point.
             *  Instead, we trigger click on any particular series 
             *  In this case it's 0th index of series
            */ 
            if( undefined !== e.target.series[0].data){
              e.target.series[0].data[this.props.drillDownProductLevelID._byYear].firePointEvent('click');
            }
          }
          else {
            this.props.clearBreadCrumbs();
          }
        }
      }.bind(this),
     drilldown: function drilldownEventHandler(e) {
      if (this.props.month === false) {
        this.props.setBreadCrumbProduct(
          e.seriesOptions.id.split(" - ")[1]
        );

        this.props.setBreadCrumbMonth(true);
        // Save the current drilled Product index
        this.props.setDrillDownProductID(e.category, 'byYear');
       }
     }.bind(this),
     drillup: function drillupEventHandler(e) {
       this.props.setBreadCrumbMonth(false);
       this.props.setBreadCrumbProduct(null);
     }.bind(this)
    };

    if( this.props.smallGraph ) {
      baseConfigYQDD = {
        ...baseConfigYQDD,
        legend: {enabled: false},
        chart: {
                ...baseConfigYQDD.chart,
                height: 225
              }
      }
    }


    if(this.props.dataFormat === "currency") {
      baseConfigYQDD.yAxis.labels = {
        ...baseConfigYQDD.yAxis.labels,
        formatter() {
          return `$${this.axis.defaultLabelFormatter.call(this)}`
        }
      }
    }
    else {
      baseConfigYQDD.yAxis.labels = {
        ...baseConfigYQDD.yAxis.labels,
        formatter() {
          return `${String(this.value).substring(0, 3)}%`
        }
      }
    }

    // Update tooltip config
    baseConfigYQDD.tooltip = this.props.toolTipFormat;
    
    // final configuration passed into ReactHighcharts

    const config = {
      ...baseConfigYQDD,
      series: addDrillDownKeyPropToSeries(
        getSeries(this.props.data),
        ({ companyName, name }) =>
          `${companyName} - ${name} - ${name} - byMonth`
      )
    };

    if (config.series[0].data.length !== 0) {
      return (
        <div style={{ width: "100%" }} id={this.props.ids && this.props.ids.graphGraphContainer ? this.props.ids.graphGraphContainer : null}>
          <ReactHighcharts ref={this.chart} config={config} />
        </div>
      );
    }
    
    this.props.clearBreadCrumbs();

    return (
      <div className="no-result-message-drilldown" style={{height: 305}}>
        <Header
          header={'No Results'}
          subheader={'Please change your parameter.'}
          className={'customized'}
        />
      </div>
    );
  }
}

export default YearToMonthDrillDown;