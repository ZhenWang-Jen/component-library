import React from "react";
import { storiesOf } from "@storybook/react";
import { Grid } from 'semantic-ui-react'
import SmallTable from './SmallTable';

import smallTableMock from "./mock/smallTableMock";
import smallTableMapGraphMock from "../ComparisonCard/mock/comparisonMapChart";
import Colors from "../../utils/colors";

storiesOf("Components/SmallTable", module)
.add("Line and Bar charts", () => (
	<Grid style={{margin: 0}}>
		<Grid.Column width={4} style={{padding: 0}}>
			<SmallTable
				title={smallTableMock.title}
				data={smallTableMock.data} 
				color={Colors.defaultGraph.tableColors}/>
		</Grid.Column>
	</Grid>
))
.add("Map chart", () => (
	<Grid style={{margin: 0}}>
		<Grid.Column width={4} style={{padding: 0}}>
			<SmallTable
				chartType={'Map'}
				title={smallTableMapGraphMock.tableTitle}
				data={smallTableMapGraphMock.tableData} 
				color={Colors.overviewExecutiveRegionalLocation.tableColors}
			/>
		</Grid.Column>
	</Grid>
));