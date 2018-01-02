import React, { Component } from 'react'
import { Col, Row, Icon, Button } from 'react-materialize'
import { NavLink } from 'react-router-dom'

import Footer from './Footer'

class Routes extends Component {
  constructor(){
    super()
  }

  render(){
    return(   
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              <img id="gochu_logo" src="images/gochu_logo.png" alt="go chu"/>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><NavLink to="/" className="nav-text">Home</NavLink></li>
              <li><NavLink to="/cart" className="nav-text">Cart</NavLink></li>
            </ul>
          </div>
        </nav>
        <div>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Routes
