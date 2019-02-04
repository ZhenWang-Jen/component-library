import _ from 'lodash';
import shortid from 'shortid';
import debounce from "lodash/debounce";
import React from 'react';
import { SizeMe } from 'react-sizeme';
import { Grid, Table, Menu, Dropdown, Icon, Pagination, Search, Header, Form, Select } from 'semantic-ui-react'
import Divider from '../../Atoms/Divider';
import DropDown from '../../Atoms/DropDown';
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import decamelize from "../../utils/decamelize";
import numberWithCommas from "../../utils/numberWithCommas";
import getDate from "../../utils/getDate";
import './Table.scss';

class TableExampleSortable extends React.Component {
  constructor(props) {
    super(props);

    const shortid = require('shortid');

    this.state = {
      active: "all",                                                                  // default to show all categories.
      currentToggleId: this.props.currentToggleId,                                    // props defaults to 0.
      searchQuery: "",                                                                // user search box input.
      searchedColumnKey: this.props.search ? Object.keys(this.props.tableData[0])[0] : "", // search the first column. 
      column: null,
      columnHeadings: [],
      columnHeaders: [],
      hiddenHeadingArray: this.props.hiddenHeadingArray ? this.props.hiddenHeadingArray : [],
      hiddenHeaderArray: this.props.hiddenHeaderArray ? this.props.hiddenHeaderArray : [],
      direction: null,
      tableData: this.props.tableData,
      drawerArray: [],
      rowId: null,
      drawerId: null,
      clickedDetailsId: null,
      
      rowsOptions: [
        { text: "10", value: 10 },
        { text: "25", value: 25 },
        { text: "50", value: 50 }
      ],
      rowsPerPage: 10,
      activePage: 1,
      tableWrapperWidth: 0,
      tableClassName: ''
    };

    this.throttledFunc = debounce(this.handleWindowResize, 200);
    this.tableWrapper = React.createRef();
    this.handleWindowResize = this.handleWindowResize.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currentToggleId !== state.currentToggleId) {
      return {
        currentToggleId: props.currentToggleId,
        columnHeadings: props.columnHeadings,
        searchedColumnKey: Object.keys(props.tableData[0])[0],
        columnHeaders: Object.keys(props.tableData[0]),
        tableData: props.tableData,
        drawerArray: props.drawers,
        drawerId: null // close drawer in order to avoid mismatching
      };
    }
      
    if (props.drawers !== state.drawerArray && props.drawers) {
      // 补齐row数为双以保证表格条纹错落正常
      let updatedDrawerArray = props.drawers;
      if (props.drawers.length % 2 != 0) {
        updatedDrawerArray.push("null")
      }

      return {
        drawerArray: updatedDrawerArray,
        drawerId: props.clickedDrawerId === state.drawerId ? null : props.clickedDrawerId
      };
    }

    // Return null to indicate no change to state.
    return null;
  }

  handleWindowResize = () => {
    // Explicitly apply the additional css for large table responsiveness using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    const scrollBar = this.tableWrapper.current;

    //scrollBar.addEventListener("overflow", console.log("scrolling"));
    if (scrollBar && scrollBar.scrollWidth > parseInt(scrollBar.style.width,10)) {
      this.setState({tableClassName: 'tableWrapper'});
    } else {
      this.setState({tableClassName: ''});
    }
  }

  handleDropdownChange = (valueSelected) => {
    let selectedStatus = [];

    if (valueSelected === "all") {
       selectedStatus = this.props.tableData;
    } else {
       selectedStatus = this.props.tableData.filter(row => (
        row.clientStatus && row.clientStatus.toLowerCase() === valueSelected ||
        row.planYearStatus && row.planYearStatus.toLowerCase() === valueSelected
    ));
    }

    this.setState({
      active: valueSelected,
      activePage: 1,
      tableData: selectedStatus
    });
  }

  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage, drawerId: null });
    // TODO: double check drawerId: null as it breaks existing functionality in stroybook but not actual dashboards.
  }

  handleRowsPerPageChange = (e, {value}) => {
    e.persist();

    this.setState({ 
      rowsPerPage: e.target.textContent,
      activePage: 1,
      drawerId: null // close drawer in order to avoid mismatching
    });
  }

  handleSortChange = clickedColumn => () => {
    const clicked = Object.keys(this.props.tableData[0])[this.props.columnHeadings.indexOf(clickedColumn)]
    const { column, tableData, direction, drawerId } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        tableData: _.sortBy(tableData, [clicked]),
        direction: 'ascending',
        drawerId: null // close drawer in order to avoid mismatching
      })

      return
    }

    this.setState({
      tableData: tableData.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
      drawerId: null // close drawer in order to avoid mismatching
    });
  };

  handleDrawerChange = (rowId, row) => {
    let { drawerId, currentToggleId, columnHeaders } = this.state;

    if (this.props.handleDrawerChange) {
      const differentIdArray = Object.keys(row).filter(value => -1 == columnHeaders.indexOf(value));

      if (differentIdArray.length == 1) {
        this.props.handleDrawerChange(currentToggleId, row[differentIdArray], rowId);
      } else if (differentIdArray.length == 0 && row.clientId) {
        // This is for Employer Groups Tables. 
        // When every column from the api directly shows on table, so no different Id used as parameter for drawer.
        // Then the clientId is used.
        this.props.handleDrawerChange(currentToggleId, row.clientId, rowId);
      }
    } else { // this is only for storybook which doesn't have handleDrawerChange.
      this.setState({
        drawerId: rowId === drawerId ? null : rowId
      });
    }
  };

  processColumnHeadings() {
    let tmpColumnHeadings = this.props.columnHeadings;
    let tmpColumnHeaders = Object.keys(this.props.tableData[0]);

    // filter out case-insensitive column headings like "Product Line Id" so it's not showing on the table
    const customIndexOf = function(array, searchElement, fromIndex) {
      return array.map(function(value) {
        return value.toLowerCase();
      }).indexOf(searchElement.toLowerCase(), fromIndex);
    };

    this.state.hiddenHeadingArray.forEach(hiddenHeading => {
      if (customIndexOf(tmpColumnHeadings, hiddenHeading) > -1) {
        tmpColumnHeadings.splice(tmpColumnHeadings.indexOf(hiddenHeading), 1);
      }
    });
    this.state.hiddenHeaderArray.forEach(hiddenHeader => {
      if (customIndexOf(tmpColumnHeaders, hiddenHeader) > -1) {
        tmpColumnHeaders.splice(tmpColumnHeaders.indexOf(hiddenHeader), 1);
      }
    });

    this.setState({
      columnHeadings: tmpColumnHeadings,
      columnHeaders: tmpColumnHeaders
    });
  }

  componentDidMount() {
    // filter out id column that's only for querying drawers, not for display
    this.processColumnHeadings();

    window.addEventListener("onload", this.throttledFunc);
    window.addEventListener("resize", this.throttledFunc);
  }

  componentDidUpdate(prevProps) {
    // update column headings to filter out hidden headings when switch toggle
    if (this.props.currentToggleId !== prevProps.currentToggleId) {
      this.processColumnHeadings();
    }
  }

  componentWillUnmount() {
    window.addEventListener("onload", this.throttledFunc);
    window.removeEventListener("resize", this.throttledFunc);
  }

  render() {
    let { tableData, drawerArray, clickedDetailsId, columnHeadings, columnHeaders, hiddenHeadingArray, hiddenHeaderArray, tableWrapperWidth, tableHeadWidth, tableClassName } = this.state;
    const { searchQuery, searchedColumnKey, value, column, direction, activePage, rowsOptions, rowsPerPage } = this.state;
    const lowerCaseQuery = searchQuery.toLowerCase();
    const fileName = getDate(capitalizeFirstLetter(decamelize(searchedColumnKey).replace("name", "")));
    const pageCount = Math.round(tableData.length / rowsPerPage + 0.49);
    const validRows = Math.min(rowsPerPage, tableData.length - (activePage - 1) * rowsPerPage);
    const totalRows = (activePage - 1) * rowsPerPage + validRows;
    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableData.length - (activePage-1) * rowsPerPage);
    // const fieldWidth = (1 / (columnHeaders.length-1)) * 100 + "%";
    const baseUrl = String(window.location.pathname).toLowerCase();

    const TableResponsiveWrapper = ({ largeTable, tableClassName, children }) => (largeTable == true ? (
      <div ref={this.tableWrapper} className={tableClassName} style={{width: tableWrapperWidth, overflowX: 'auto', position: 'static'}}>
       {children}
      </div>
      ) : children
    );

    return (
      <React.Fragment>
        <Grid.Row style={{padding: 0}}>
          <Grid.Column width={3}>
            {this.props.search ? (
             <Form.Input
               value={searchQuery}
               onChange={e => (this.setState({searchQuery: e.target.value}))}
               placeholder={'Search ' + capitalizeFirstLetter(decamelize(searchedColumnKey).replace("name", ""))}
               icon="search"
               id={this.props.ids ? this.props.ids.tableSearch : null}
             />  
            ) : null}
          </Grid.Column>   

          <Grid.Column width={3}>
            {this.props.dropdown? (
              <DropDown 
                placeholder="Select Group"
                options={this.props.dropdown}
                selection
                onChange={this.handleDropdownChange}
                className="margin-l-30-small"
                ids={this.props.ids && this.props.ids.tableSelectList ? this.props.ids.tableSelectList : null}
              />
              ): null}
          </Grid.Column> 

          <Grid.Column width={10}>
            {this.props.export? (
              <DropDown
                className="export-dropdown"
                icon="download"
                ids={this.props.ids ? this.props.ids.tableExportList : null}
                columnHeaders={columnHeaders}
                tableData={tableData}
                fileName={fileName}
              />) 
            : null}

            {this.props.pagination ? (
              <div className="showingPage" id={this.props.ids && this.props.ids.tableShowingLabel ? this.props.ids.tableShowingLabel : null}>Showing {totalRows} of {tableData.length}</div>
            ) 
            : null}
          </Grid.Column>
        </Grid.Row>
        
        <SizeMe>{({ size }) =>
          <Grid.Row>
            <TableResponsiveWrapper largeTable={columnHeadings.length > 10 ? true: false} tableClassName={tableClassName}>
              <Table sortable striped basic='very' style={{padding: 0, margin: 0, width: '100%'}} className={this.props.largeTable? 'largeTable': null} id={this.props.ids ? this.props.ids.tableTableContainer : null}> 
                <Table.Header>
                  <Table.Row>
                    {columnHeadings.map((heading, index) => (
                      (<Table.HeaderCell
                        key={shortid.generate()}
                        sorted={column === heading ? direction : null}
                        onClick={this.handleSortChange(heading, index)}
                      >
                        {heading}
                      </Table.HeaderCell>)
                    ))}
                  </Table.Row>
                </Table.Header>
              
                <Table.Body>
                  {(this.props.search?
                    (this.props.drawers?
                      (tableData = tableData
                        // .filter(tableData => 
                        // (this.state.active === "all"? 
                        //   (tableData)
                        //   : (tableData.clientStatus? (tableData.clientStatus.toLowerCase() === this.state.active) : (tableData.planYearStatus.toLowerCase() === this.state.active))
                        // ))
                        .filter(tableData => (tableData[searchedColumnKey].toString().toLowerCase().includes(lowerCaseQuery)))
                      )
                      : (tableData = tableData.filter(tableData => (tableData[searchedColumnKey].toLowerCase().includes(lowerCaseQuery))))
                    ) 
                    : tableData
                  ),
                  (this.props.pagination?
                    (tableData = tableData.slice((activePage-1) * rowsPerPage, (activePage-1) * rowsPerPage + rowsPerPage)) 
                    : tableData
                  )
                    .map((row, rowId) => (
                      <React.Fragment key={shortid.generate()}>
                        <Table.Row key={shortid.generate()}>
                          {columnHeaders.map((header, cellId) => (
                            header != '' ?
                            (<Table.Cell
                              key={shortid.generate()}
                              children={
                                (this.props.largeTable && this.props.drawers && cellId == 0) ?
                                  (Object.keys(row).filter(s => s.includes('Id')).length != 0 ? clickedDetailsId = row[Object.keys(row).filter(s => s.includes('Id'))[0]] : clickedDetailsId = 0,
                                    <div key={shortid.generate()} style={{display: 'flex'}}>
                                      <Icon
                                        className={'expand-circle'}
                                        id={this.props.ids && this.props.ids.tableExpandIcon ? this.props.ids.tableExpandIcon+clickedDetailsId : null}
                                        name={this.state.drawerId === rowId ? "minus circle" : "plus circle"}
                                        onClick={() => this.handleDrawerChange(rowId, row)}
                                      />
                                        {row[header]}
                                    </div>
                                  ) :
                                  ((columnHeaders.includes("brokerName") && cellId == 0) ?
                                    (<a style={{color: '#72757A', textDecoration: 'underline'}} href={baseUrl + '/brokers_with_details/'+row.brokerId}>{row[header]}</a>) :
                                    (header.includes("percentage") ?
                                      (`${numberWithCommas(row[header])}%`) :
                                      (numberWithCommas(row[header]))
                                    )
                                  )
                              }                   
                            />) : null
                          ))}
                        </Table.Row>
                        
                        {this.props.drawers?
                          (drawerArray.map((drawer, drawerID) => (
                            <Table.Row
                              style={{ display: this.state.drawerId === rowId ? "" : "none" }}
                              className={'drawerRow'}
                              key={shortid.generate()}
                            >
                            {drawer.tableData ?
                              (<Table.Cell colSpan={columnHeaders.length}
                                           style={{borderTop: drawerID == 1 ? '2px solid #979797' : null}}>
                                <div className={'inline-flex'}>
                                  {Object.keys(drawer.tableData[0]).map((header, cellId) => (
                                    <div
                                      style={{textAlign: 'center'}}
                                      key={shortid.generate()}
                                    >
                                      <div style={{fontWeight: "bold"}}>  
                                        {drawer.columnHeadings[cellId]}
                                      </div>
                                      {drawer.tableData.map((drawerRowObj, drawerRowID) => (
                                        <div key={shortid.generate()}>
                                          {drawerRowObj[header]}
                                        </div>
                                      ))}

                                      {drawerID + 1 == drawerArray.length && cellId + 1 == Object.keys(drawer.tableData[0]).length ? (
                                        <a href={baseUrl + '/employergroups_with_details/' + clickedDetailsId}>
                                          View More Details
                                        </a>) 
                                      : null}
                                  </div>))}
                                </div>
                              </Table.Cell>)
                              : null}
                          </Table.Row>
                          )))
                          : null}
                      </React.Fragment>
                    ))}
                    {/* {(emptyRows > 0 && this.props.tableData.length > rowsOptions[0].value)? ( 
                      [...Array(emptyRows)].map((e, i) =>  
                        <Table.Row key={shortid.generate()}>
                          {[...Array(columnHeaders.length)].map((e, i) => <Table.Cell key={shortid.generate()} />)}
                        </Table.Row>)
                      ) : null} */}
                </Table.Body>
              </Table>
            </TableResponsiveWrapper>
            
            <Table className={'customizedFooter'} id={this.props.ids && this.props.ids.tableFooter ? this.props.ids.tableFooter : null}>
              {this.props.pagination? 
                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan={columnHeaders.length}>
                      <span style={{float: 'right'}}>
                        <span className={'rowsPerPage'} id={this.props.ids && this.props.ids.tableFooterRowsPerPageLabel ? this.props.ids.tableFooterRowsPerPageLabel : null}>
                          Rows per page:{' '}
                          <Dropdown 
                            className={'customized'} 
                            id={this.props.ids && this.props.ids.tableFooterRowsPerPageList ? this.props.ids.tableFooterRowsPerPageList : null}
                            upward 
                            inline 
                            options={rowsOptions} 
                            defaultValue={rowsOptions[0].value} 
                            onChange={this.handleRowsPerPageChange} 
                          />
                        </span>
                
                        <Pagination
                          activePage={activePage}
                          className={'customized'}
                          onPageChange={this.handlePaginationChange}
                          firstItem={null}
                          lastItem={null}
                          prevItem={{ 
                            content: null,
                            children: <span style={{color: pageCount >= activePage && activePage > 1? '#CA5803' : '#BCBEBE', cursor: pageCount >= activePage && activePage > 1? 'pointer' : 'not-allowed', textDecoration: pageCount >= activePage && activePage > 1? 'underline': null}}
                                            id={this.props.ids && this.props.ids.tableFooterPrev ? this.props.ids.tableFooterPrev : null}
                                            disabled={activePage <= 0}
                                            onClick={this.handlePrevPageClick}
                                      >Prev</span>
                                      
                          }}                       
                          nextItem={{
                            content: null,
                            children: <span style={{color: activePage >= pageCount? '#BCBEBE' : '#CA5803', cursor: activePage < pageCount? 'pointer' : 'not-allowed', textDecoration: activePage == pageCount? null : 'underline'}} 
                                            id={this.props.ids && this.props.ids.tableFooterNext ? this.props.ids.tableFooterNext : null}
                                      >Next</span> 
                          }}
                          pointing
                          secondary
                          totalPages={pageCount}
                          boundaryRange={5}
                        />
                      </span>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
                : null}</Table>
            {(function checkWidth() {
              if (size.width > tableWrapperWidth) { tableWrapperWidth = size.width; }
            })()}
          </Grid.Row>
        }</SizeMe>
      </React.Fragment>
    );
  }
}

export default TableExampleSortable;