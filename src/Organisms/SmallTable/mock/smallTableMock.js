export default {
  data: [
    {name: "Q1", y: 19},
    {name: "Q2", y: 0},
    {name: "Q3", y: -1},
    {name: "Q4", y: 7.4}
  ]
}

/*
  OLD mock modal 

export default {
  data: {
    summary: {
      config: {
        bodyColor: "#FEF3EB",
        headerColor: "#FCDBC5",
        title: "Comparison",
        valueType: "percent",
        columns: [
          { title: "", field: "qtr", isbold: true },
          {
            title: "%",
            field: "percent",
            colorNumber: true,
            transform: "percentage"
          },
          {
            title: "'16",
            field: "fromYear",
            colorNumber: false,
            transform: "currency"
          },
          {
            title: "'18",
            field: "toYear",
            colorNumber: false,
            transform: "currency"
          }
        ]
      },
      data: [
        { qtr: "Q1", percent: "9", fromYear: 35000000, toYear: 34000000 },
        { qtr: "Q2", percent: "0", fromYear: 32000000, toYear: 31000000 },
        { qtr: "Q3", percent: "-1", fromYear: 30000000, toYear: 29666666 },
        { qtr: "Q4", percent: "7.4", fromYear: 27000000, toYear: 29000000 }
      ]
    }
  }
};*/