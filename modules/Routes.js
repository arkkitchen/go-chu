import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'

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
            <ul className="section table-of-contents">
              <li className="side-nav-text"><a href="#introduction">PRODUCTS</a></li>
              <li className="side-nav-text"><a href="#structure">RECEPIES</a></li>
              <li className="side-nav-text"><a href="#initialization">BLOG</a></li>
              <li className="side-nav-text"><a href="#initialization">RETAILERS</a></li>
            </ul>
          </Col>
          <Col id="blank_space" s={1} m={1} l={1}/>
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
