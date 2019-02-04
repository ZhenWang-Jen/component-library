import removeSeriesDrillDowns from "../removeSeriesDrillDowns";

describe("removeSeriesDrillDowns", () => {
  test("removeSeriesDrillDowns should return an array of company series objects without the drilldown key", () => {
    const INPUT = [
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
    const EXPECTED_OUTPUT = [
      {
        data: [
          {
            name: "PlanSource & ADD",
            y: 1200
          },
          {
            name: "Dental",
            y: 1200
          },
          {
            name: "Vision",
            y: 1200
          },
          {
            name: "Vol Life & ADD",
            y: 1200
          },
          { name: "STD", y: 1200 },
          { name: "LTD", y: 1200 },
          {
            name: "Critical",
            y: 1200
          },
          {
            name: "Accident",
            y: 1200
          },
          {
            name: "Hospital",
            y: 1200
          }
        ],
        name: "Pacific Sun"
      },
      {
        data: [
          {
            name: "PlanSource & ADD",
            y: 1200
          },
          {
            name: "Dental",
            y: 1200
          },
          {
            name: "Vision",
            y: 1200
          },
          {
            name: "Vol Life & ADD",
            y: 1200
          },
          { name: "STD", y: 1200 },
          { name: "LTD", y: 1200 },
          {
            name: "Critical",
            y: 1200
          },
          {
            name: "Accident",
            y: 1200
          },
          {
            name: "Hospital",
            y: 1200
          }
        ],
        name: "PlanSource"
      },
      {
        data: [
          {
            name: "PlanSource & ADD",
            y: 1200
          },
          {
            name: "Dental",
            y: 1200
          },
          {
            name: "Vision",
            y: 1200
          },
          {
            name: "Vol Life & ADD",
            y: 1200
          },
          { name: "STD", y: 1200 },
          { name: "LTD", y: 1200 },
          {
            name: "Critical",
            y: 1200
          },
          {
            name: "Accident",
            y: 1200
          },
          {
            name: "Hospital",
            y: 1200
          }
        ],
        name: "Other P.S.A."
      }
    ];

    expect(removeSeriesDrillDowns(INPUT)).toEqual(EXPECTED_OUTPUT);
  });
});
