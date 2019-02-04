import React from "react";
import { storiesOf } from "@storybook/react";
import ToggleDataSet from "./ToggleDataSet";

storiesOf("Atoms/ToggleDataSet", module)
  .add("1 url - back button", () => (
    <ToggleDataSet
      className={'back'}
      currentUrl="/carrier/psa/employergroups"
      dataSetUrls={[
        {
          id: 0,
          title: "Back",
          url: "/carrier/psa/employergroups"
        }
      ]}
      handleClick={() => { history.back() }}
    />
  ))
  .add("2 urls", () => (
    <ToggleDataSet
      className={'group'}
      currentUrl="/overview/graph_summary/product_average"
      dataSetUrls={[
        {
          id: 0,
          title: "Avg. Premiums",
          url: "/overview/graph_summary/product_average"
        },
        {
          id: 1,
          title: "Participation %",
          url: "/overview/graph_summary/product_participation"
        }
      ]}
      handleClick={() => {}}
    />
  ))
  .add("3 urls", () => (
    <ToggleDataSet
      className={'group'}
      currentUrl="/overview/graph_summary/product_average"
      dataSetUrls={[
        {
          id: 0,
          title: "Avg. Premiums",
          url: "/overview/graph_summary/product_average"
        },
        {
          id: 1,
          title: "Participation %",
          url: "/overview/graph_summary/product_participation"
        },
        {
          id: 2,
          title: "Hi!! Avg. Premiums",
          url: "/overview/graph_summary/product_participation_bundle"
        }
      ]}
      handleClick={() => {}}
    />
  ));