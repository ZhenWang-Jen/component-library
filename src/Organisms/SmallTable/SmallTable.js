import React, { Component } from "react";
import Header from "../../Atoms/Header";
import sortArray from "../../utils/sortArray";
import orderBy from "lodash/orderBy";
import tableConfigs from "../../utils/dropdowns";
import "./SmallTable.scss";

export default class SmallTable extends Component {
	constructor(props) {
		super(props);

    this.state = {
      wasLastHandleSortAsc: false
    }

    /*if(this.props.chartType === 'Map') {
      this.state = {
        data : this.getGeoMapData(),
        wasLastHandleSortAsc: false,
        tableHeaders: tableConfigs.gainedLostTable
      }
    }

    if(this.props.chartType === 'Pie') {
      this.state = {
        data: this.props.data,
        tableHeaders: tableConfigs.donutChartTable
      }
    }*/
	}

  getGeoMapData(data) { 
    let MapSmallTableData = data.sort(sortArray);
//     let MapSmallTableData = [];
//     debugger
//     console.log(Object.values(tableConfigs.gainedLostTable))
//     for (var i= 0; i< 52; i++) {
//           MapSmallTableData.push({
//             stateName: "N/A",
//                gainValue: 0,
//                lostValue: 0
//              })
//     }
//return MapSmallTableData;

    return MapSmallTableData = data.map(usState => {
      if (usState.length != 3) {
        return {
          stateName: "N/A",
          gainValue: 0,
          lostValue: 0
        };
      }
      return {
        stateName: usState[0].split("-")[1].toUpperCase(),
        gainValue: usState[1],
        lostValue: usState[2]
      };
    });
  }

  handleSort = sortByKey => {
    this.setState(prevState => ({
        sortHandler: true,
        sortByKey: sortByKey,
        wasLastHandleSortAsc: !prevState.wasLastHandleSortAsc
      }))
    
    /*this.setState(prevState => ({
      data: sortedData,
      wasLastHandleSortAsc: !prevState.wasLastHandleSortAsc
    }));*/
  };

  shouldComponentUpdate(nextProps) {
    if (nextProps.chartType === 'Map' || nextProps.productYearFilter !== this.props.productYearFilter) {
      return true;
    }

    // Re-render if toggle option is changed
    if (nextProps.currentUrl !== this.props.currentUrl) {
      return true;
    }
    
    // Re-render if there was a warning 
    if (nextProps.downloadMessage !== this.props.downloadMessage) {
      return true; 
    }
    return false;
  };

  formatNum = currentNum => {
    let checkedCurrentNum = parseInt(currentNum, 10);

    if (checkedCurrentNum > 0) {
      checkedCurrentNum = "+" + checkedCurrentNum;
    }

    return checkedCurrentNum;
  };

	render() {

      const tableHeaders = this.props.chartType === 'Map' ? tableConfigs.gainedLostTable : tableConfigs.donutChartTable;

      // get current state of data filling the table and whether last sort was asc or desc
      // if wasLastHandleSortAsc is true, the last call to handleSort was 'asc'
      // sortOrder is set to the inverse of the last sort order.
      const sortOrder = this.state.wasLastHandleSortAsc ? "desc" : "asc";
      // Data is sorted in 'asc' or 'desc' order and order is toggled on each click
      let sortedData = orderBy(this.getGeoMapData(this.props.data), [this.state.sortByKey], [sortOrder]);

      return (
        <div className={'smallTable_wrapper'} style={{backgroundColor: this.props.color[1]}} id={this.props.ids ? this.props.ids.graphTableContainer : null}>
          <div className={'commonStyle_tableHeader'} style={{backgroundColor: this.props.color[0]}} id={this.props.ids ? this.props.ids.graphTableHDR : null}>
            {this.props.title ? this.props.title : "Comparison"}
          </div>

          {this.props.chartType === 'Map' || this.props.chartType === "Pie"? (
            <React.Fragment>
              <div className={'small_colHeader'} id={this.props.ids ? this.props.ids.graphTableColumnHDRContainer : null}>
                {tableHeaders.map((colHeader, index) => (
                  <div key={index} className={'small_colHeaderItem'} onClick={() => this.handleSort(colHeader.key)}>
                    {colHeader.label}
                  </div>
                ))}
              </div>
              
              <div className={"small_tableBodyWrapper"} id={this.props.ids ? this.props.ids.graphTableBody : null}>
                <div className={"small_tableBody"}>
                  {sortedData.length !== 0 ? (
                    sortedData.map((currentObj, index) => (
                      <div className={"small_tableRow"} key={index}>  
                        <div className={'small_cellValue'}>{Object.values(currentObj)[0]}</div>
                        {this.props.chartType == 'Map' ? (
                          <React.Fragment>
                            <div className={'small_cellValue'} style={{color: parseInt(Object.values(currentObj)[1], 10) > 0? '#5bb466' : '#818285'}}>{Object.values(currentObj)[1]}</div>
                            <div className={'small_cellValue'} style={{color: parseInt(Object.values(currentObj)[2], 10) > 0? '#ff2700' : '#818285'}}>{Object.values(currentObj)[2]}</div>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <div className={'small_cellValue'} style={{color: parseInt(Object.values(currentObj)[1], 10) > 0? '#5bb466' : parseInt(Object.values(currentObj)[1], 10) < 0? 'red' : '#818285'}}>
                              {this.formatNum(Object.values(currentObj)[1])}
                            </div>
                            <div className={'small_cellValue'} style={{color: parseInt(Object.values(currentObj)[2], 10) > 0? '#5bb466' : parseInt(Object.values(currentObj)[2], 10) < 0? 'red' : '#818285'}}>
                              {this.formatNum(Object.values(currentObj)[2])}
                            </div>
                          </React.Fragment>
                        )}
                      </div>
                    ))
                  ) : ( <div className="no-result-message">
                          {/* <Header
                            header={'No Results'}
                            subheader={'Please change your parameter.'}
                            className={'customized error--container'}
                          /> */}
                        </div> 
                      )
                  }
                </div>
              </div>
            </React.Fragment>
            ) : (this.props.chartType !== 'Map' && this.props.data !== undefined && this.props.data.length !== 0 ? (
              <React.Fragment>
              <div className={'regularTable_colHeader'} id={this.props.ids ? this.props.ids.graphTableColumnHDRContainer : null}>
                Combined average of quarters
              </div>

              <div className={'regularTable_tableBodyWrapper'} id={this.props.ids ? this.props.ids.graphTableBody : null}>
                <div className={'regularTable_tableBody'}>
                  {
                    this.props.data.map((tableData, index) => {
                      let updatedColor, cellValue;
                      if (tableData.y > 0) {
                        updatedColor = "#5bb466";
                        cellValue = "+" + tableData.y + "%";
                      } else {
                        cellValue = tableData.y + "%";
 
                        if (tableData.y < 0) {
                          updatedColor = "#ff2700";
                        } else {
                          updatedColor = "#818285";
                        }  
                      }                    
                      return (
                        <div className={'regularTable_rowWrapper'} key={index}>
                          <div className={'regularTable_rowHeader'} >{tableData.name}</div>
                          <div className={'regularTable_cellValue'} style={{color: updatedColor}}>{cellValue}</div>   
                        </div>
                      );
                    })
                  }
                </div>
              </div>
              </React.Fragment>              
            ) : (
              <div className="no-result-message">
                <Header
                  header={'No Results'}
                  subheader={'Please change your parameter.'}
                  className={'customized error--container'}
                />
              </div>
            ))
            }
        </div>
      );
  }
}