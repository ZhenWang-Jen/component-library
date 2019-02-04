import removeSeriesDrillDown from "../removeSeriesDrillDown";

describe("removeSeriesDrillDown", () => {
  test("should return an object for a company with with an array of 3 prodcut line objects with no drilldown key", () => {
    const INPUT = {
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
    const EXPECTED_OUTPUT = {
      name: "Pacific Sun",
      data: [
        {
          name: "Dental",
          y: 1200
        },
        {
          name: "STD",
          y: 1200
        },
        {
          name: "LTD",
          y: 1200
        }
      ]
    };

    expect(removeSeriesDrillDown(INPUT)).toEqual(EXPECTED_OUTPUT);
  });

  test("should return an object for a company with with an array of 12 prodcut line objects with no drilldril key", () => {
    const INPUT = {
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

    const EXPECTED_OUTPUT = {
      name: "Pacific Sun",
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
        {
          name: "STD",
          y: 1200
        },
        {
          name: "LTD",
          y: 1200
        },
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
      ]
    };

    expect(removeSeriesDrillDown(INPUT)).toEqual(EXPECTED_OUTPUT);
  });
});
