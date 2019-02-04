import getCompanySeries from "../getCompanySeries";

describe("getCompanySeries", () => {
  test("should return an object for a company with with an array of 3 prodcut line objects", () => {
    const INPUT = {
      name: "Pacific Sun",
      products: [
        {
          productName: "Dental",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        },
        {
          productName: "STD",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        },
        {
          productName: "LTD",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        }
      ]
    };
    const EXPECTED_OUTPUT = {
      name: "Pacific Sun",
      data: [
        {
          name: "Dental",
          y: 1200,
          drilldown: "Pacific Sun - Dental - byYear"
        },
        {
          name: "STD",
          y: 1200,
          drilldown: "Pacific Sun - STD - byYear"
        },
        {
          name: "LTD",
          y: 1200,
          drilldown: "Pacific Sun - LTD - byYear"
        }
      ]
    };

    expect(getCompanySeries(INPUT)).toEqual(EXPECTED_OUTPUT);
  });

  test("should return an object for a company with with an array of 12 prodcut line objects", () => {
    const INPUT = {
      name: "Pacific Sun",
      products: [
        {
          productName: "PlanSource & ADD",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        },
        {
          productName: "Dental",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        },
        {
          productName: "Vision",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        },
        {
          productName: "Vol Life & ADD",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        },
        {
          productName: "STD",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        },
        {
          productName: "LTD",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        },
        {
          productName: "Critical",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        },
        {
          productName: "Accident",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        },
        {
          productName: "Hospital",
          productData: [
            {
              date: new Date("2014-01-01"),
              value: 100
            },
            {
              date: new Date("2014-02-01"),
              value: 100
            },
            {
              date: new Date("2014-03-01"),
              value: 100
            },
            {
              date: new Date("2014-04-01"),
              value: 100
            },
            {
              date: new Date("2014-05-01"),
              value: 100
            },
            {
              date: new Date("2014-06-01"),
              value: 100
            },
            {
              date: new Date("2014-07-01"),
              value: 100
            },
            {
              date: new Date("2014-08-01"),
              value: 100
            },
            {
              date: new Date("2014-09-01"),
              value: 100
            },
            {
              date: new Date("2014-10-01"),
              value: 100
            },
            {
              date: new Date("2014-11-01"),
              value: 100
            },
            {
              date: new Date("2014-12-01"),
              value: 100
            }
          ]
        }
      ]
    };
    const EXPECTED_OUTPUT = {
      name: "Pacific Sun",
      data: [
        {
          name: "PlanSource & ADD",
          y: 1200,
          drilldown: "Pacific Sun - PlanSource & ADD - byYear"
        },
        {
          name: "Dental",
          y: 1200,
          drilldown: "Pacific Sun - Dental - byYear"
        },
        {
          name: "Vision",
          y: 1200,
          drilldown: "Pacific Sun - Vision - byYear"
        },
        {
          name: "Vol Life & ADD",
          y: 1200,
          drilldown: "Pacific Sun - Vol Life & ADD - byYear"
        },
        {
          name: "STD",
          y: 1200,
          drilldown: "Pacific Sun - STD - byYear"
        },
        {
          name: "LTD",
          y: 1200,
          drilldown: "Pacific Sun - LTD - byYear"
        },
        {
          name: "Critical",
          y: 1200,
          drilldown: "Pacific Sun - Critical - byYear"
        },
        {
          name: "Accident",
          y: 1200,
          drilldown: "Pacific Sun - Accident - byYear"
        },
        {
          name: "Hospital",
          y: 1200,
          drilldown: "Pacific Sun - Hospital - byYear"
        }
      ]
    };

    expect(getCompanySeries(INPUT)).toEqual(EXPECTED_OUTPUT);
  });
});
