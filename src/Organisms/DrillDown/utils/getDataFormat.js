export default function getDataFormat(type) {
  let yAxisType;
  switch (type) {
    case "percent":
      yAxisType = "{value}%";
      break;
    case "currency":
      yAxisType = "currency";
      break;
    case "integer":
      yAxisType = "";
      break;
    default:
      yAxisType = "";
  }
  return yAxisType;
}
