import getCompanyDrillDownsByYear from "./getCompanyDrillDownsByYear";

const getAllCompanyDrillDownsByYear = allCompanies => {
  // for each company get array of drilldowns
  const drilldowns = allCompanies.map(company =>
    getCompanyDrillDownsByYear(company)
  );
  // merge all company drilldowns into single array
  const merged = [].concat.apply([], drilldowns);
  return merged;
};

export default getAllCompanyDrillDownsByYear;
