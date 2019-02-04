export default function getToolTipConfig(format) {
  if (format === "currency") {
    return {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: <b>$ {point.y}</b><br/>'
    };
  }
  if (format === "percent") {
    return {
      pointFormat:
        '<span style="color:{series.color}">{series.name}</span>: {point.y:.0f}%<br/>'
    };
  }

  return {
    pointFormat:
      '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>'
  };
}
