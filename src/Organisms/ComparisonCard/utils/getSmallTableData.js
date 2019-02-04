const getSmallTableData = (seriesData) => {
	
  let tableData = [];

  if( !seriesData.length ) {
    return [];
  }

  seriesData.map((quarter, index) => {
  	tableData.push({
	  	name: quarter.name,
	  	y: quarter.data.reduce((acc, cur) => {
				return acc + cur.y
  		}, 0) / 4
	  })
	});

  return tableData;
}

export default getSmallTableData