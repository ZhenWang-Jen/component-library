import React from "react";
import { Icon, Breadcrumb } from "semantic-ui-react";

/**
 * 
 * @param {string} prependedValue - product / year
 * @param {string} id - uuidv4 string
 * @param {string} index - the same value as uuidv4 string, but different from id on each element tag which are used for QA testing.
 */

function clickHandler(prependedValue, index) {
  const event = new CustomEvent(`${prependedValue} - ${index}`, {
    bubbles: true
  });
  window.dispatchEvent(event);
}

class Crumb extends React.Component {
  handleClick = () => {
    clickHandler(this.props.val, this.props.index);
  };

  render() {
    return (
      <span onClick={this.handleClick}>
        {(this.props.val !="product") ?
          <Breadcrumb.Divider icon="right chevron" /> : null}      
          <Breadcrumb.Section link id={this.props.id} index={this.props.index ? this.props.index : null}>{this.props.text}</Breadcrumb.Section>
      </span>
    );
  }
};

const BreadCrumbs = props => {
  const { product, year, quarter, month, id } = props;

  return (
    <Breadcrumb size="small" index={id} className={'customized'} id={props.ids != undefined ? props.ids.graphBreadcrumbContainer : null}>
      {product ? <Crumb index={id} id={props.ids.graphBreadcrumbProduct ? props.ids.graphBreadcrumbProduct : null} val="product" text={product} /> : null}
      {year == true ? <Crumb index={id} id={props.ids.graphBreadcrumbYear ? props.ids.graphBreadcrumbYear : null} val="year" text="Yearly" /> : null}
      {quarter == true ? <Crumb index={id} id={props.ids.graphBreadcrumbQuarter ? props.ids.graphBreadcrumbQuarter : null} val="quarter" text="Quarter" /> : null}
      {month == true ? <Crumb index={id} id={props.ids.graphBreadcrumbMonth ? props.ids.graphBreadcrumbMonth : null} val="month" text="Month" /> : null}
    </Breadcrumb>
  );
};

export default BreadCrumbs;