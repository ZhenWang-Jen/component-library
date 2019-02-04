import React from "react";
import { Icon } from "semantic-ui-react";
import "./Icon.scss";

function Icons(props) {
  return (
      <Icon name={props.name} className={props.className ? props.className : null} />
  );
}

export default Icons;