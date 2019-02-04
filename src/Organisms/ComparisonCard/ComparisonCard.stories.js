import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid } from 'semantic-ui-react';
import AllInOneContainer from '../../Molecules/containers/AllInOneContainer';
import ComparisonCard from "./ComparisonCard";
import Colors from "../../utils/colors";
import comparisonSparkLineChart from "../ComparisonCard/configs/sparkLineChartConfig";
import comparisonLineChart from "./mock/comparisonLineChart";
import comparisonMapChart from "./mock/comparisonMapChart";
import comparisonPieChart from "./mock/comparisonPieChart";

storiesOf("Components/ComparisonCard", module)
  .add("Sparkline chart -- Trendcard", () => (
    <ComparisonCard
      data={comparisonSparkLineChart}
      calendarDefault={3}
      chartType={'sparkLine'}
      color={Colors.warning}
    />
  ))
  .add("Line chart -- Carrier Product Lines", () => (
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <AllInOneContainer
            mockData={comparisonLineChart}
            calendarDefault={3}
            chartType={'Line'}
            colors={Colors.overviewExecutiveCarrierProductLines}
            dataSetUrls={[
              {
                id: 0,
                title: "Carrier Product Lines",
                url: "/overview/graph_comparison/product_lines",
              }
            ]}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add("Map chart -- Regional Location", () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <AllInOneContainer
          //mockData={comparisonMapChart}
          chartType={'Map'}
          calendarDefault={3}
          colors={Colors.overviewExecutiveRegionalLocation}
          dataSetUrls={[
            {
              id: 0,
              title: "Regional Location",
              url: "carrier/overview/graph_geo/regional_locations",
            }
          ]}
          ids={{
            graph: "geo-graph-1",
            containerHDR: "geo-graph-1-hdr",
            containerInfoIcon: "geo-graph-1-info-icon",
            graphYearQuickset: "geo-graph-1-year-quickset",
            graphExportList: "geo-graph-1-export-list",
            graphGraphContainer: "geo-graph-1-graph-container",
            graphTableContainer: "geo-graph-1-table-container",
            graphTableHDR: "geo-graph-1-table-hdr",
            graphTableColumnHDRContainer: "geo-graph-1-table-column-hdr-container",
            graphTableBody: "geo-graph-1-table-body"
          }}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  ))  
  .add("Pie chart -- Active vs Passive", () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column>
        <AllInOneContainer
          mockData={comparisonPieChart}
          dataSetUrls={[
            {
              id: 0,
              title: "Active vs Passive",
              url: "/open_enrollment/graph_total/active_passive",
            }
          ]}
          calendarDefault={0}
          chartType={'Pie'}
          colors={Colors.oeActivePassive}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  ))
;