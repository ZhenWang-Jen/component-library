import React, { Component } from "react";
import { Grid, Form, Header } from "semantic-ui-react";

import Divider from '../../Atoms/Divider';
import Icon from "../../Atoms/Icon";
import ToggleDataSet from "../../Atoms/ToggleDataSet";
import ToolTip from '../../Atoms/ToolTip';
import "./Container.scss";

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      infoText: this.props.infoText,
      tableData: this.props.tableData,
      filterTable: "",
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log("child changed", props, state)
    if(props.drillDownChart !== undefined && props.drillDownChart) {
      return null;
    }

    if (props.title !== state.title) {
      return {
        title: props.title,
        infoText: props.infoText
      };
    }

    // Return null to indicate no change to state.
    return null;
  }
  // remove UNSAFE_componentWillMount
  // componentWillMount() {
  //   this.resetComponent()
  // }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => {
    this.setState({ value: result.brokerName })
  }

  render() {
    const { tableData, isLoading, value, results } = this.state
    const dataSetUrls = (this.props.dataSetUrls && this.props.dataSetUrls.length > 1) ? true : false 

    return (
      <Grid className={"grid_container"} id={this.props.currentPlanYearContainer ? this.props.currentPlanYearContainer : (this.props.ids ? this.props.ids.table : null)}>
        <Grid.Row className={"grid_container_row"}>
          <Grid.Column width={dataSetUrls ? 6 : 11}>
            <Header as='h3' floated='left' className={'customized'} id={this.props.currentPlanYearHDR ? this.props.currentPlanYearHDR : (this.props.ids ? this.props.ids.containerHDR : null)}>
              {this.state.title}
              {(this.props.dataWarning) && 
                <div className="drilldown-data-warning">
                  {`Only ${this.props.dataWarning} years of data available`}
                </div>}
              {this.props.calendar && 
              //   ` Yearly ${<Icon 
              //     name={'calendar alternate'}
              //     className={'customized'}
              //  />}`
                '  ' 
              //  <Icon 
              //       name={'calendar alternate'}
              //       className={'customized'}
              //    />
              }
              {/* {this.props.data.title == 'Growth and Trends' ? (
                <Icon name='star' style={{color: '#7ECEC1', marginLeft: -180, marginTop: -5 }}/>) : null} */}
            </Header>
          </Grid.Column>

          {dataSetUrls ? (
            <Grid.Column width={dataSetUrls ? 9 : 4}>
              <ToggleDataSet
                className={'group'}
                currentUrl={this.props.currentUrl}
                dataSetUrls={this.props.dataSetUrls}
                handleClick={this.props.handleClick}
                ids={this.props.ids && this.props.ids.containerButton ? this.props.ids.containerButton : null}
              />
            </Grid.Column>
          ) : null}

          <Grid.Column width={1} floated='right'>
            <Header as='h3' floated='right' className={'customized'}>
              {this.state.infoText != "" ? (
                <ToolTip
                  infoText={this.state.infoText}
                  className={'customized'}
                  ids={this.props.ids && this.props.ids.containerInfoIcon ? this.props.ids.containerInfoIcon: null}
                />) 
              : null}
            </Header>
          </Grid.Column> 

        </Grid.Row>

        <Divider className={'customized'}/> 
        
        {this.props.children? (React.cloneElement(this.props.children)) : null}
      </Grid>
    );
  }
}

export default Container;