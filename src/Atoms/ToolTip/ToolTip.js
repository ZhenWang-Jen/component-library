import React from 'react'
import { Icon, Popup } from 'semantic-ui-react'
// import Icon from '../Icon/Icon'
// not sure why can't import icon from local component

const ToolTip = (props) => (
  <Popup 
    trigger={ props.trigger? props.trigger : 
        (<Icon 
          id={props.ids ? props.ids : null}
          name={props.iconName ? props.iconName : 'info circle'} 
    			color={props.iconColor ? props.iconColor : 'grey'}
    			className={props.className? `${props.className}` : null} />
        )} 
    content={props.infoText}
    position="top center"
  />
)

export default ToolTip