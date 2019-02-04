import getCompanySeries from "./getCompanySeries";

const getAllCompanySeries = companiesProductLines => {
  if (!companiesProductLines) {
    return undefined;
  }
  // return an array of data formated for highcharts
  return companiesProductLines.map(getCompanySeries);
};

export default getAllCompanySeries;
