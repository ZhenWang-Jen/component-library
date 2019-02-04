import uniqBy from "lodash/uniqBy";

const getProductSumByYear = (productData, companyName, productName) => {
  // find years in product lines provided data
  const years = uniqBy(productData, "year").map(
    productLine => productLine.year
  );
  // for each year in product, find sum of values
  return years.map(year => {
    const yearTotalValue = productData.reduce((acc, cur) => {
      if (cur.year === year) {
        return acc + cur.value;
      }
      return acc;
    }, 0);
    return {
      name: year.toString(),
      y: yearTotalValue,
      drilldown: `${companyName} - ${productName} - ${year} - byQuarter`
    };
  });
};

const getCompanyDrillDownsByYear = companyProductLines => {
  const companyName = companyProductLines.name;
  return companyProductLines.products.map(productLine => {
    const { productName, productData } = productLine;
    return {
      id: `${companyName} - ${productName} - byYear`,
      name: `${companyName}`,
      drilldown: true,
      data: getProductSumByYear(productData, companyName, productName)
    };
  });
};

export default getCompanyDrillDownsByYear;
