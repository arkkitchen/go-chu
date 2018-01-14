import React, { Component } from 'react'

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

        <div>
          {this.props.children}
        </div>


        <Footer/>
      </div>
    )
  }
}

export default Routes
