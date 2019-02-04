import getCompanyDrillDownsByYear from "../getCompanyDrillDownsByYear";

describe("getCompanyDrillDownsByYear", () => {
  test("should return one formated drilldown for years", () => {
    const INPUT = {
      name: "Pacific Sun",
      products: [
        {
          productName: "Dental",
          productData: [
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
            },
            {
              year: 2017,
              month: 0,
              value: 100
            },
            {
              year: 2017,
              month: 1,
              value: 100
            },
            {
              year: 2017,
              month: 2,
              value: 100
            },
            {
              year: 2017,
              month: 3,
              value: 100
            },
            {
              year: 2017,
              month: 4,
              value: 100
            },
            {
              year: 2017,
              month: 5,
              value: 100
            },
            {
              year: 2017,
              month: 6,
              value: 100
            },
            {
              year: 2017,
              month: 7,
              value: 100
            },
            {
              year: 2017,
              month: 8,
              value: 100
            },
            {
              year: 2017,
              month: 9,
              value: 100
            },
            {
              year: 2017,
              month: 10,
              value: 100
            },
            {
              year: 2017,
              month: 11,
              value: 100
            }
          ]
        }
      ]
    };
    const EXPECTED_OUTPUT = [
      {
        id: "Pacific Sun - Dental - byYear",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "2015",
            drilldown: "Pacific Sun - Dental - 2015 - byQuarter",
            y: 1200
          },
          {
            name: "2016",
            drilldown: "Pacific Sun - Dental - 2016 - byQuarter",
            y: 1200
          },
          {
            name: "2017",
            drilldown: "Pacific Sun - Dental - 2017 - byQuarter",
            y: 1200
          }
        ]
      }
    ];
    expect(getCompanyDrillDownsByYear(INPUT)).toEqual(EXPECTED_OUTPUT);
  });
  test("should return multiple formated drilldowns for multiple product lines", () => {
    const INPUT = {
      name: "Pacific Sun",
      products: [
        {
          productName: "Dental",
          productData: [
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
            },
            {
              year: 2017,
              month: 0,
              value: 100
            },
            {
              year: 2017,
              month: 1,
              value: 100
            },
            {
              year: 2017,
              month: 2,
              value: 100
            },
            {
              year: 2017,
              month: 3,
              value: 100
            },
            {
              year: 2017,
              month: 4,
              value: 100
            },
            {
              year: 2017,
              month: 5,
              value: 100
            },
            {
              year: 2017,
              month: 6,
              value: 100
            },
            {
              year: 2017,
              month: 7,
              value: 100
            },
            {
              year: 2017,
              month: 8,
              value: 100
            },
            {
              year: 2017,
              month: 9,
              value: 100
            },
            {
              year: 2017,
              month: 10,
              value: 100
            },
            {
              year: 2017,
              month: 11,
              value: 100
            }
          ]
        },
        {
          productName: "LTD",
          productData: [
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
            },
            {
              year: 2017,
              month: 0,
              value: 100
            },
            {
              year: 2017,
              month: 1,
              value: 100
            },
            {
              year: 2017,
              month: 2,
              value: 100
            },
            {
              year: 2017,
              month: 3,
              value: 100
            },
            {
              year: 2017,
              month: 4,
              value: 100
            },
            {
              year: 2017,
              month: 5,
              value: 100
            },
            {
              year: 2017,
              month: 6,
              value: 100
            },
            {
              year: 2017,
              month: 7,
              value: 100
            },
            {
              year: 2017,
              month: 8,
              value: 100
            },
            {
              year: 2017,
              month: 9,
              value: 100
            },
            {
              year: 2017,
              month: 10,
              value: 100
            },
            {
              year: 2017,
              month: 11,
              value: 100
            }
          ]
        }
      ]
    };
    const EXPECTED_OUTPUT = [
      {
        id: "Pacific Sun - Dental - byYear",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "2015",
            drilldown: "Pacific Sun - Dental - 2015 - byQuarter",
            y: 1200
          },
          {
            name: "2016",
            drilldown: "Pacific Sun - Dental - 2016 - byQuarter",
            y: 1200
          },
          {
            name: "2017",
            drilldown: "Pacific Sun - Dental - 2017 - byQuarter",
            y: 1200
          }
        ]
      },
      {
        id: "Pacific Sun - LTD - byYear",
        name: "Pacific Sun",
        drilldown: true,
        data: [
          {
            name: "2015",
            drilldown: "Pacific Sun - LTD - 2015 - byQuarter",
            y: 1200
          },
          {
            name: "2016",
            drilldown: "Pacific Sun - LTD - 2016 - byQuarter",
            y: 1200
          },
          {
            name: "2017",
            drilldown: "Pacific Sun - LTD - 2017 - byQuarter",
            y: 1200
          }
        ]
      }
    ];
    expect(getCompanyDrillDownsByYear(INPUT)).toEqual(EXPECTED_OUTPUT);
  });
});
