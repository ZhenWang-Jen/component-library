/**
 * @param {Object[]} data - TODO.
 */

function enumerate(enumType, value) {
  const enumerations = {
    TIME_RANGE: {
      ytd: "YTD",
      last30: "Last Month",
      future90: "Within 90 Days",
      tyd: "Today"
    }
  };
  
  return enumerations[enumType][value];
}

export default enumerate;