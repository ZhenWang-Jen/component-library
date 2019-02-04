import removeSeriesDrillDown from "./removeSeriesDrillDown";

const removeSeriesDrillDowns = companies =>
  // for each obj in array return an object with:
  // the company name
  // a array of objects with the name data
  // data's objects will have the two keys: name and y
  companies.map(company => removeSeriesDrillDown(company));
export default removeSeriesDrillDowns;
