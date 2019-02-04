import React from "react";
import { storiesOf } from "@storybook/react";
import Divider from "./Divider";

storiesOf("Atoms/Divider", module)
.add("a standard divider", () => (
    <Divider
    />
  ))
  .add("a customized divider", () => (
    <Divider
      className={'customized'}
    />
  ));