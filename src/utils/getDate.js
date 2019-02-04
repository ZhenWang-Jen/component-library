/**
 * Get today's full data as a string
 * 
 * @param {text} string table title as part of the file name
 * @return string full date
 */
function getDate(title) {
    let date = new Date();
    return title + "-" + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
  }
    
export default getDate;