import getCompanyDrillDownsByQuarter from "./getCompanyDrillDownsByQuarter";

const getAllCompanyDrillDownsByQtr = allCompanies => {
  // for each company get array of drilldowns
  const drilldowns = allCompanies.map(company =>
    getCompanyDrillDownsByQuarter(company)
  );
  // merge all company drilldowns into single array
  const merged = [].concat.apply([], drilldowns);
  return merged;
};

export default getAllCompanyDrillDownsByQtr;
