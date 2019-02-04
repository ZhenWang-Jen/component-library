export default {
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
}