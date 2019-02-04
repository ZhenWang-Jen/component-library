const isEmpty = value =>
	value === undefined || value === null || value === 0 ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
 		(typeof value === 'string' && value.trim().length === 0);

const parseTrendData = (trendCard) => {

	if( trendCard === undefined ) {
		return false;
	}

	trendCard['error'] = false;

	if(trendCard.trend !== undefined) {
		Object.keys(trendCard.trend).some(function(key) {
			if( isEmpty(trendCard.trend[key]) ) {
				if( !trendCard.error ) {
					trendCard.error = true;
				}
			}
		})
	}
	if(trendCard.chartData === undefined || trendCard.chartData.length != 2) {
		trendCard.error = true;
	}

	return trendCard;
};

export default parseTrendData;