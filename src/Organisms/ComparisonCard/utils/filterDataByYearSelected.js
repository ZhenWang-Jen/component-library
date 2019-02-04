export default function filterDataByYearSelected(series, filterYearDiff) {
  let filteredSeries = JSON.parse(JSON.stringify(series));

  let filteredData = [];
  let emptyCount = 0;

  const currentYear = new Date().getFullYear();

  series.map(function(quarter, index) {

  	switch( filterYearDiff ) {
  		case 1:

  			filteredData = quarter.data.filter(
			    ({ name }) => parseInt(name) === currentYear
  	        );
        
        if(!filteredData.length) {
          emptyCount++;
        }

        if( emptyCount === 4 ){
          filteredSeries = [];
        }
        else{
          filteredSeries[index].data = filteredData
        }

  	    break;

  		case 3:
  		case 5:
  		case 10:
  			
  			filteredData = quarter.data.filter(
				({ name }) => parseInt(name) <= currentYear && parseInt(name) > (currentYear-filterYearDiff)
	  		);

	  		filteredSeries[index].data = filteredData

  			break;

  		default:
	  		filteredSeries = series;
  			break;
  	}
  })

  return filteredSeries;
}