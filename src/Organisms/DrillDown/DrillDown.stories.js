import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid } from 'semantic-ui-react';
import DrillDown from "./DrillDown";
import ColumnDrillDownChart from "./charts/ColumnDrillDownChart";
import YearToQtrDrillDown from "./charts/YearToQtrDrillDown";
import drillDownData from "./mock/drillDownData";
import yearXAxisDrillDownData from "./mock/yearXAxisDrillDownData";
import multiCarrierData from "./mock/multiCarrierData";
import participationPercentage from "./mock/participationPercentage";
import smallGraphData from "./mock/smallGraph";
import Colors from "../../utils/colors";
import yearMonthData from "./mock/productGroupCounts";
import YearToMonthDrillDown from "./charts/YearToMonthDrillDown";
import AllInOneContainer from '../../Molecules/containers/AllInOneContainer';

/**
 * Drilldowns are utilized to display different levels of an object while drilling down into a chart
 * Calling accurate apis will show proper tiles, etc. But mockData won't as no title is used from mockData.
 * @param {Object} data - data set for drilldown DrillDownData
 */

storiesOf("Components/DrillDown", module)
    .add("Product >> Year >> Quarter (All DrillDown levels)", () => (
        <AllInOneContainer
            //mockData={drillDownData}
            drillDownChart={ColumnDrillDownChart}
            colors={Colors.defaultGraph}
            calendarDefault={0}
            dataSetUrls={[
                {
                id: 0,
                title: "Avg. Premiums",
                url: "carrier/overview/graph_summary/product_average"
                },
                {
                id: 1,
                title: "Participation %",
                url: "carrier/overview/graph_summary/product_participation"
                }
            ]}
            ids={{
                graph: "summary-graph-1",
                containerHDR: "summary-graph-1-hdr",
                containerButton: "summary-graph-1-button",
                containerInfoIcon: "summary-graph-1-info-icon",
                graphYearQuickset: "summary-graph-1-year-quickset",
                graphProductsList: "summary-graph-1-products-list",
                graphExportList: "summary-graph-1-export-list",
                graphBreadcrumbContainer: "summary-graph-1-breadcrumb-container",
                graphBreadcrumbProduct: "summary-graph-1-breadcrumb-product",
                graphBreadcrumbYear: "summary-graph-1-breadcrumb-year",
                graphBreadcrumbQuarter: "summary-graph-1-breadcrumb-quarter",
                graphGraphContainer: "summary-graph-1-graph-container",
                graphTableContainer: "summary-graph-1-table-container",
                graphTableHDR: "summary-graph-1-table-hdr",
                graphTableColumnHDRContainer: "summary-graph-1-table-column-hdr-container",
                graphTableBody: "summary-graph-1-table-body"
            }}
        />
    ))
    .add("Product >> Year >> Quarter percent tooltip", () => (
        <AllInOneContainer
            //mockData={participationPercentage}
            drillDownChart={ColumnDrillDownChart}
            colors={Colors.defaultGraph}
            calendarDefault={0}
            dataSetUrls={[
                {
                    id: 0,
                    title: "Avg. Premiums",
                    url: "carrier/overview/graph_summary/product_average",
                },
                {
                    id: 1,
                    title: "Participation %",
                    url: "carrier/overview/graph_summary/product_participation",
                }
            ]}
        />
    ))
    .add("Product >> Year >> Quarter currency tool tip", () => (
        <AllInOneContainer
            //mockData={multiCarrierData}
            drillDownChart={ColumnDrillDownChart}
            colors={Colors.defaultGraph}
            calendarDefault={0}
            dataSetUrls={[
                {
                    id: 0,
                    title: "Avg. Premiums",
                    url: "carrier/overview/graph_summary/product_average",
                    mockData: multiCarrierData
                },
                {
                    id: 1,
                    title: "Participation %",
                    url: "carrier/overview/graph_summary/product_participation",
                    mockData: participationPercentage
                }
            ]}
        />
    ))    
    .add("Year >> Quarter DrillDown", () => (
        <AllInOneContainer
            //mockData={yearXAxisDrillDownData}
            drillDownChart={YearToQtrDrillDown}
            colors={Colors.defaultGraph}
            calendarDefault={0}
            dataSetUrls={[
                {
                    id: 0,
                    title: "Avg. Premiums",
                    url: "carrier/overview/graph_comparison/premium_quarterly"
                },
                {
                    id: 1,
                    title: "Participation %",
                    url: "carrier/overview/graph_comparison/employer_quarterly"
                }
            ]}
            />
    ))
    .add("Year >> Months DrillDown", () => (
        <AllInOneContainer
            //mockData={yearMonthData}
            drillDownChart={YearToMonthDrillDown}
            calendarDefault={0}
            searchByDisabled={true}
            colors={Colors.defaultGraph}
            dataSetUrls={[
                {
                    id: 0,
                    title: "Group Counts",
                    url: "carrier/open_enrollment/graph_summary/renewals_counts",
                },
                {
                    id: 1,
                    title: "Participants",
                    url: "carrier/open_enrollment/graph_summary/renewals_participants",
                },
                {
                    id: 2,
                    title: "Premiums",
                    url: "carrier/open_enrollment/graph_summary/renewals_premiums",
                }
            ]}

            ids={{
                graph: "summary-graph-1",
                containerHDR: "summary-graph-1-hdr",
                containerButton: "summary-graph-1-button",
                containerInfoIcon: "summary-graph-1-info-icon",
                graphYearQuickset: "summary-graph-1-year-quickset",
                graphProductsList: "summary-graph-1-products-list",
                graphExportList: "summary-graph-1-export-list",
                graphBreadcrumbContainer: "summary-graph-1-breadcrumb-container",
                graphBreadcrumbProduct: "summary-graph-1-breadcrumb-product",
                graphBreadcrumbYear: "summary-graph-1-breadcrumb-year",
                graphBreadcrumbQuarter: "summary-graph-1-breadcrumb-quarter",
                graphGraphContainer: "summary-graph-1-graph-container",
                graphTableContainer: "summary-graph-1-table-container",
                graphTableHDR: "summary-graph-1-table-hdr",
                graphTableColumnHDRContainer: "summary-graph-1-table-column-hdr-container",
                graphTableBody: "summary-graph-1-table-body"
            }}
        />
    ))    
    .add("No searchBy dropdown", () => (
        <AllInOneContainer
            //mockData={participationPercentage}
            drillDownChart={ColumnDrillDownChart}
            colors={Colors.defaultGraph}
            searchByDisabled={true}
            dataSetUrls={[
                {
                    id: 0,
                    title: "Avg. Premiums",
                    url: "carrier/overview/graph_summary/product_average",
                    mockData: multiCarrierData
                },
                {
                    id: 1,
                    title: "Participation %",
                    url: "carrier/overview/graph_summary/product_participation",
                    mockData: participationPercentage
                }
            ]}
        />
    ))
    .add("No dataSetUrls prop (Use mock data)", () => (
        <AllInOneContainer
            mockData={participationPercentage}
            drillDownChart={YearToQtrDrillDown}
            calendarDefault={0}
            colors={Colors.defaultGraph}
        />
    ))
    .add("Small Graphs", () => (
        /**
         * `smallTable={true}` is optional Prop for small Graphs.
         *  Needed when Large graph uses small table. Use case : PSA -> Performance -> Growth
         **/
        <Grid>
            <Grid.Row columns={2}>
                <Grid.Column>
                    <AllInOneContainer
                        //mockData={yearXAxisDrillDownData}
                        drillDownChart={YearToQtrDrillDown}
                        colors={Colors.defaultGraph}
                        calendarDefault={3}
                        smallGraph={true}
                        searchByDisabled={true}
                        dataSetUrls={[
                          {
                            id: 0,
                            title: "Total Premium",
                            url: "carrier/overview/graph_comparison/premium_quarterly",
                          }
                        ]}
                        ids={{
                            graph: "summary-graph-1",
                            containerHDR: "summary-graph-1-hdr",
                            containerButton: "summary-graph-1-button",
                            containerInfoIcon: "summary-graph-1-info-icon",
                            graphYearQuickset: "summary-graph-1-year-quickset",
                            graphProductsList: "summary-graph-1-products-list",
                            graphExportList: "summary-graph-1-export-list",
                            graphBreadcrumbContainer: "summary-graph-1-breadcrumb-container",
                            graphBreadcrumbProduct: "summary-graph-1-breadcrumb-product",
                            graphBreadcrumbYear: "summary-graph-1-breadcrumb-year",
                            graphBreadcrumbQuarter: "summary-graph-1-breadcrumb-quarter",
                            graphGraphContainer: "summary-graph-1-graph-container",
                            graphTableContainer: "summary-graph-1-table-container",
                            graphTableHDR: "summary-graph-1-table-hdr",
                            graphTableColumnHDRContainer: "summary-graph-1-table-column-hdr-container",
                            graphTableBody: "summary-graph-1-table-body"
                        }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    ))
;