//import { configure } from '@storybook/react';
import '../src/styles/appStyles.scss';
import 'semantic-ui-css/semantic.min.css';
// function loadStories() {
//   require('../stories/index.js');
//   // You can require as many stories as you need.
// }

// configure(loadStories, module);

import React from 'react';
import { configure, addDecorator, setAddon } from '@storybook/react';
import chaptersAddon from 'react-storybook-addon-chapters';
// import { withConsole } from '@storybook/addon-console';
// import ComponentWrapper from '../src/Components/ComponentWrapper'
import AppWrapper from '../src/Molecules/layout/AppWrapper';

setAddon(chaptersAddon);
// const theme = createMuiTheme(themeConfig);
// addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(story => (
  <AppWrapper>
    {/* <MuiThemeProvider > */}
      {/* <ComponentWrapper> */}
      	{story()}
      {/* </ComponentWrapper> */}
    {/* </MuiThemeProvider> */}
  </AppWrapper>
));

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);