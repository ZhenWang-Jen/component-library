import React from 'react'
import { Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SidebarExampleVisible = () => (
  <Sidebar
    as={Menu}
    animation='overlay'
    icon='labeled'
    vertical
    visible
    borderless
  >
    <Menu.Item link>Overview</Menu.Item>

    <Menu.Item active href='//google.com' target='_blank'>
      Executive
    </Menu.Item>

    <Menu.Item active href='//google.com' target='_blank'>
      Participation
    </Menu.Item>

    <Menu.Item active href='//google.com' target='_blank'>
      Brokers
    </Menu.Item>
    
  </Sidebar>
)

export default SidebarExampleVisible