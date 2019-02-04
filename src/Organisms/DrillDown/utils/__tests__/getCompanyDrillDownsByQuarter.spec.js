import getCompanyDrillDownsByQuarter from "../getCompanyDrillDownsByQuarter";

describe("getCompanyDrillDownsByQuarter", () => {
  test("should return four formated qtr drillsdowns for each year", () => {
    const INPUT = {
      name: "Pacific Sun",
      products: [
        {
          productName: "Dental",
          productData: [
            {
              year: 2014,
              month: 0,
              value: 100
            },
            {
              year: 2014,
              month: 1,
              value: 100
            },
            {
              year: 2014,
              month: 2,
              value: 100
            },
            {
              year: 2014,
              month: 3,
              value: 100
            },
            {
              year: 2014,
              month: 4,
              value: 100
            },
            {
              year: 2014,
              month: 5,
              value: 100
            },
            {
              year: 2014,
              month: 6,
              value: 100
            },
            {
              year: 2014,
              month: 7,
              value: 100
            },
            {
              year: 2014,
              month: 8,
              value: 100
            },
            {
              year: 2014,
              month: 9,
              value: 100
            },
            {
              year: 2014,
              month: 10,
              value: 100
            },
            {
              year: 2014,
              month: 11,
              value: 100
            },
            {
              year: 2015,
              month: 0,
              value: 100
            },
            {
              year: 2015,
              month: 1,
              value: 100
            },
            {
              year: 2015,
              month: 2,
              value: 100
            },
            {
              year: 2015,
              month: 3,
              value: 100
            },
            {
              year: 2015,
              month: 4,
              value: 100
            },
            {
              year: 2015,
              month: 5,
              value: 100
            },
            {
              year: 2015,
              month: 6,
              value: 100
            },
            {
              year: 2015,
              month: 7,
              value: 100
            },
            {
              year: 2015,
              month: 8,
              value: 100
            },
            {
              year: 2015,
              month: 9,
              value: 100
            },
            {
              year: 2015,
              month: 10,
              value: 100
            },
            {
              year: 2015,
              month: 11,
              value: 100
            },
            {
              year: 2016,
              month: 0,
              value: 100
            },
            {
              year: 2016,
              month: 1,
              value: 100
            },
            {
              year: 2016,
              month: 2,
              value: 100
            },
            {
              year: 2016,
              month: 3,
              value: 100
            },
            {
              year: 2016,
              month: 4,
              value: 100
            },
            {
              year: 2016,
              month: 5,
              value: 100
            },
            {
              year: 2016,
              month: 6,
              value: 100
            },
            {
              year: 2016,
              month: 7,
              value: 100
            },
            {
              year: 2016,
              month: 8,
              value: 100
            },
            {
              year: 2016,
              month: 9,
              value: 100
            },
            {
              year: 2016,
              month: 10,
              value: 100
            },
            {
              year: 2016,
              month: 11,
              value: 100
            }
          ]
        }
      ]
    };

    const EXPECTED_OUTPUT = [
      {
        id: "Pacific Sun - Dental - 2014 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2014 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2014 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2014 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2014 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - Dental - 2015 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2015 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2015 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2015 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2015 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - Dental - 2016 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2016 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2016 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2016 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2016 - Q4 - byMonth"
          }
        ]
      }
    ];
    expect(getCompanyDrillDownsByQuarter(INPUT)).toEqual(EXPECTED_OUTPUT);
  });

  test("should return four formated qtr drillsdowns for each year", () => {
    const INPUT = {
      name: "Pacific Sun",
      products: [
        {
          productName: "Dental",
          productData: [
            {
              year: 2014,
              month: 0,
              value: 100
            },
            {
              year: 2014,
              month: 1,
              value: 100
            },
            {
              year: 2014,
              month: 2,
              value: 100
            },
            {
              year: 2014,
              month: 3,
              value: 100
            },
            {
              year: 2014,
              month: 4,
              value: 100
            },
            {
              year: 2014,
              month: 5,
              value: 100
            },
            {
              year: 2014,
              month: 6,
              value: 100
            },
            {
              year: 2014,
              month: 7,
              value: 100
            },
            {
              year: 2014,
              month: 8,
              value: 100
            },
            {
              year: 2014,
              month: 9,
              value: 100
            },
            {
              year: 2014,
              month: 10,
              value: 100
            },
            {
              year: 2014,
              month: 11,
              value: 100
            },
            {
              year: 2015,
              month: 0,
              value: 100
            },
            {
              year: 2015,
              month: 1,
              value: 100
            },
            {
              year: 2015,
              month: 2,
              value: 100
            },
            {
              year: 2015,
              month: 3,
              value: 100
            },
            {
              year: 2015,
              month: 4,
              value: 100
            },
            {
              year: 2015,
              month: 5,
              value: 100
            },
            {
              year: 2015,
              month: 6,
              value: 100
            },
            {
              year: 2015,
              month: 7,
              value: 100
            },
            {
              year: 2015,
              month: 8,
              value: 100
            },
            {
              year: 2015,
              month: 9,
              value: 100
            },
            {
              year: 2015,
              month: 10,
              value: 100
            },
            {
              year: 2015,
              month: 11,
              value: 100
            },
            {
              year: 2016,
              month: 0,
              value: 100
            },
            {
              year: 2016,
              month: 1,
              value: 100
            },
            {
              year: 2016,
              month: 2,
              value: 100
            },
            {
              year: 2016,
              month: 3,
              value: 100
            },
            {
              year: 2016,
              month: 4,
              value: 100
            },
            {
              year: 2016,
              month: 5,
              value: 100
            },
            {
              year: 2016,
              month: 6,
              value: 100
            },
            {
              year: 2016,
              month: 7,
              value: 100
            },
            {
              year: 2016,
              month: 8,
              value: 100
            },
            {
              year: 2016,
              month: 9,
              value: 100
            },
            {
              year: 2016,
              month: 10,
              value: 100
            },
            {
              year: 2016,
              month: 11,
              value: 100
            }
          ]
        },

        {
          productName: "STD",
          productData: [
            {
              year: 2014,
              month: 0,
              value: 100
            },
            {
              year: 2014,
              month: 1,
              value: 100
            },
            {
              year: 2014,
              month: 2,
              value: 100
            },
            {
              year: 2014,
              month: 3,
              value: 100
            },
            {
              year: 2014,
              month: 4,
              value: 100
            },
            {
              year: 2014,
              month: 5,
              value: 100
            },
            {
              year: 2014,
              month: 6,
              value: 100
            },
            {
              year: 2014,
              month: 7,
              value: 100
            },
            {
              year: 2014,
              month: 8,
              value: 100
            },
            {
              year: 2014,
              month: 9,
              value: 100
            },
            {
              year: 2014,
              month: 10,
              value: 100
            },
            {
              year: 2014,
              month: 11,
              value: 100
            },
            {
              year: 2015,
              month: 0,
              value: 100
            },
            {
              year: 2015,
              month: 1,
              value: 100
            },
            {
              year: 2015,
              month: 2,
              value: 100
            },
            {
              year: 2015,
              month: 3,
              value: 100
            },
            {
              year: 2015,
              month: 4,
              value: 100
            },
            {
              year: 2015,
              month: 5,
              value: 100
            },
            {
              year: 2015,
              month: 6,
              value: 100
            },
            {
              year: 2015,
              month: 7,
              value: 100
            },
            {
              year: 2015,
              month: 8,
              value: 100
            },
            {
              year: 2015,
              month: 9,
              value: 100
            },
            {
              year: 2015,
              month: 10,
              value: 100
            },
            {
              year: 2015,
              month: 11,
              value: 100
            },
            {
              year: 2016,
              month: 0,
              value: 100
            },
            {
              year: 2016,
              month: 1,
              value: 100
            },
            {
              year: 2016,
              month: 2,
              value: 100
            },
            {
              year: 2016,
              month: 3,
              value: 100
            },
            {
              year: 2016,
              month: 4,
              value: 100
            },
            {
              year: 2016,
              month: 5,
              value: 100
            },
            {
              year: 2016,
              month: 6,
              value: 100
            },
            {
              year: 2016,
              month: 7,
              value: 100
            },
            {
              year: 2016,
              month: 8,
              value: 100
            },
            {
              year: 2016,
              month: 9,
              value: 100
            },
            {
              year: 2016,
              month: 10,
              value: 100
            },
            {
              year: 2016,
              month: 11,
              value: 100
            }
          ]
        },
        {
          productName: "LTD",
          productData: [
            {
              year: 2014,
              month: 0,
              value: 100
            },
            {
              year: 2014,
              month: 1,
              value: 100
            },
            {
              year: 2014,
              month: 2,
              value: 100
            },
            {
              year: 2014,
              month: 3,
              value: 100
            },
            {
              year: 2014,
              month: 4,
              value: 100
            },
            {
              year: 2014,
              month: 5,
              value: 100
            },
            {
              year: 2014,
              month: 6,
              value: 100
            },
            {
              year: 2014,
              month: 7,
              value: 100
            },
            {
              year: 2014,
              month: 8,
              value: 100
            },
            {
              year: 2014,
              month: 9,
              value: 100
            },
            {
              year: 2014,
              month: 10,
              value: 100
            },
            {
              year: 2014,
              month: 11,
              value: 100
            },
            {
              year: 2015,
              month: 0,
              value: 100
            },
            {
              year: 2015,
              month: 1,
              value: 100
            },
            {
              year: 2015,
              month: 2,
              value: 100
            },
            {
              year: 2015,
              month: 3,
              value: 100
            },
            {
              year: 2015,
              month: 4,
              value: 100
            },
            {
              year: 2015,
              month: 5,
              value: 100
            },
            {
              year: 2015,
              month: 6,
              value: 100
            },
            {
              year: 2015,
              month: 7,
              value: 100
            },
            {
              year: 2015,
              month: 8,
              value: 100
            },
            {
              year: 2015,
              month: 9,
              value: 100
            },
            {
              year: 2015,
              month: 10,
              value: 100
            },
            {
              year: 2015,
              month: 11,
              value: 100
            },
            {
              year: 2016,
              month: 0,
              value: 100
            },
            {
              year: 2016,
              month: 1,
              value: 100
            },
            {
              year: 2016,
              month: 2,
              value: 100
            },
            {
              year: 2016,
              month: 3,
              value: 100
            },
            {
              year: 2016,
              month: 4,
              value: 100
            },
            {
              year: 2016,
              month: 5,
              value: 100
            },
            {
              year: 2016,
              month: 6,
              value: 100
            },
            {
              year: 2016,
              month: 7,
              value: 100
            },
            {
              year: 2016,
              month: 8,
              value: 100
            },
            {
              year: 2016,
              month: 9,
              value: 100
            },
            {
              year: 2016,
              month: 10,
              value: 100
            },
            {
              year: 2016,
              month: 11,
              value: 100
            }
          ]
        },
        {
          productName: "Hospital",
          productData: [
            {
              year: 2014,
              month: 0,
              value: 100
            },
            {
              year: 2014,
              month: 1,
              value: 100
            },
            {
              year: 2014,
              month: 2,
              value: 100
            },
            {
              year: 2014,
              month: 3,
              value: 100
            },
            {
              year: 2014,
              month: 4,
              value: 100
            },
            {
              year: 2014,
              month: 5,
              value: 100
            },
            {
              year: 2014,
              month: 6,
              value: 100
            },
            {
              year: 2014,
              month: 7,
              value: 100
            },
            {
              year: 2014,
              month: 8,
              value: 100
            },
            {
              year: 2014,
              month: 9,
              value: 100
            },
            {
              year: 2014,
              month: 10,
              value: 100
            },
            {
              year: 2014,
              month: 11,
              value: 100
            },
            {
              year: 2015,
              month: 0,
              value: 100
            },
            {
              year: 2015,
              month: 1,
              value: 100
            },
            {
              year: 2015,
              month: 2,
              value: 100
            },
            {
              year: 2015,
              month: 3,
              value: 100
            },
            {
              year: 2015,
              month: 4,
              value: 100
            },
            {
              year: 2015,
              month: 5,
              value: 100
            },
            {
              year: 2015,
              month: 6,
              value: 100
            },
            {
              year: 2015,
              month: 7,
              value: 100
            },
            {
              year: 2015,
              month: 8,
              value: 100
            },
            {
              year: 2015,
              month: 9,
              value: 100
            },
            {
              year: 2015,
              month: 10,
              value: 100
            },
            {
              year: 2015,
              month: 11,
              value: 100
            },
            {
              year: 2016,
              month: 0,
              value: 100
            },
            {
              year: 2016,
              month: 1,
              value: 100
            },
            {
              year: 2016,
              month: 2,
              value: 100
            },
            {
              year: 2016,
              month: 3,
              value: 100
            },
            {
              year: 2016,
              month: 4,
              value: 100
            },
            {
              year: 2016,
              month: 5,
              value: 100
            },
            {
              year: 2016,
              month: 6,
              value: 100
            },
            {
              year: 2016,
              month: 7,
              value: 100
            },
            {
              year: 2016,
              month: 8,
              value: 100
            },
            {
              year: 2016,
              month: 9,
              value: 100
            },
            {
              year: 2016,
              month: 10,
              value: 100
            },
            {
              year: 2016,
              month: 11,
              value: 100
            }
          ]
        }
      ]
    };

    const EXPECTED_OUTPUT = [
      {
        id: "Pacific Sun - Dental - 2014 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2014 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2014 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2014 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2014 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - Dental - 2015 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2015 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2015 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2015 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2015 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - Dental - 2016 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2016 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2016 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2016 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - Dental - 2016 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - STD - 2014 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - STD - 2014 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - STD - 2014 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - STD - 2014 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - STD - 2014 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - STD - 2015 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - STD - 2015 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - STD - 2015 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - STD - 2015 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - STD - 2015 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - STD - 2016 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - STD - 2016 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - STD - 2016 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - STD - 2016 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - STD - 2016 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - LTD - 2014 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2014 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2014 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2014 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2014 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - LTD - 2015 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2015 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2015 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2015 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2015 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - LTD - 2016 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2016 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2016 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2016 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - LTD - 2016 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - Hospital - 2014 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2014 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2014 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2014 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2014 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - Hospital - 2015 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2015 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2015 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2015 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2015 - Q4 - byMonth"
          }
        ]
      },
      {
        id: "Pacific Sun - Hospital - 2016 - byQuarter",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "Q1",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2016 - Q1 - byMonth"
          },
          {
            name: "Q2",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2016 - Q2 - byMonth"
          },
          {
            name: "Q3",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2016 - Q3 - byMonth"
          },
          {
            name: "Q4",
            y: 300,
            drilldown: "Pacific Sun - Hospital - 2016 - Q4 - byMonth"
          }
        ]
      }
    ];
    expect(getCompanyDrillDownsByQuarter(INPUT)).toEqual(EXPECTED_OUTPUT);
  });
});
