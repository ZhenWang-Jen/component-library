import omit from "lodash/omit";
import shortid from 'shortid';
import ToggleDataSet from "../../Atoms/ToggleDataSet";
import Container from "../Container";
import Divider from '../../Atoms/Divider';
import Table from "../Table";
import Header from "../../Atoms/Header";
import Loader from "../../Atoms/Loader";
import React, { Component } from "react";
import { Grid, Icon } from "semantic-ui-react";
import "./TableDetails.scss";

import decamelize from "../../utils/decamelize";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";

class TableDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlanYearTitle: 'Current Plan Year',
      infoText: "",
      currentPlanYearArray: this.props.currentPlanYearArray,
      detailTableTitle: this.props.detailTableTitle,
      detailTableArray: this.props.detailedTable,
      hiddenHeadingArray: this.props.hiddenHeadingArray,
      hiddenHeaderArray: this.props.hiddenHeaderArray,
      currentToggleId: 0,
      clickedDrawerId: this.props.clickedId,
      detailedTableDrawerArray: this.props.drawers,
      currentUrl: this.props.dataSetUrls[0].url,
      dataSetUrls: this.props.dataSetUrls
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.drawers !== state.drawers) {
      return {
        detailedTableDrawerArray: props.drawers,
        clickedDrawerId: props.clickedId
      };
    }

    // Return null to indicate no change to state.
    return null;
  }

  handleToggleChange = (e, data) => {
    this.state.dataSetUrls.map((dataSetUrl, index) => {
      if (index + 1 == parseInt(data.id[data.id.length -1], 10)) {
        this.setState({ 
          currentUrl: data.name,
          currentToggleId: index,
        });
      }
    })
  };

  handleDrawerChange = (currentToggleIdFromChild, clickedDrawerIdFromChild, rowIdFromChild) => {
    this.props.drawerSetUrls.map((drawerSetUrl, index) => {
      if (index == currentToggleIdFromChild) {
        const clickedDrawerUrl = drawerSetUrl.url + clickedDrawerIdFromChild.toString();

        if (this.props.getClickedDrawerUrl) {
          this.props.getClickedDrawerUrl(clickedDrawerUrl, rowIdFromChild)
        }
      }
    });
  };

  render() {
    if(this.props.isError )  {
      return <Loader>{'Props has error? ' + this.props.isError}</Loader>;
    }

    const { currentPlanYearTitle, currentPlanYearArray, detailTableTitle, detailTableArray, hiddenHeadingArray, hiddenHeaderArray, currentToggleId, clickedDrawerId, detailedTableDrawerArray } = this.state;

    return (
      <React.Fragment>
        {this.props.currentPlanYearArray.length > 0 ? (
          <React.Fragment>
            <ToggleDataSet
              className={'back margin-b-20'}
              currentUrl="/"
              dataSetUrls={[
                {
                  id: 0,
                  title: "Back",
                  url: "/"
                }
              ]}
              handleClick={() => { history.back() }}
              ids={this.props.ids && this.props.ids.backButton ? this.props.ids.backButton : null}
            />

            <Header 
              className={'customized bold margin-b-20'}
              ids={this.props.ids ? this.props.ids.clientName : null}
              header={this.props.title}
            />   

            <Container
              title={currentPlanYearTitle}
              infoText={this.state.infoText}
              currentPlanYearContainer={this.props.ids.currentPlanYearContainer}
              currentPlanYearHDR={this.props.ids.currentPlanYearHDR}
            >
              <React.Fragment>
                {currentPlanYearArray.map((currentPlanYearRow, currentPlanYearRowID) => (
                  <React.Fragment key={shortid.generate()}>
                    <Grid.Row style={{paddingTop: 0}} id={this.props.ids.currentPlanYearContainer+`-row${currentPlanYearRowID+1}`}>
                      <Grid.Column style={{width: '100%'}}>
                          <div className={'inline-flex'}>
                            {currentPlanYearRow.tableData.map((drawerRow, drawerRowID) => (
                              Object.keys(currentPlanYearRow.tableData[0]).map((header, cellId) => (
                                <div key={shortid.generate()}>
                                    <div className="currentPlanYear-th">  
                                      {currentPlanYearRow.columnHeadings[cellId]}
                                    </div>
                                    <div className="currentPlanYear-td">
                                      {drawerRow[header]}
                                    </div>
                                </div>
                                ))
                                ))}
                          </div>
                      </Grid.Column>
                    </Grid.Row>
                    {/* Check if this Current Plan Year Section has more than one row to be qualified for row divider */}
                    {currentPlanYearRowID === 0 && this.props.currentPlanYearArray.length>1? <Divider className={'customized bold'}/> : null} 
                  </React.Fragment>
                ))}
              </React.Fragment>
            </Container>

            <div style={{marginTop: 30}}></div>
          </React.Fragment>
          ) : null
        }

        <Container
          title={detailTableTitle}
          infoText={detailTableArray[currentToggleId].infoText}
          tableData={detailTableArray[currentToggleId].tableData}
          currentUrl={this.state.currentUrl}
          dataSetUrls={this.props.dataSetUrls}
          handleClick={this.handleToggleChange}
          ids={this.props.ids ? this.props.ids : null}
          >
            <Table
              currentToggleId={currentToggleId}
              clickedDrawerId={clickedDrawerId}
              columnHeadings={detailTableArray[currentToggleId].columnHeadings}
              hiddenHeadingArray={hiddenHeadingArray}
              hiddenHeaderArray={hiddenHeaderArray}
              search={this.props.largeTable == true ? true : false}
              snapShot={this.props.snapShot == true ? true : false}
              export 
              largeTable={this.props.largeTable == true ? true : false}
              drawers={detailedTableDrawerArray}
              pagination={this.props.largeTable == true ? true : false}
              tableData={detailTableArray[currentToggleId].tableData}
              dropdown= {this.props.dropdown? this.props.dropdown : null}
              handleDrawerChange={this.handleDrawerChange}
              ids={this.props.ids ? this.props.ids : null}        
              drawerSetUrls={this.props.drawerSetUrls}
            />
        </Container>
      </React.Fragment>
    );
  }
}

export default TableDetails;