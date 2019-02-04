import React, { Component } from 'react';
import { Dropdown, Checkbox, Input } from 'semantic-ui-react';
import './DropDown.scss';
import shortid from 'shortid';

const toggleLabels = { 
  select: 'Select All',
  deselect: 'Deselect All'
};

export default class CustomizedDropdown extends Component {

  constructor(props) {
    super(props);

    this.shortid = require('shortid');
    this.state = {
      filterParam: ''
    }
  }

  handleDropdownChange = (e, {value}) => {

    this.props.onChange ? this.props.onChange(value) : null
  }

  handleCheckOrUnCheckAll = (e, clickedItem) => {
    if (toggleLabels.select === clickedItem.label) {
      this.props.checkAllItems();
    } else {
      this.props.uncheckAllItems();
    }
  };

  getSelectionText() {

    let select_all = false;

    if(this.props.unCheckedProductLines.length === 0 ||
      this.props.productLines.length - this.props.unCheckedProductLines.length === this.props.productLimit) {
      select_all = false;
    }
    else if(this.props.unCheckedProductLines.length <= this.props.productLines.length) {
      select_all = true;
    }

    if( select_all ) {
      return toggleLabels.select
    }
    else {
      return toggleLabels.deselect
    }

  };

  isDisabled = (isChecked) => {
    if(isChecked) {
      return false
    }

    return (this.props.productLines.length-this.props.unCheckedProductLines.length >= this.props.productLimit);
  }

  render() {

    if(this.props.productLines) {
     return (<Dropdown
        search={this.props.search ? this.props.search : null}
        multiple={this.props.multiple ? this.props.multiple : null}
        icon={this.props.icon? this.props.icon : "dropdown"}
        id={this.props.ids ? this.props.ids : null}
        onOpen={this.props.onOpen? this.props.onOpen : null}
        onClose={this.props.onClose? this.props.onClose : null}
        className={this.props.className ? this.props.className : 'customized'}
        placeholder={this.props.placeholder}
        upward={this.props.upward? this.props.upward : null}
        onSearchChange={(e, { searchQuery }) => this.setState({filterParam: searchQuery})}
      >
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => this.setState({filterParam: ''})}>
            <Checkbox
              onClick={this.handleCheckOrUnCheckAll}
              label={this.getSelectionText()}
              checked={this.getSelectionText() === toggleLabels.select ? false : true} 
            />
          </Dropdown.Item>
          {this.props.productLines
            .filter(product =>
              product
                .toLowerCase()
                .includes(this.state.filterParam.toLowerCase())
            )
            .map((product, id) => {

              const isChecked = this.props.unCheckedProductLines.indexOf(product) === -1;

              return (
                <Dropdown.Item key={product} onClick={() => this.setState({filterParam: ''})}
                  disabled={this.isDisabled(isChecked)}>
                  <Checkbox
                    onClick={(e, data) => this.props.handleProductSelectChange(e, data)}
                    name={product}
                    label={product}
                    checked={isChecked}
                  />
                </Dropdown.Item>)
            })
          }
        </Dropdown.Menu>
      </Dropdown>)
    }

    return (
      <Dropdown 
        className={this.props.className? this.props.className : "customized"}
        defaultValue={this.props.defaultValue? this.props.defaultValue : null}
        icon={this.props.icon? this.props.icon : "dropdown"}
        id={this.props.ids ? this.props.ids : null}
        inline={this.props.inline? this.props.inline : null}
        onChange={this.handleDropdownChange}
        options={this.props.selection ? this.props.options : null}
        placeholder={this.props.placeholder? this.props.placeholder : null}
        search={this.props.search ? this.props.search : null}
        selection={this.props.selection? this.props.selection : null}
        text={this.props.search? this.props.placeholder : null}
        //simple={this.props.simple? this.props.simple : null}
        upward={this.props.upward? this.props.upward : null}
        //handleRowsPerPageChange={this.props.handleRowsPerPageChange? this.props.handleRowsPerPageChange : null}
        onOpen={this.props.onOpen? this.props.onOpen : null}
        onClose={this.props.onClose? this.props.onClose : null}
      >
        {this.props.icon==="download" ? (
          <Dropdown.Menu key={this.shortid.generate()}>
            <Dropdown.Item>
              {/* <CSVLink
                headers={this.props.chart? (this.props.columnHeaders): (tableToCSV(this.props.columnHeaders))}
                data={this.props.tableData}
                filename={this.props.fileName+`.csv`}
              >
                Export to CSV
              </CSVLink> */}
            </Dropdown.Item>
            <Dropdown.Item>
              {/* <CSVLink
                headers={this.props.chart? (this.props.columnHeaders): (tableToCSV(this.props.columnHeaders))}
                data={this.props.tableData}
                filename={this.props.fileName+`.xlsx`}
              >
                Export to Excel
              </CSVLink> */}
            </Dropdown.Item>
          </Dropdown.Menu>
        ): null}
      </Dropdown>
    )
  }
}