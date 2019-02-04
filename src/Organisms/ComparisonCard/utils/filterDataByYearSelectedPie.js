export default function filterDataByYearSelected(entireData, filterYearDiff) {
// let filteredSeries = [];
// let ASum = 0, BSum = 0;

// 	if (chartSeries.length > 0) {
// 		if (0 == filterYearDiff || chartSeries.length < filterYearDiff) {
// 			filterYearDiff = chartSeries.length;
// 		} 
// 		if (chartSeries.length >= filterYearDiff) {
// 			chartSeries.reverse().map((year, index) => {
// 				if (index < filterYearDiff) {
// 					ASum = ASum + year[0].y;
// 					BSum = BSum + year[1].y;
// 				}
// 			});
// 		}

// 		filteredSeries.push({
// 			name: `${chartSeries[0][0].name}`,
// 			y: ASum
// 		},
// 		{
// 			name: `${chartSeries[0][1].name}`,
// 			y: BSum
// 		});
// 	} else {
// 		filteredSeries.push({
// 			name: 'N/A',
// 			y: 0
// 		},
// 		{
// 			name: 'N/A',
// 			y: 0
// 		});
// 	}

//   return filteredSeries;

	let chartSeries = [], tableData = [];
	switch( filterYearDiff ) {
		case 1:
			chartSeries = entireData.series;
			tableData = entireData.tableData;
			break;

		case 3:
		case 5:
		case 10:
			// chartSeries = [
			// 	{
			// 		name: 'N/A',
			// 		y: 0
			// 	},
			// 	{
			// 		name: 'N/A',
			// 		y: 0
			// 	}  
			// ]
			
			break;

		default:
			
			break;
	}
	
	return [chartSeries, tableData];
}