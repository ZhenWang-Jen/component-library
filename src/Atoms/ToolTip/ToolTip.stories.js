import React from "react";
import { storiesOf } from "@storybook/react";
import ToolTip from "./ToolTip";

storiesOf("Atoms/ToolTip", module)
.add("a info tooltip", () => <ToolTip name={'info circle'} infoText={'test text'}/>)
;