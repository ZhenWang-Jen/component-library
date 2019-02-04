export default function getSeriesAvgs(siri) {
  return siri.map(obj => ({
    ...obj,
    data: obj.data.map(datum => ({
      ...datum,
      y: datum.y / datum.n
    }))
  }));
}
