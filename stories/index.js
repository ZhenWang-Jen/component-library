import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../src/styles/appStyles.scss';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));