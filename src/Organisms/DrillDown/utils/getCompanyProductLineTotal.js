export default function getCompanyProductLineTotal(
  companyName,
  productName,
  series
) {
  // find company
  const company = series.find(({ name }) => name === companyName);
  // find product line
  const companyProductLine = company.data.find(
    product => product.name === productName
  );
  return companyProductLine.y;
}
