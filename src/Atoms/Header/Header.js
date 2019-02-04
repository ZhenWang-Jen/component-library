import React from 'react'
import { Header } from 'semantic-ui-react';
import './Header.scss';
// import Icon from "../Icon"

const HeaderExampleContent = (props) => (
  <Header size={props.size? `${props.size}`: null} className={props.className? `${props.className}` : null}>
    {props.icon?       
      <img
        src={props.icon}
        alt={`${props.header} Icon`}
      /> : null}
    
    <Header.Content id={props.ids ? props.ids : null}>{props.header}</Header.Content>
    {props.subheader? <Header.Subheader>{props.subheader}</Header.Subheader> : null}
</Header>

)

export default HeaderExampleContent