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

        <div id="side-nav">
          <ul className="section table-of-contents">
            <li className="side-nav-text"><a href="#introduction">PRODUCTS</a></li>
            <li className="side-nav-text"><a href="#structure">RECEPIES</a></li>
            <li className="side-nav-text"><a href="#initialization">BLOG</a></li>
            <li className="side-nav-text"><a href="#initialization">RETAILERS</a></li>
          </ul>
        </div>



    </div>
    )
  }
}

export default NavBar
