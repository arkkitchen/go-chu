import React, { Component } from 'react'
import { Row, Col, Icon, SideNav, SideNavItem, Button } from 'react-materialize'

import NavBar from './NavBar'
import Footer from './Footer'


class Routes extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        <NavBar/>
        <Row>
          <Col s={1} m={1} l={1}>
            <ul className="section table-of-contents hide-on-med-and-down">
              <li><a href="/products">PRODUCTS</a></li>
              <li><a href="#structure">RECEPIES</a></li>
              <li><a href="#initialization">BLOG</a></li>
              <li><a href="#initialization">RETAILERS</a></li>
            </ul>
          </Col>
          <Col id="blank_space" s={1} m={1} l={1}/>

        <Col s={1} m={1} l={1}>
        <SideNav
          trigger={<Button id="button_menu" className="menu_icon hide-on-large-only"><Icon large>menu</Icon></Button>}
        	options={{ closeOnClick: true }}
        	>
            <SideNavItem subheader></SideNavItem>
            	<SideNavItem href='/products'>PRODUCTS</SideNavItem>
            	<SideNavItem href='#!second'>RECEPIES</SideNavItem>
            	<SideNavItem href='#!third'>BLOG</SideNavItem>
            	<SideNavItem href='#!third'>RETAILERS</SideNavItem>
            </SideNav>
        </Col>


          <Col s={9} m={9} l={9} id="main-body">
            {this.props.children}
          </Col>
        </Row>
        <Footer/>
      </div>
    )
  }
}

export default Routes
