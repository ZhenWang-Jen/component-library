import uniqBy from "lodash/uniqBy";

const months = ["Jan", "Feb", "March", "April", "May", "June",
				"July", "Aug", "Sep", "Oct", "Nov", "Dec"];

const getAllCompanyDrillDownsByMonth = allCompanies => {
  // for each company get array of drilldowns
  const drilldowns = allCompanies.map(company =>
    getCompanyDrillDownsByMonth(company)
  );
  // merge all company drilldowns into single array
  const merged = [].concat.apply([], drilldowns);
  return merged;
};

function getProductLineValuesByMonths(productData) {

	return productData.map(productYear => 
		{
			return {
	      name: months[productYear.month],
	      y: productYear.value
	    };
		})
}

function getCompanyDrillDownsByMonth(companyProductLines) {
	
  const companyName = companyProductLines.name;
  const companyMonthlyProductLineDrillDowns = companyProductLines.products.map(
    productLine => {
      const { productName, productData } = productLine;
      const productLineYears = uniqBy(productData, "year").map(
        productLine => productLine.year
      );
      return productLineYears.map(productYear =>
        // for each productYear
        ({
          id: `${companyName} - ${productName} - ${productYear} - byMonth`,
          name: `${companyName}`,
          drilldown: true,
          data: getProductLineValuesByMonths(productData)
        })
      );
    }
  );

  const mergedProductLineMonthObjsByYear = [].concat.apply(
    [],
    companyMonthlyProductLineDrillDowns
  );
  return mergedProductLineMonthObjsByYear;

}

export default getAllCompanyDrillDownsByMonth;
