import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Col, Row, Carousel } from 'react-materialize'


class NavBar extends Component{
  render(){
    return (

    <div>

      <nav>
        <div>
          <a href="/" className="brand-logo left"><img id="gochu_kitchen_logo" src="images/gochu_kitchen_logo.png"/></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li id="search_bar"> <input placeholder="search here" id="search_bar_text" type="text"/> </li>
            <li><NavLink to="/login" className="nav-text">Login</NavLink></li>
            <li><NavLink to="/cart" className="nav-text">Cart</NavLink></li>
          </ul>
        </div>
      </nav>

      <Row>
        <Col id="side-nav" s={12} m={3} l={2} hide-on-small-only>
          <ul className="section table-of-contents">
            <li className="side-nav-text"><a href="#introduction">PRODUCTS</a></li>
            <li className="side-nav-text"><a href="#structure">RECEPIES</a></li>
            <li className="side-nav-text"><a href="#initialization">BLOG</a></li>
            <li className="side-nav-text"><a href="#initialization">RETAILERS</a></li>
          </ul>
        </Col>

        <Col id="blank_space" s={1} m={1} l={1}/>
          <Col s={9} m={8} l={9} className="carousel carousel-slider center" data-indicators="true">
            <Carousel className="slideImg" options={{ fullWidth: true }} images={[
              'images/samp2.jpg',
              'images/samp3.jpg',
              'images/samp1.jpg',
              'images/samp4.jpg'
            ]} />
          </Col>

        </Row>

    </div>
    )
  }
}

export default NavBar
