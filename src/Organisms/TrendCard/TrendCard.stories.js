import React from "react";
import { Grid } from 'semantic-ui-react';
import { storiesOf } from "@storybook/react";
import TrendCard from "./TrendCard";

import percent from "./mock/percent";
import integer from "./mock/integer";
import number from "./mock/number";
import currency from "./mock/currency";

/**
 * Overview
 * TrendCards are used for a quick reference of categorized data
 * @param {Object} data - data set of the trendcard
 */

storiesOf("Components/TrendCard", module)
  .add("with no props", () => (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <TrendCard />
        </Grid.Column>
        <Grid.Column>
          <TrendCard />
        </Grid.Column>
        <Grid.Column>
          <TrendCard />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add("with props", () => (
    <Grid columns={3}>
      <Grid.Row><h3>data.trend.valueType === {`"percent"`}</h3></Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TrendCard data={percent} isFetching={false} hasError={false} index={0}/>
        </Grid.Column>
        <Grid.Column>
          <TrendCard data={percent} isFetching={false} hasError={false} index={1}/>
        </Grid.Column>
        <Grid.Column>
          <TrendCard data={percent} isFetching={false} hasError={false} index={2}/>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row><h3>data.trend.valueType === {`"integer"`}</h3></Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TrendCard data={integer} isFetching={false} hasError={false} index={3}/>
        </Grid.Column>
        <Grid.Column>
          <TrendCard data={integer} isFetching={false} hasError={false} index={4} />
        </Grid.Column>
        <Grid.Column>
          <TrendCard data={integer} isFetching={false} hasError={false} index={5} />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row><h3>data.trend.valueType === {`"number"`}</h3></Grid.Row>
        <Grid.Row>
      <Grid.Column>
        <TrendCard data={number} isFetching={false} hasError={false} index={6} />
      </Grid.Column>
      <Grid.Column>
        <TrendCard data={number} isFetching={false} hasError={false} index={7} />
      </Grid.Column>
      <Grid.Column>
        <TrendCard data={number} isFetching={false} hasError={false} index={8} />
      </Grid.Column>
      </Grid.Row>
    
      <Grid.Row><h3>data.trend.valueType === {`"currency"`}</h3></Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <TrendCard data={currency} isFetching={false} hasError={false} index={8} />
        </Grid.Column>
        <Grid.Column>
          <TrendCard data={currency} isFetching={false} hasError={false} index={9} />
        </Grid.Column>
        <Grid.Column>
          <TrendCard data={currency} isFetching={false} hasError={false} index={10} />
        </Grid.Column>
      </Grid.Row>
    </Grid>  
  ))
  .add("while fetching", () => (
    <Grid columns={3}>
      <Grid.Row>
        <Grid.Column>
          <TrendCard data={percent} isFetching />
        </Grid.Column>
        <Grid.Column>
          <TrendCard data={percent} isFetching />
        </Grid.Column>
        <Grid.Column>
          <TrendCard data={percent} isFetching />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add("while error", () => (
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>
          <TrendCard data={percent} hasError />
        </Grid.Column>
        <Grid.Column>
          <TrendCard data={percent} hasError />
        </Grid.Column>
        <Grid.Column>
          <TrendCard data={percent} hasError />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add("Partial Data", () => (
    <Grid columns={3}>
      
      <Grid.Row>
        <Grid.Column>
          <TrendCard  isFetching={false} hasError={false} index={1} />
        </Grid.Column>
      </Grid.Row>
      
    </Grid> 
  ))
 ;