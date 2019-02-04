import getSeries from "../getSeries";

describe("getSeries", () => {
  test("getSeries should return an array of company series objects", () => {
    const INPUT = [
      {
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
      },
      {
        name: "PlanSource",
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
      },
      {
        name: "Other P.S.A.",
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
      }
    ];
    const EXPECTED_OUTPUT = [
      {
        data: [
          {
            companyName: "Pacific Sun",
            n: 12,
            name: "PlanSource & ADD",
            y: 1200
          },
          { companyName: "Pacific Sun", n: 12, name: "Dental", y: 1200 },
          { companyName: "Pacific Sun", n: 12, name: "Vision", y: 1200 },
          {
            companyName: "Pacific Sun",
            n: 12,
            name: "Vol Life & ADD",
            y: 1200
          },
          { companyName: "Pacific Sun", n: 12, name: "STD", y: 1200 },
          { companyName: "Pacific Sun", n: 12, name: "LTD", y: 1200 },
          { companyName: "Pacific Sun", n: 12, name: "Critical", y: 1200 },
          { companyName: "Pacific Sun", n: 12, name: "Accident", y: 1200 },
          { companyName: "Pacific Sun", n: 12, name: "Hospital", y: 1200 }
        ],
        name: "Pacific Sun"
      },
      {
        data: [
          {
            companyName: "PlanSource",
            n: 12,
            name: "PlanSource & ADD",
            y: 1200
          },
          { companyName: "PlanSource", n: 12, name: "Dental", y: 1200 },
          { companyName: "PlanSource", n: 12, name: "Vision", y: 1200 },
          { companyName: "PlanSource", n: 12, name: "Vol Life & ADD", y: 1200 },
          { companyName: "PlanSource", n: 12, name: "STD", y: 1200 },
          { companyName: "PlanSource", n: 12, name: "LTD", y: 1200 },
          { companyName: "PlanSource", n: 12, name: "Critical", y: 1200 },
          { companyName: "PlanSource", n: 12, name: "Accident", y: 1200 },
          { companyName: "PlanSource", n: 12, name: "Hospital", y: 1200 }
        ],
        name: "PlanSource"
      },
      {
        data: [
          {
            companyName: "Other P.S.A.",
            n: 12,
            name: "PlanSource & ADD",
            y: 1200
          },
          { companyName: "Other P.S.A.", n: 12, name: "Dental", y: 1200 },
          { companyName: "Other P.S.A.", n: 12, name: "Vision", y: 1200 },
          {
            companyName: "Other P.S.A.",
            n: 12,
            name: "Vol Life & ADD",
            y: 1200
          },
          { companyName: "Other P.S.A.", n: 12, name: "STD", y: 1200 },
          { companyName: "Other P.S.A.", n: 12, name: "LTD", y: 1200 },
          { companyName: "Other P.S.A.", n: 12, name: "Critical", y: 1200 },
          { companyName: "Other P.S.A.", n: 12, name: "Accident", y: 1200 },
          { companyName: "Other P.S.A.", n: 12, name: "Hospital", y: 1200 }
        ],
        name: "Other P.S.A."
      }
    ];
    expect(getSeries(INPUT)).toEqual(EXPECTED_OUTPUT);
  });
});
