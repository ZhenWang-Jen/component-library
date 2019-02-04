import React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

storiesOf("Atoms/Icon", module)
    .add("a info icon", () => <Icon name={'info circle'}/>)
    .add("a user icon", () => <Icon name={'user'}/>)
    .add("a handshake icon", () => <Icon name={'handshake'}/>)
    .add("a download icon", () => <Icon name={'download'}/>)
    .add("a sort down icon", () => <Icon name={'sort down'}/>)
    .add("a sort up icon", () => <Icon name={'sort up'}/>)
    .add("a sort icon", () => <Icon name={'sort'}/>)
    .add("a suitcase icon", () => <Icon name={'suitcase'}/>)
    .add("a calendar icon", () => <Icon name={'calendar alternate'}/>)
;