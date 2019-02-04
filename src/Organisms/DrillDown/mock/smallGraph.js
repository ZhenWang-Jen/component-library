export default {
  title: "Premium",
  infoText: "Comparisons of Carrier's premium for all Employer Groups across all product lines.",
  dataFormat: "currency",
  series: [
    {
      name: "Premium",
      products: [
        {
          productName: "2016",
          productData: [
            {
              year: 2016,
              month: 0,
              value: 13050
            },
            {
              year: 2016,
              month: 1,
              value: 15000
            },
            {
              year: 2016,
              month: 2,
              value: 15000
            },
            {
              year: 2016,
              month: 3,
              value: 14204
            },
            {
              year: 2016,
              month: 4,
              value: 13304
            },
            {
              year: 2016,
              month: 5,
              value: 9000
            },
            {
              year: 2016,
              month: 6,
              value: 9000
            },
            {
              year: 2016,
              month: 7,
              value: 9000
            },
            {
              year: 2016,
              month: 8,
              value: 9000
            },
            {
              year: 2016,
              month: 9,
              value: 9000
            },
            {
              year: 2016,
              month: 10,
              value: 9000
            },
            {
              year: 2016,
              month: 11,
              value: 9000
            }
          ]
        },
        {
          productName: "2017",
          productData: [
            {
              year: 2017,
              month: 0,
              value: 15400
            },
            {
              year: 2017,
              month: 1,
              value: 15000
            },
            {
              year: 2017,
              month: 2,
              value: 15000
            },
            {
              year: 2017,
              month: 3,
              value: 14204
            },
            {
              year: 2017,
              month: 4,
              value: 13304
            },
            {
              year: 2017,
              month: 5,
              value: 9000
            },
            {
              year: 2017,
              month: 6,
              value: 9000
            },
            {
              year: 2017,
              month: 7,
              value: 9000
            },
            {
              year: 2017,
              month: 8,
              value: 9000
            },
            {
              year: 2017,
              month: 9,
              value: 9000
            },
            {
              year: 2017,
              month: 10,
              value: 9000
            },
            {
              year: 2017,
              month: 11,
              value: 9000
            }
          ]
        },
        /*{
          productName: "2018",
          productData: [
            {
              year: 2018,
              month: 0,
              value: 12900
            },
            {
              year: 2018,
              month: 1,
              value: 15000
            },
            {
              year: 2018,
              month: 2,
              value: 15000
            },
            {
              year: 2018,
              month: 3,
              value: 14204
            },
            {
              year: 2018,
              month: 4,
              value: 13304
            },
            {
              year: 2018,
              month: 5,
              value: 9000
            },
            {
              year: 2018,
              month: 6,
              value: 9000
            },
            {
              year: 2018,
              month: 7,
              value: 9000
            },
            {
              year: 2018,
              month: 8,
              value: 9000
            },
            {
              year: 2018,
              month: 9,
              value: 9000
            },
            {
              year: 2018,
              month: 10,
              value: 9000
            },
            {
              year: 2018,
              month: 11,
              value: 9000
            }
          ]
        }*/
      ]
    }
  ],
  /** 
   * This should be removed from Mock,
   * Need a function to calc & return this
  */ 
  tableData: [
    {name: "Q1", y: 9},
    {name: "Q2", y: 0},
    {name: "Q3", y: -1},
    {name: "Q4", y: 7.4}
  ]

  /* OLD modal - not needed anymore
  
  summary: {
    config: {
      bodyColor: "#F2F9F8",
      headerColor: "#D8EEEA",
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
  }*/
};