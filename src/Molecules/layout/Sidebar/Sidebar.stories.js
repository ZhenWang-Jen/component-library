import React from "react";
import { storiesOf } from "@storybook/react";
import Sidebar from "./Sidebar";

storiesOf("Molecules/Sidebar", module)
.add("a standard Sidebar", () => (
    <Sidebar
    />
  ))
  .add("a customized Sidebar", () => (
    <Sidebar
      className={'customized'}
    />
  ));