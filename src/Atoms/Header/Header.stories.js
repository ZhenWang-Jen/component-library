import React from "react";
import { storiesOf } from "@storybook/react";
import Header from "./Header";

storiesOf("Atoms/Header", module)
.add("a customized, bold header", () => (
  <Header
    header={'Example Header'}
    className={'customized bold'}
  />
))
.add("a huge header as small screen warning", () => (
  <Header
    size={'huge'}
    header={'Portrait Orientation on Tablet or a Mobile Device was Detected'}
    subheader={'In order to view app, please rotate your tablet to landscape orientation or switch to a supported device with a screen width greater than 1024px.'}
  />
))
.add("a customized, lighter header as error message", () => (
  <Header
    header={'No Results'}
    subheader={'Please change your parameter.'}
    className={'customized'}
  />
))
.add("a customized, lighter header with icon", () => (
  <Header
    header={'Employer Groups'}
    className={'customized'}
    icon={'handshake'}
    subheader={'PSA Employer Groups consists of a searchable and exportable list of Employer Groups.'}
  />
))
;