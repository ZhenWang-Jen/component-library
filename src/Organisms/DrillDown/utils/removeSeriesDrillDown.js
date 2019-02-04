const removeSeriesDrillDown = companySeriesObject => {
  const { name, data } = companySeriesObject;
  return {
    name,
    data: data.map(productLine => ({
      name: productLine.name,
      y: productLine.y
    }))
  };
};

export default removeSeriesDrillDown;
