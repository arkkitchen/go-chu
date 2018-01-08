import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Row } from 'react-materialize'


class NavBar extends Component{
  render(){
    return (

    <div>

      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            <img id="gochu_logo" src="images/web_logo.png" alt="go chu"/>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/" className="nav-text">{this.props.jess}</NavLink></li>
            <li><NavLink to="/cart" className="nav-text">Cart</NavLink></li>
          </ul>
        </div>


          <Row>
            <Col s2={6} m={6} l={6}/>
              <input placeholder="search here" id="search_bar_text" type="text"/>
          </Row>

      </nav>
    </div>
    )
  }
}

export default NavBar
