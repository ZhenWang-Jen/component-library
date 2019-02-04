import React from 'react';
import { Divider } from 'semantic-ui-react';
import './Divider.scss';

const DividerExampleDivider = (props) => <Divider className={props.className? `${props.className}` : null} />;

export default DividerExampleDivider;