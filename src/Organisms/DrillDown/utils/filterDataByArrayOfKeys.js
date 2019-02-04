export default function filterDataByArrayOfKeys(unfilteredArray, filterKeys) {
  return unfilteredArray.filter(
    ({ productName }) => filterKeys.indexOf(productName) === -1
  );
}
