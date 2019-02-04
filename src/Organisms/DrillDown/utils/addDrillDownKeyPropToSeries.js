function getDrillDownFormatFunc(cb) {
  // add drilldown key / prop to object
  // INPUT:  { companyName: "Pacific Sun", name: "PlanSource & ADD", y: 1200 },
  // OUTPUT: "Pacific Sun - LTD - 2017 - byQuarter",
  return function drillDownFormat(seriesDatum) {
    return {
      ...seriesDatum,
      drilldown: cb(seriesDatum)
    };
  };
}

function addDrillDownKeyPropToSingleSeries(singleSeries, cb) {
  // Adds drilldown key properties to a series object
  const drillDownFormat = getDrillDownFormatFunc(cb);
  return {
    ...singleSeries,
    data: singleSeries.data.map(drillDownFormat)
  };
}

function addDrillDownKeyPropToSeries(seriesData, cb) {
  // Adds drilldown key properties to array of series objects
  // @cb is a callback that receives a drilldown object and returns a formatted string.
  return seriesData.map(singleSeries =>
    addDrillDownKeyPropToSingleSeries(singleSeries, cb)
  );
}

export default addDrillDownKeyPropToSeries;
