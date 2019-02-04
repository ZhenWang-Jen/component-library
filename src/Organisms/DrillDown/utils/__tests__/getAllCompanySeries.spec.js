import getAllCompanySeries from "../getAllCompanySeries";

describe("getAllCompanySeries", () => {
  test("getAllCompaniesSeries should return an array of company series objects", () => {
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
            drilldown: "Pacific Sun - PlanSource & ADD - byYear",
            name: "PlanSource & ADD",
            y: 1200
          },
          {
            drilldown: "Pacific Sun - Dental - byYear",
            name: "Dental",
            y: 1200
          },
          {
            drilldown: "Pacific Sun - Vision - byYear",
            name: "Vision",
            y: 1200
          },
          {
            drilldown: "Pacific Sun - Vol Life & ADD - byYear",
            name: "Vol Life & ADD",
            y: 1200
          },
          { drilldown: "Pacific Sun - STD - byYear", name: "STD", y: 1200 },
          { drilldown: "Pacific Sun - LTD - byYear", name: "LTD", y: 1200 },
          {
            drilldown: "Pacific Sun - Critical - byYear",
            name: "Critical",
            y: 1200
          },
          {
            drilldown: "Pacific Sun - Accident - byYear",
            name: "Accident",
            y: 1200
          },
          {
            drilldown: "Pacific Sun - Hospital - byYear",
            name: "Hospital",
            y: 1200
          }
        ],
        name: "Pacific Sun"
      },
      {
        data: [
          {
            drilldown: "PlanSource - PlanSource & ADD - byYear",
            name: "PlanSource & ADD",
            y: 1200
          },
          {
            drilldown: "PlanSource - Dental - byYear",
            name: "Dental",
            y: 1200
          },
          {
            drilldown: "PlanSource - Vision - byYear",
            name: "Vision",
            y: 1200
          },
          {
            drilldown: "PlanSource - Vol Life & ADD - byYear",
            name: "Vol Life & ADD",
            y: 1200
          },
          { drilldown: "PlanSource - STD - byYear", name: "STD", y: 1200 },
          { drilldown: "PlanSource - LTD - byYear", name: "LTD", y: 1200 },
          {
            drilldown: "PlanSource - Critical - byYear",
            name: "Critical",
            y: 1200
          },
          {
            drilldown: "PlanSource - Accident - byYear",
            name: "Accident",
            y: 1200
          },
          {
            drilldown: "PlanSource - Hospital - byYear",
            name: "Hospital",
            y: 1200
          }
        ],
        name: "PlanSource"
      },
      {
        data: [
          {
            drilldown: "Other P.S.A. - PlanSource & ADD - byYear",
            name: "PlanSource & ADD",
            y: 1200
          },
          {
            drilldown: "Other P.S.A. - Dental - byYear",
            name: "Dental",
            y: 1200
          },
          {
            drilldown: "Other P.S.A. - Vision - byYear",
            name: "Vision",
            y: 1200
          },
          {
            drilldown: "Other P.S.A. - Vol Life & ADD - byYear",
            name: "Vol Life & ADD",
            y: 1200
          },
          { drilldown: "Other P.S.A. - STD - byYear", name: "STD", y: 1200 },
          { drilldown: "Other P.S.A. - LTD - byYear", name: "LTD", y: 1200 },
          {
            drilldown: "Other P.S.A. - Critical - byYear",
            name: "Critical",
            y: 1200
          },
          {
            drilldown: "Other P.S.A. - Accident - byYear",
            name: "Accident",
            y: 1200
          },
          {
            drilldown: "Other P.S.A. - Hospital - byYear",
            name: "Hospital",
            y: 1200
          }
        ],
        name: "Other P.S.A."
      }
    ];
    expect(getAllCompanySeries(INPUT)).toEqual(EXPECTED_OUTPUT);
  });
});
