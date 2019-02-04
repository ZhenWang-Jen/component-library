function getSingleSeries(seriesDatum) {
  const { name, products } = seriesDatum;
  return {
    name,
    data: products.map(product => {
      const { productName, productData } = product;
      return {
        companyName: name,
        name: productName,
        y: productData.reduce((acc, cur) => acc + cur.value, 0),
        n: productData.length
      };
    })
  };
}

function getSeries(seriesData) {
  // get highcharts series objects for each series (top level category)
  return seriesData.map(getSingleSeries);
}

export default getSeries;
