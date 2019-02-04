import uniqBy from "lodash/uniqBy";
import getSeries from "./getSeries";

function getExportData(input) {
  const baseData = getSeries(input)
    .map(({ data }) => data)
    .reduce((acc, cur) => acc.concat(cur), []);
  const colHeaders = uniqBy(baseData, "name");
  const rowHeaders = uniqBy(baseData, "companyName");
  const headers = [
    { label: "Company Name", key: "companyName" },
    ...colHeaders.map(colHeader => ({
      label: colHeader.name,
      key: colHeader.name
    }))
  ];

  let data = rowHeaders
    .map(({ companyName }) => ({
      companyName
    }))
    .map(company =>
      headers.map(header => {
        if (header.key === "companyName") {
          return { [header.key]: company.companyName };
        }
        return {
          [header.key]: baseData
            .filter(datum => datum.companyName === company.companyName)
            .find(obj => obj.name === header.key).y
        };
      })
    )
    .map(comp => comp.reduce((acc, cur) => Object.assign({}, acc, cur), {}));

  return {
    data,
    headers,
    baseData
  };
}

export default getExportData;
