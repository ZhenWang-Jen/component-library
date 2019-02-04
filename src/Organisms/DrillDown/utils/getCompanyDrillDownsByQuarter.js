import uniqBy from "lodash/uniqBy";

const monthsToQuartersMap = {
  Q1: [0, 1, 2],
  Q2: [3, 4, 5],
  Q3: [6, 7, 8],
  Q4: [9, 10, 11]
};

const getQuarterSum = (productYear, name, productData) => {
  const months = monthsToQuartersMap[name];
  return productData.reduce((acc, cur) => {
    if (productYear === cur.year) {
      if (months.indexOf(cur.month) !== -1) {
        return acc + cur.value;
      }
    }
    return acc;
  }, 0);
};

const getProductLineSumByQuarters = (
  companyName,
  productName,
  productYear,
  productData
) => {
  // in 2015
  // for Q1, y = month 0, 1, 2

  const quarters = [
    {
      name: "Q1",
      drilldown: `${companyName} - ${productName} - ${productYear} - Q1 - byMonth`
    },
    {
      name: "Q2",
      drilldown: `${companyName} - ${productName} - ${productYear} - Q2 - byMonth`
    },
    {
      name: "Q3",
      drilldown: `${companyName} - ${productName} - ${productYear} - Q3 - byMonth`
    },
    {
      name: "Q4",
      drilldown: `${companyName} - ${productName} - ${productYear} - Q4 - byMonth`
    }
  ];
  return quarters.map(quarter => {
    const { name } = quarter;
    return {
      ...quarter,
      y: getQuarterSum(productYear, name, productData)
    };
  });
};

const getCompanyDrillDownsByQuarter = companyProductLines => {
  const companyName = companyProductLines.name;
  const companyQtrProductLineDrillDowns = companyProductLines.products.map(
    productLine => {
      const { productName, productData } = productLine;
      const productLineYears = uniqBy(productData, "year").map(
        productLine => productLine.year
      );
      return productLineYears.map(productYear =>
        // for each productYear
        ({
          id: `${companyName} - ${productName} - ${productYear} - byQuarter`,
          name: `${companyName}`,
          drilldown: true,
          data: getProductLineSumByQuarters(
            companyName,
            productName,
            productYear,
            productData
          )
        })
      );
    }
  );

  const mergedProductLineQtrObjsByYear = [].concat.apply(
    [],
    companyQtrProductLineDrillDowns
  );
  return mergedProductLineQtrObjsByYear;
};

export default getCompanyDrillDownsByQuarter;
