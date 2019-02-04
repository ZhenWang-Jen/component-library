import React, { Component } from "react";
import Header from "../../../Atoms/Header";
import ReactHighcharts from "react-highcharts";
import getSeries from "../utils/getSeries";
import baseConfig from "../../../utils/highcharts";
// base config from highcharts
// reference https://api.highcharts.com/highcharts/

class NoDrillDownChart extends Component {
  constructor(props) {
    super(props);
    this.chart = React.createRef();
    this.chartType = 'NoDrillDownChart';
  }

  // componentDidMount() {

  //   // global events listening for breadcrumb actions

  //   this.chart = this.chart.current.getChart();

  //   this.moveSeriesRight()
  // }

  // moveSeriesRight() {
  //   debugger
  //   console.log(document.getElementsByClassName("highcharts-tracker")[0])
  //         // Standard syntax
  //         document.getElementsByClassName("highcharts-tracker")[0].style.transform = "translate(50,10) scale(1 1)";
  //         console.log(document.getElementsByClassName("highcharts-tracker"))
  //       }

  render() {
    let baseConfigNDD = baseConfig;

    const { colors } = this.props;

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

    baseConfigNDD.colors = colors;

    baseConfigNDD.yAxis.labels =
      this.props.dataFormat === "currency" ? yAxisCurrencyLabels : yAxisLabels;

    // final configuration passed into ReactHighcharts
    const config = {
      ...baseConfigNDD,
      series: getSeries(this.props.data)
    };

    if( config.series[0].data.length !== 0 )
      return <ReactHighcharts ref={this.chart} config={config} />;

    return (
      <div className="no-result-message-no--drilldown-chart" style={{height: 305, textAlign: "center"}}>
          <Header
            header={'No Results'}
            subheader={'Please change your parameter.'}
            className={'customized'}
          />
      </div>
    );
  }
}

export default NoDrillDownChart;