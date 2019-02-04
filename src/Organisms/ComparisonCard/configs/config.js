import usMap from "./us-all.geo";
const mapChartConfig = {
	config: {
    chart: {
      map: usMap,
      height: 235,
      reflow: true,
      type: "map"
    },
    title: {
      text: null
    },
    subtitle: {
      text: null
    },
    credits: {
      enabled: false
    },
    colorAxis: {
      minColor: "#ffffff",
      maxColor: "#000000"
    },
    mapNavigation: {
      enabled: false,
      buttonOptions: {
        verticalAlign: "bottom"
      }
    },
    legend: {
      enabled: false
    },
    series: [
    	{
			}
    ],
    tooltip: {
      headerFormat: null
    }
  }
};

const pieChartConfig = {
  config: {
    chart: {
      height: 235,
      spacingLeft: 0,
      spacingBottom: 10,
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: null
    },
    tooltip: {
      pointFormat: " <b>{point.percentage:.1f}%</b>"
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: 0,
          // style: {
          //   textDecoration: 'none !important'
          // }
        },
        innerSize: "70%",
        showInLegend: true
      }
    },
    // plotOptions: {
    //   pie: {
    //     allowPointSelect: true,
    //     cursor: 'pointer',
    //     // dataLabels: {
    //     //   enabled: false
    //     // },
    //     showInLegend: true
    //   }
    // },
    series: [
        {
          data: []
        }
    ]
  }
};

const lineChartConfig = {
    config: {
      chart: {
        height: 235,
        spacingLeft: 0,
        spacingBottom: 10,
      },
      legend: {
        itemStyle: {
          color: '#818285',
          fontSize: '10px',
          letterSpacing: '0.23px',
          fontFamily: 'Open Sans'
        },
        style: {
          backgroundColor: 'red'
        }
      },
      plotOptions: {
          series: {
              lineWidth: 4
          }
      },
      xAxis: {
        type: "category",
        tickColor: "transparent",
        labels: {
          style: {
            color: '#72757A !important',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.29px',
            lineheight: '18px'
          }
        }
      },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          // align: 'left',
          // x: 0,
          y: -2,
          style: {
            color: "#72757A",
            fontFamily: "Open Sans",
            fontWeight: "bold",
            letterSpacing: '0.23px',
            lineHeight: '33px'
          }
        }
      },
      title: {
        text: null
      },
      exporting: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      series: []
    }
};

const sparkLineChartConfig = {
  config: {
    chart: {
      type: "line",
      height: 70,
      width: 100
    },
    title: {
      text: null
    },
    tooltip: {
      headerFormat: "",
      pointFormat: '<span style="color:{series.color}">{series.name}</span><br/>',
      shared: true,
      borderRadius: 3,
      borderWidth: 0,
      followPointer: false
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      line: {
        lineWidth: 1,
        marker: {
          enabled: false
        }
      }
    },
    series: [],

    yAxis: {
      title: {
        text: null
      },
      visible: false,
      labels: {
        enabled: false
      }
    },
    xAxis: {
      visible: false,
      tickColor: "transparent",
      labels: {
        enabled: false
      }
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    colors: ["grey"]
  }
};

const barChartConfig = { 
  config: {
    chart: {
      height: 245,
      spacingLeft: 0,
      spacingBottom: 10,
      type: 'column'
    },
    legend: {
      enabled: false
  },
  plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true
        }
    }
},
    xAxis: {
      type: "category",
      tickColor: "transparent",
      labels: {
        style: {
          color: '#72757A !important',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.29px',
          lineheight: '18px'
        }
      }
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        // align: 'left',
        // x: 0,
        y: -2,
        style: {
          color: "#72757A",
          fontFamily: "Open Sans",
          fontWeight: "bold",
          letterSpacing: '0.23px',
          lineHeight: '33px'
        }
      }
    },
    title: {
      text: null
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Things',
      colorByPoint: true,
      data: [{
          name: 'Animals',
          y: 5,
          drilldown: 'animals'
      }, {
          name: 'Fruits',
          y: 2,
          drilldown: 'fruits'
      }, {
          name: 'Cars',
          y: 4,
          drilldown: 'cars'
      }]
  }]
  }
};

const drilldownChartConfig = { 
  config: {
    chart: {
      height: 245,
      spacingLeft: 0,
      spacingBottom: 10,
      type: 'column'
    },
    legend: {
      enabled: false
  },
  plotOptions: {
    series: {
        borderWidth: 0,
        dataLabels: {
            enabled: true
        }
    }
},
    xAxis: {
      type: "category",
      tickColor: "transparent",
      labels: {
        style: {
          color: '#72757A !important',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.29px',
          lineheight: '18px'
        }
      }
    },
    yAxis: {
      title: {
        text: null
      },
      labels: {
        // align: 'left',
        // x: 0,
        y: -2,
        style: {
          color: "#72757A",
          fontFamily: "Open Sans",
          fontWeight: "bold",
          letterSpacing: '0.23px',
          lineHeight: '33px'
        }
      }
    },
    title: {
      text: null
    },
    exporting: {
      enabled: false
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Things',
      colorByPoint: true,
      data: [{
          name: 'Animals',
          y: 5,
          drilldown: 'animals'
      }, {
          name: 'Fruits',
          y: 2,
          drilldown: 'fruits'
      }, {
          name: 'Cars',
          y: 4,
          drilldown: 'cars'
      }]
  }],
  drilldown: {
      series: [{
          id: 'animals',
          data: [
              ['Cats', 4],
              ['Dogs', 2],
              ['Cows', 1],
              ['Sheep', 2],
              ['Pigs', 1]
          ]
      }, {
          id: 'fruits',
          data: [
              ['Apples', 4],
              ['Oranges', 2]
          ]
      }, {
          id: 'cars',
          data: [
              ['Toyota', 4],
              ['Opel', 2],
              ['Volkswagen', 2]
          ]
      }]
  }
  }
};
export {
    mapChartConfig,
    pieChartConfig,
    lineChartConfig,
    sparkLineChartConfig,
    barChartConfig,
    drilldownChartConfig
};