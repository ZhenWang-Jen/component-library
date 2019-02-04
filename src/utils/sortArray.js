/**
 * @param {Object[]} data - The sort 2 dimensional array by column value.
 */

function sortArray(a, b) {
  if (a[0] === b[0]) {
      return 0;
  }
  else {
      return (a[0] < b[0]) ? -1 : 1;
  }
}

export default sortArray;