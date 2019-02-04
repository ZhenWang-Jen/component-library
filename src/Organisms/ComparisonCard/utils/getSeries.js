const getDataSeries = (seriesQuarterlyData) => {
	const quarterData = []
	seriesQuarterlyData.map(function(quarter) {
		quarterData.push({
			name: quarter.year,
			y: quarter.yearData
		})
	})

	return quarterData;
}

const getSeries = (series) => {

	const lineSeries = [];

	series.map(function(element,key) {
		if( element.quarter !== undefined ) {
			lineSeries.push({
				name: `${element.quarter}`,
				data: getDataSeries(element.quarterData)
			})
		}
	})

	return lineSeries;
}

export default getSeries;

// const getSeriesPie = (series) => {
// 	let yearSeries = [];

// 	series.map((year,key) => {
// 		const thisKey = key;

// 		if (year.year && year.yearData) {
// 			let nameA = "", nameB = "";
// 			let AValue = 0, BValue = 0, yearSum = 0;

// 			year.yearData.map((quarter, key) => {
// 				if (quarter && quarter.quarterData.length == 2) {
// 					AValue = AValue + quarter.quarterData[0].y;
// 					BValue = BValue + quarter.quarterData[1].y;
// 				}
// 			});

// 			yearSeries.push([{
// 				name: `${year.yearData[0].quarterData[0].name}`,
// 				y: AValue
// 			},
// 			{
// 				name: `${year.yearData[1].quarterData[1].name}`,
// 				y: BValue
// 			}]);
// 		} else {
// 			yearSeries = [          
// 				{
// 				  name: 'N/A',
// 				  y: 0
// 				},
// 				{
// 				  name: 'N/A',
// 				  y: 0
// 				}
// 			]
// 		}
// 	})
// 	return yearSeries;
	
// }

// export default getSeriesPie;