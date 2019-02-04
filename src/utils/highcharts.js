const baseConfig = {
  colors: [],
  chart: {
    type: "column",
    height: 305,
    spacingLeft: 0,
    spacingBottom: 10,
  },
  credits: {
    enabled: false
  },
  title: {
    text: null
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
        font: "10px Open Sans",
        fontWeight: "bold",
        letterSpacing: '0.23px',
        lineHeight: '33px'
      },
      // formatter() {
      //   return null;
      // }
    },
    
  },
  exporting: {
    enabled: false
  },
  plotOptions: {
    series: {
      tooltip: {
        trackByArea: true,
        tooltip: {
          shared: true,
          positioner(labelWidth, labelHeight, point) {
            const tooltipX = point.plotX;
            const tooltipY = point.plotY;
            return {
              x: tooltipX,
              y: tooltipY
            };
          }
        }
      },
      legendItemClick() {
        return false;
      }
    }
  },
  drilldown: {
    allowPointDrilldown: false,
    activeAxisLabelStyle: {
      textDecoration: 'none',
      color: '#72757A !important',
      fontSize: '12px',
      fontWeight: 600,
      letterSpacing: '0.29px',
      lineheight: '18px'
    },
    series: []
  },
  series: [],
  tooltip: {
    shared: true,
    /*positioner(labelWidth, labelHeight, point) {
      const tooltipX = point.plotX;
      const tooltipY = point.plotY;
      return {
        x: tooltipX,
        y: tooltipY
      };
    },
    pointFormat: ""*/
  }
};

export default baseConfig;