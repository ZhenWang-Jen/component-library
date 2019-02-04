const getCompanySeries = company => {
  const { name, products } = company;
  return {
    name,
    data: products.map(product => {
      const { productName, productData } = product;
      return {
        name: productName,
        y: productData.reduce((acc, cur) => acc + cur.value, 0),
        drilldown: `${name} - ${productName} - byYear`
      };
    })
  };
};

export default getCompanySeries;
