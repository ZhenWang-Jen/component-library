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
  }]
};
// export default {
//   data: {
//     // Title of the Comparison Graph.
//     // The highlighted areas in the attatchment will reference the title / infoText keys.
//     title: "Drilldown",
//     infoText:
//       "Comparisons of Carrier's premium for all Employer Groups across all product lines",
//     chart: {
//       config: {
//         chart: {
//           type: "column",
//           height: 245,
//           spacingLeft: 0,
//           spacingBottom: 10,
//           events: {

//       drilldown: function(e) {
//        // console.log(Object.getOwnPropertyNames(this))
//       console.log(this);

//       //console.log("this.drilldownLevels", this.drilldownLevels)
//         var x = document.createElement("A");
//         var t = document.createTextNode(`${this.ddDupes[this.ddDupes.length-1]} > `);
//         //x.onclick = aaa(2) 
//         x.setAttribute('onClick', "(function () { console.log(this.drilldownLevel); this.drilldownLevels.pop(); })();");
//         x.appendChild(t);
//         document.getElementsByClassName('PageWrapper')[0].appendChild(x);


//         // var label = this.renderer.button('Chart loaded', 100, 10)
//         // .attr({
//         //     fill: 'red',
//         //     padding: 10,
//         //     r: 5,
//         //     zIndex: 8
//         // })
//         // .css({
//         //     color: '#FFFFFF'
//         // })
//         // .add();

//         // this.series[1].setData([{
//         //   name: 'Dierenm',
//         //   y: 5,
//         //   drilldown: 'animals'
//         // }, {
//         //   name: 'Fruit',
//         //   y: 2,
//         //   drilldown: 'fruits'
//         // }, {
//         //   name: "Auto's",
//         //   y: 4
//         // }, {
//         //   name: "test's",
//         //   y: 4
//         // }], false, false);
//       }
//     },
//         },
//         colors: ["#9AD6CC"],
//         title: {
//           text: null
//         },
//         xAxis: {
//           type: "category",
//           tickColor: "transparent",
//           labels: {
//             style: {
//               color: '#72757A !important',
//               fontSize: '13px',
//               fontWeight: 600,
//               letterSpacing: '0.29px',
//               lineheight: '18px'
//             }
//           }
//         },

//         legend: {
//           enabled: false
//         },

//         yAxis: {
//           title: {
//             text: null
//           },
//           labels: {
//             // align: 'left',
//             // x: 0,`
//             y: -2,
//             // distance: -100,
//             style: {
//               color: "#72757A",
//               fontFamily: "Open Sans",
//               fontWeight: "bold",
//               letterSpacing: '0.23px',
//               lineHeight: '33px'
//             }
//           }
//         },
//        /* series: [{
//           maxPointWidth: 5
//       }],*/
//         tooltip: {
//           shared: true,
//           positioner(labelWidth, labelHeight, point) {
//             const tooltipX = point.plotX;
//             const tooltipY = point.plotY;
//             return {
//               x: tooltipX,
//               y: tooltipY
//             };
//           },
//           pointFormat: ""
//         },
//         plotOptions: {
//           series: {
//             tooltip: {
//               trackByArea: true,
//               tooltip: {
//                 shared: true,
//                 positioner(labelWidth, labelHeight, point) {
//                   const tooltipX = point.plotX;
//                   const tooltipY = point.plotY;
//                   return {
//                     x: tooltipX,
//                     y: tooltipY
//                   };
//                 }
//               }
//             },
//             legendItemClick() {
//               return false;
//             }
//           }
//         },
//         exporting: {
//           enabled: false
//         },
//         credits: {
//           enabled: false
//         },
//         series: [{
//           name: 'Things',
//           colorByPoint: true,
//           data: [{
//             name: 'Animals',
//             y: 5,
//             drilldown: 'animals'
//           }, {
//             name: 'Fruits',
//             y: 2,
//             drilldown: 'fruits'
//           }, {
//             name: 'Cars',
//             y: 4,
//             drilldown: 'cars'
//           }]
//         }],
//         drilldown: {
//             drillUpButton: {
//                 relativeTo: 'spacingBox',
//                 position: {
//                     y: 0,
//                     x: 0
//                 },
//                 theme: {
//                     fill: 'white',
//                     'stroke-width': 1,
//                     stroke: 'silver',
//                     r: 0,
//                     states: {
//                         hover: {
//                             fill: '#bada55'
//                         },
//                         select: {
//                             stroke: '#039',
//                             fill: '#bada55'
//                         }
//                     }
//                 }

//             },
//           series: [{
//           name: 'Sub Things',
//             id: 'animals',
//             data: [{
//                 name: 'Mammals',
//                 y: 4,
//                 drilldown: 'mammals'
//               },
//               ['Reptiles', 2],
//               ['Vertebrates', 1]
//             ]
//           }, {
//             id: 'mammals',
//             data: [['Cats', 3], ['Dogs', 2], ['Platypus', 1]]
//           }, {
//             id: 'fruits',
//             data: [
//               ['Apples', 4],
//               ['Oranges', 2]
//             ]
//           }, {
//             id: 'cars',
//             data: [
//               ['Toyota', 4],
//               ['Opel', 2],
//               ['Volkswagen', 2]
//             ]
//           }]
//         }
//       }
//     },
//     tableData: [
//       {name: "Q1", y: 9},
//       {name: "Q2", y: 0},
//       {name: "Q3", y: -1},
//       {name: "Q4", y: 7.4}
//     ]
//     /*summary: {
//       config: {
//         bodyColor: "#F2F9F8",
//         headerColor: "#D8EEEA",
//         title: "Comparison",
//         valueType: "percent",
//         columns: [
//           { title: "", field: "qtr", isbold: true },
//           {
//             title: "%",
//             field: "percent",
//             colorNumber: true,
//             transform: "percentage"
//           },
//           {
//             title: "'16",
//             field: "fromYear",
//             colorNumber: false,
//             transform: "currency"
//           },
//           {
//             title: "'18",
//             field: "toYear",
//             colorNumber: false,
//             transform: "currency"
//           }
//         ]
//       },
//       data: [
//         { qtr: "Q1", percent: "9", fromYear: 35000000, toYear: 34000000 },
//         { qtr: "Q2", percent: "0", fromYear: 32000000, toYear: 31000000 },
//         { qtr: "Q3", percent: "-1", fromYear: 30000000, toYear: 29666666 },
//         { qtr: "Q4", percent: "7.4", fromYear: 27000000, toYear: 29000000 }
//       ]
//     }*/
//   }
// };