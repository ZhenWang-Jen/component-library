/**
 * ToggleDataSet Component
 * Toggle between Avg. Premiums and Participation
 */

import React from "react";
import { Button } from "semantic-ui-react";
import './ToggleDataSet.scss';

class ToggleDataSet extends React.Component {
  constructor(props) {
    super(props);
  
  }
  handleClick = () => (console.log("Click handler in props is not available. Please add them."));

  render() {
    if (this.props.dataSetUrls.length > 0) {
      return (
        <Button.Group size="small">
          {this.props.dataSetUrls.map((setUrl, index) => (
            <Button
              id={this.props.ids ? this.props.ids+`-${index+1}` : null}
              key={index}
              active={this.props.currentUrl === setUrl.url ? true : false}
              name={setUrl.url}
              className={this.props.className? `${this.props.className}` : null} 
              onClick={this.props.handleClick ? this.props.handleClick : this.handleClick}
              style={{ borderLeft: index > 0 ? 'none' : '1px solid #E5E5E5' }}
            >
              {setUrl.title}
            </Button>
          ))}
        </Button.Group>
      );
    } 
    return;
  }
}

export default ToggleDataSet;