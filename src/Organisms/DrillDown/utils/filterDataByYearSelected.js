export default function filterDataByYearSelected(products, filterYearDiff) {
  
  let filteredArray = [];
  
  const currentYear = new Date().getFullYear();

  products.forEach(function(product) {
    
    let productObj = {};

  	switch( filterYearDiff ) {
  		case 0:

	  		productObj['productData'] = product.productData.filter(
			    ({ year }) => year === currentYear
        );

        if( productObj['productData'].length ){
          
          productObj['productName'] = product.productName;
          filteredArray.push(productObj);
        }

  			break;

  		case 3:
  		case 5:
  		case 10:

	  		productObj['productData'] = product.productData.filter(
	  					    ({ year }) => year <= currentYear && year > (currentYear-filterYearDiff)
	  					);
        
        if( productObj['productData'].length ) {

          productObj['productName'] = product.productName;
          filteredArray.push(productObj);
        }

  			break;

  		default:
	  		filteredArray = products;
  			break;
  	}
  });

  return filteredArray;
}