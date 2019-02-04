import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid } from 'semantic-ui-react';
import Container from "../Container";
import Table from "./Table";
import Dropdowns from "../../utils/dropdowns";

import lifeEventsMockData from "./mockData/mockLifeEvents";
import brokersMockData from "./mockData/mockBrokers";
import employerGroupsMockData from "./mockData/mockEmployerGroups";
import employerGroupsSnapshotMockData from "./mockData/mockEmployerGroupsSnapshot";
import mockEmployerGroupsCurrentPlanYear from "./mockData/mockEmployerGroupsCurrentPlanYear";
import mockEmployerGroupsListOfBenefits from "./mockData/mockEmployerGroupsListOfBenefits"

storiesOf("Components/Table", module)
.add("Life Events", () => (
  <Grid relaxed='very' columns={2}>
    <Grid.Column>
      <Container
        title={lifeEventsMockData.title}
        infoText={lifeEventsMockData.infoText}
        tableData={lifeEventsMockData.tableData}
      >
        <Table 
        smallTable
          columnHeadings={lifeEventsMockData.columnHeadings}
          export
          sortColumn  
          tableData={lifeEventsMockData.tableData}
        />
      </Container>
    </Grid.Column>
  </Grid>
))
.add("Brokers", () => (
  <Container
    title={brokersMockData.title}
    tableData={brokersMockData.tableData}
  >
    <Table
    columnHeadings={brokersMockData.columnHeadings}
      search
      export
      largeTable
      pagination
      sortColumn  
      tableData={brokersMockData.tableData}
    />
  </Container>
))
.add("Employer Groups Snapshot", () => (
  <Container
    title={employerGroupsSnapshotMockData.title}
    tableData={employerGroupsSnapshotMockData.tableData}
    >
      <Table
        columnHeadings={employerGroupsSnapshotMockData.columnHeadings} 
        search
        export 
        largeTable
        snapShot
        pagination
        tableData={employerGroupsSnapshotMockData.tableData}
      />
  </Container>
))
.add("Employer Groups with Drawers", () => (
  <Container
    title={employerGroupsMockData.title}
    tableData={employerGroupsMockData.tableData}
    calendar
    >
      <Table
        columnHeadings={employerGroupsMockData.columnHeadings}
        search
        dropdown={Dropdowns.employerGroupsTableDropdown}
        export 
        largeTable
        drawers={mockEmployerGroupsCurrentPlanYear}
        pagination
        tableData={employerGroupsMockData.tableData}
      />
  </Container>
))
;