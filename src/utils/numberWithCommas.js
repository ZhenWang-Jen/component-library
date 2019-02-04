/**
 * Format a number with commas as thousands separators.
 * 
 * @param {(number|string)} x - Whatever you want to check and format with commas as needed. 
 */

function numberWithCommas(x) {
  if (x==Number(x)) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else 
  return x;
}
  
export default numberWithCommas;