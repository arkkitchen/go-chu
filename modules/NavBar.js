import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Row } from 'react-materialize'


class NavBar extends Component{
  render(){
    return (

    <div>

      <nav>
        <div>
          <a href="/" className="brand-logo left"><img id="gochu_kitchen_logo" src="images/gochuKitchen_bw_logo.png"/></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li id="search_bar"> <input placeholder="search here" id="search_bar_text" type="text"/> </li>
            <li><NavLink to="/login" className="nav-text1">Login</NavLink></li>
            <li><NavLink to="/cart" className="nav-text">Cart</NavLink></li>
          </ul>
        </div>
      </nav>





    </div>
    )
  }
}

export default NavBar
