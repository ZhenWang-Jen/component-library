export default {
  data: {
    color: "#CA5803",
    title: "Total Groups Pending OE",
    infoText: "Total Groups Pending OE since last month",
    trend: {
      timeRange: "future90",
      value: 80,
      compareWith: 70,
      valueType: "percent",
      since: "since January"
    },
    stats: [
      {
        value: 20,
        label: "Total Groups %",
        value_type: "percent"
      },
      {
        value: 42,
        label: "Life, The universe and everything.",
        value_type: "count"
      }
    ],
    chartData: [
      {
        name: "2017",
        data: [61, 186, 92, 114, 20000, 33, 333, 3333, 2302, 2000, 2001, 1911]
      },
      {
        name: "YTD",
        data: [22, 84, 234, 3000, 5000, 12345, 54321, 42, 42, 42]
      }
    ]
  },
  status: "success"
};
