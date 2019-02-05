
import React, { Component } from 'react';
import { Segment, Responsive,  Menu,  Button, Container, Divider, Grid, Image } from 'semantic-ui-react';
import Header from '../../../Atoms/Header';
import Sidebar from '../Sidebar';
import "./AppWrapper.scss";

export default class AppWrapper extends Component {

  constructor(props) {
    super(props);

    this.state = {}
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
      <Responsive {...Responsive.onlyMobile}>
        <Menu borderless stackable>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>
        </Menu>
        <Header
          size={'huge'}
          header={'Portrait Orientation on a Mobile Device was Detected'}
          subheader={'In order to view app, please rotate your tablet to landscape orientation or switch to a supported device with a screen width greater than 1024px.'}
        />
      </Responsive>
      
      <Responsive {...Responsive.onlyTablet}>
        <Menu borderless>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>
        </Menu>
        <Header
          size={'huge'}
          header={'Portrait Orientation on a Tablet Device was Detected'}
          subheader={'In order to view app, please rotate your tablet to landscape orientation or switch to a supported device with a screen width greater than 1024px.'}
        />
      </Responsive>

      <Responsive {...Responsive.onlyComputer}>
        <Menu borderless>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>
        </Menu>
        
        <Sidebar/>
            
        <div className="mainPage">
          <div className="maxWidthPage">{this.props.children}</div>
        </div>
      </Responsive>

      {/* <Responsive {...Responsive.onlyLargeScreen}>
        <Menu borderless>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>
        </Menu>
        
        <Sidebar/>
          <div className="mainPage">
          <div className="maxWidthPage">{this.props.children}</div>
           </div>
      </Responsive>

      <Responsive {...Responsive.onlyWidescreen}>
        <Menu borderless>
          <Menu.Item>
            <img src='https://react.semantic-ui.com/logo.png' />
          </Menu.Item>
        </Menu>
        
        <Sidebar/>
           <div className="mainPage"><h1>wide</h1>
           <div className="maxWidthPage">{this.props.children}</div>
           </div>
      </Responsive> */}
    </React.Fragment>
    )
  }
}