const getQuarterAverage = (seriesData, quarter_index) => {
  /* Divide the sum of all quarters by 4 */
  return seriesData.reduce((acc, cur) => {
          return acc + cur.data[quarter_index].y
        }, 0) / 4;
}

const getSmallTableData = (seriesData) => {

  let tableData = [];

  if( !seriesData.length ) {
    return [];
  }

  for (let quarter_index = 0; quarter_index <= 3; quarter_index++) {
      
    tableData.push({
      name: 'Q'+(quarter_index+1),
      y: getQuarterAverage(seriesData, quarter_index)
    })
  }
    
  return tableData;
}

export default getSmallTableData