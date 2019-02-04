
import React from 'react';
import { Responsive,    Button, Container, Divider, Grid, Image, Menu } from 'semantic-ui-react';
import Header from '../../../Atoms/Header';
import "./AppWrapper.scss";
import ResponsiveDrawer from '../ResponsiveDrawer/ResponsiveDrawer'

const AppWrapper = ({ children }) => (
  <ResponsiveDrawer>
    <Responsive {...Responsive.onlyMobile}>
      <Header
        size={'huge'}
        header={'Portrait Orientation on a Mobile Device was Detected'}
        subheader={'In order to view app, please rotate your tablet to landscape orientation or switch to a supported device with a screen width greater than 1024px.'}
      />
    </Responsive>
    <Responsive {...Responsive.onlyTablet}>
      <Header
        size={'huge'}
        header={'Portrait Orientation on a Tablet Device was Detected'}
        subheader={'In order to view app, please rotate your tablet to landscape orientation or switch to a supported device with a screen width greater than 1024px.'}
      />
    </Responsive>
    <Responsive {...Responsive.onlyComputer}>
        <Container style={{ maxWidth: '1200px' }}>{children}</Container>
    </Responsive>
    <Responsive {...Responsive.onlyLargeScreen}>
      <Container style={{ maxWidth: '1200px' }}>{children}</Container>
    </Responsive>
    <Responsive {...Responsive.onlyWidescreen}>
      <Container style={{ maxWidth: '1200px' }}>{children}</Container>
    </Responsive>
  </ResponsiveDrawer>
);

export default AppWrapper;