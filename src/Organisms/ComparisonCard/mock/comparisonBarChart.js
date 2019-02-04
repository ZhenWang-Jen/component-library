export default {
  title: "Persistency Rate",
  infoText: "Comparisons of Carrier's premium for all Employer Groups across all product lines",
  dataFormat: "percent",
  tableTitle: "Comparison",
  series: [{
    name: 'Things',
    colorByPoint: true,
    data: [{
        name: 'Animals',
        y: 5,
        drilldown: 'animals'
    }, {
        name: 'Fruits',
        y: 2,
        drilldown: 'fruits'
    }, {
        name: 'Cars',
        y: 4,
        drilldown: 'cars'
    }]
}],
};