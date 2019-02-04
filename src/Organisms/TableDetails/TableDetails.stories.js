import React from "react";
import { storiesOf } from "@storybook/react";
import TableDetails from "./TableDetails";
import Dropdowns from "../../utils/dropdowns";

import mockData from "./mock";

import mockBrokersCurrentPlanYear from "../Table/mockData/mockBrokersCurrentPlanYear";
import mockBrokersProductLines from "../Table/mockData/mockBrokersProductLines";
import mockBrokersEmployerGroups from "../Table/mockData/mockBrokersEmployerGroups";

import mockEmployerGroupsCurrentPlanYear from "../Table/mockData/mockEmployerGroupsCurrentPlanYear";
import mockEmployerGroupsListOfBenefits from "../Table/mockData/mockEmployerGroupsListOfBenefits"
import mockEmployerGroupsPlanYearHistory from "../Table/mockData/mockEmployerGroupsPlanYearHistory";
import mockEmployerGroupsPlanYearHistoryDrawer from "../Table/mockData/mockEmployerGroupsPlanYearHistoryDrawer";

/**
 * Details section for employer groups
 * https://projects.invisionapp.com/d/main#/console/11570914/282415287/preview
 */

storiesOf("Components/TableDetails", module)
  .add("Brokers Details", () => (
    <TableDetails
      title={'Lockton'}
      clickedId={2}
      largeTable
      detailTableTitle={'Product lines & Employer Groups'}
      currentPlanYearArray={mockBrokersCurrentPlanYear}
      detailedTable={[mockBrokersProductLines, mockBrokersEmployerGroups]}
      hiddenHeadingArray={['Product Line Id', 'Client Id']}
      hiddenHeaderArray={['productLineId', 'clientId']}
      drawers={[mockBrokersEmployerGroups]}
      toggle
      search
      dataSetUrls={[
        {
          id: 0,
          title: "Product Lines",
          url: "/overview/graph_table/broker_product_lines_detail/2"
        },
        {
          id: 1,
          title: "Employer Groups",
          url: "/overview/graph_table/employer_groups_detail/2"
        }
      ]}
      drawerSetUrls={[
        {
          id: 0,
          title: "Product Lines Drawer",
          url: `/overview/graph_table/broker_product_lines_drawer/`
        },
        {
          id: 1,
          title: "Employer Groups Drawer",
          url: `/overview/graph_table/broker_employer_groups_drawer/`
        }
      ]}
      ids={{
        backButton: "brokers-details-1-back",
        clientName: "brokers-details-1-broker-name",
        currentPlanYearContainer: "brokers-details-1-current-plan-year-container",
        currentPlanYearHDR: "brokers-details-1-hdr",
        table: "brokers-details-1-container",
        containerHDR: "product-lines-employer-group-1-hdr",
        containerButton: "product-lines-employer-group-1-button",
        tableSearch: "product-lines-employer-group-1-search",
        tableShowingLabel: "product-lines-employer-group-1-showing-label",
        tableExportList: "product-lines-employer-group-1-export-list",
        tableTableContainer: "product-lines-employer-group-1-table-container",
        tableExpandIcon: "product-lines-employer-group-1-expand-",
        tableFooter: "product-lines-employer-group-1-footer",
        tableFooterRowsPerPageLabel: "product-lines-employer-group-1-footer-rowsPerPage-label",
        tableFooterRowsPerPageList: "product-lines-employer-group-1-footer-rowsPerPage-list",
        tableFooterPrev: "product-lines-employer-group-1-footer-prev",
        tableFooterPage: "product-lines-employer-group-1-footer-page-1",
        tableFooterNext: "product-lines-employer-group-1-footer-next"
      }}
    />
  ))
  .add("Employer Groups Details", () => (
    <TableDetails
      clickedId={2}
      title={'Test'}
      detailTableTitle={'Plan Year History'}
      currentPlanYearArray={mockEmployerGroupsCurrentPlanYear}
      detailedTable={[mockEmployerGroupsPlanYearHistory]}
      hiddenHeadingArray={['Product Line Id']}
      hiddenHeaderArray={['productLineId']}
      drawers={mockEmployerGroupsPlanYearHistoryDrawer} 
      search
      dropdown={Dropdowns.employerGroupsDetailsDropdown}
      largeTable
      dataSetUrls={[
        {
          id: 0,
          title: "Product Lines",
          url: "/overview/graph_table/broker_product_lines_detail/2"
        }
      ]}
      ids={{
        backButton: "employer-groups-details-1-back",
        clientName: "employer-groups-details-1-client-name",
        currentPlanYearContainer: "employer-groups-details-1-current-plan-year-container",
        currentPlanYearHDR: "employer-groups-details-1-hdr",
        table: "employer-groups-details-1-container",
        containerHDR: "employer-groups-1-hdr",
        tableSearch: "employer-groups-details-1-search",
        tableShowingLabel: "employer-groups-details-1-showing-label",
        tableExportList: "employer-groups-details-1-export-list",
        tableTableContainer: "employer-groups-details-1-table-container",
        tableExpandIcon: "employer-groups-details-1-expand-",
        tableFooter: "employer-groups-details-1-footer",
        tableFooterRowsPerPageLabel: "employer-groups-details-1-footer-rowsPerPage-label",
        tableFooterRowsPerPageList: "employer-groups-details-1-footer-rowsPerPage-list",
        tableFooterPrev: "employer-groups-details-1-footer-prev",
        tableFooterPage: "employer-groups-details-1-footer-page-1",
        tableFooterNext: "employer-groups-details-1-footer-next"
      }}
  />
  ))
  ;