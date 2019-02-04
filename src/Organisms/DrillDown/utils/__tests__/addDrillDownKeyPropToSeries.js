import addDrillDownKeyPropToSeries from "../addDrillDownKeyPropToSeries";

describe("addDrillDownKeyPropToSeries", () => {
  test("addDrillDownKeyPropToSeries should return an array of company series objects", () => {
    const callback = ({ companyName, name }) =>
      `${companyName} - ${name} - byYear`;
    const INPUT = [
      {
        data: [
          { companyName: "Pacific Sun", name: "PlanSource & ADD", y: 1200 },
          { companyName: "Pacific Sun", name: "Dental", y: 1200 },
          { companyName: "Pacific Sun", name: "Vision", y: 1200 },
          { companyName: "Pacific Sun", name: "Vol Life & ADD", y: 1200 },
          { companyName: "Pacific Sun", name: "STD", y: 1200 },
          { companyName: "Pacific Sun", name: "LTD", y: 1200 },
          { companyName: "Pacific Sun", name: "Critical", y: 1200 },
          { companyName: "Pacific Sun", name: "Accident", y: 1200 },
          { companyName: "Pacific Sun", name: "Hospital", y: 1200 }
        ],
        name: "Pacific Sun"
      },
      {
        data: [
          { companyName: "PlanSource", name: "PlanSource & ADD", y: 1200 },
          { companyName: "PlanSource", name: "Dental", y: 1200 },
          { companyName: "PlanSource", name: "Vision", y: 1200 },
          { companyName: "PlanSource", name: "Vol Life & ADD", y: 1200 },
          { companyName: "PlanSource", name: "STD", y: 1200 },
          { companyName: "PlanSource", name: "LTD", y: 1200 },
          { companyName: "PlanSource", name: "Critical", y: 1200 },
          { companyName: "PlanSource", name: "Accident", y: 1200 },
          { companyName: "PlanSource", name: "Hospital", y: 1200 }
        ],
        name: "PlanSource"
      },
      {
        data: [
          { companyName: "Other P.S.A.", name: "PlanSource & ADD", y: 1200 },
          { companyName: "Other P.S.A.", name: "Dental", y: 1200 },
          { companyName: "Other P.S.A.", name: "Vision", y: 1200 },
          { companyName: "Other P.S.A.", name: "Vol Life & ADD", y: 1200 },
          { companyName: "Other P.S.A.", name: "STD", y: 1200 },
          { companyName: "Other P.S.A.", name: "LTD", y: 1200 },
          { companyName: "Other P.S.A.", name: "Critical", y: 1200 },
          { companyName: "Other P.S.A.", name: "Accident", y: 1200 },
          { companyName: "Other P.S.A.", name: "Hospital", y: 1200 }
        ],
        name: "Other P.S.A."
      }
    ];
    const EXPECTED_OUTPUT = [
      {
        data: [
          {
            companyName: "Pacific Sun",
            drilldown: "Pacific Sun - PlanSource & ADD - byYear",
            name: "PlanSource & ADD",
            y: 1200
          },
          {
            companyName: "Pacific Sun",
            drilldown: "Pacific Sun - Dental - byYear",
            name: "Dental",
            y: 1200
          },
          {
            companyName: "Pacific Sun",
            drilldown: "Pacific Sun - Vision - byYear",
            name: "Vision",
            y: 1200
          },
          {
            companyName: "Pacific Sun",
            drilldown: "Pacific Sun - Vol Life & ADD - byYear",
            name: "Vol Life & ADD",
            y: 1200
          },
          {
            companyName: "Pacific Sun",
            drilldown: "Pacific Sun - STD - byYear",
            name: "STD",
            y: 1200
          },
          {
            companyName: "Pacific Sun",
            drilldown: "Pacific Sun - LTD - byYear",
            name: "LTD",
            y: 1200
          },
          {
            companyName: "Pacific Sun",
            drilldown: "Pacific Sun - Critical - byYear",
            name: "Critical",
            y: 1200
          },
          {
            companyName: "Pacific Sun",
            drilldown: "Pacific Sun - Accident - byYear",
            name: "Accident",
            y: 1200
          },
          {
            companyName: "Pacific Sun",
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
            companyName: "PlanSource",
            drilldown: "PlanSource - PlanSource & ADD - byYear",
            name: "PlanSource & ADD",
            y: 1200
          },
          {
            companyName: "PlanSource",
            drilldown: "PlanSource - Dental - byYear",
            name: "Dental",
            y: 1200
          },
          {
            companyName: "PlanSource",
            drilldown: "PlanSource - Vision - byYear",
            name: "Vision",
            y: 1200
          },
          {
            companyName: "PlanSource",
            drilldown: "PlanSource - Vol Life & ADD - byYear",
            name: "Vol Life & ADD",
            y: 1200
          },
          {
            companyName: "PlanSource",
            drilldown: "PlanSource - STD - byYear",
            name: "STD",
            y: 1200
          },
          {
            companyName: "PlanSource",
            drilldown: "PlanSource - LTD - byYear",
            name: "LTD",
            y: 1200
          },
          {
            companyName: "PlanSource",
            drilldown: "PlanSource - Critical - byYear",
            name: "Critical",
            y: 1200
          },
          {
            companyName: "PlanSource",
            drilldown: "PlanSource - Accident - byYear",
            name: "Accident",
            y: 1200
          },
          {
            companyName: "PlanSource",
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
            companyName: "Other P.S.A.",
            drilldown: "Other P.S.A. - PlanSource & ADD - byYear",
            name: "PlanSource & ADD",
            y: 1200
          },
          {
            companyName: "Other P.S.A.",
            drilldown: "Other P.S.A. - Dental - byYear",
            name: "Dental",
            y: 1200
          },
          {
            companyName: "Other P.S.A.",
            drilldown: "Other P.S.A. - Vision - byYear",
            name: "Vision",
            y: 1200
          },
          {
            companyName: "Other P.S.A.",
            drilldown: "Other P.S.A. - Vol Life & ADD - byYear",
            name: "Vol Life & ADD",
            y: 1200
          },
          {
            companyName: "Other P.S.A.",
            drilldown: "Other P.S.A. - STD - byYear",
            name: "STD",
            y: 1200
          },
          {
            companyName: "Other P.S.A.",
            drilldown: "Other P.S.A. - LTD - byYear",
            name: "LTD",
            y: 1200
          },
          {
            companyName: "Other P.S.A.",
            drilldown: "Other P.S.A. - Critical - byYear",
            name: "Critical",
            y: 1200
          },
          {
            companyName: "Other P.S.A.",
            drilldown: "Other P.S.A. - Accident - byYear",
            name: "Accident",
            y: 1200
          },
          {
            companyName: "Other P.S.A.",
            drilldown: "Other P.S.A. - Hospital - byYear",
            name: "Hospital",
            y: 1200
          }
        ],
        name: "Other P.S.A."
      }
    ];
    expect(addDrillDownKeyPropToSeries(INPUT, callback)).toEqual(
      EXPECTED_OUTPUT
    );
  });
});
