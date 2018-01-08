import React, { Component } from 'react'
import { Col, Row, Icon, Button } from 'react-materialize'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import NavBar from './NavBar'
import Footer from './Footer'

class Routes extends Component {
  constructor(){
    super()
      this.state =
        {bottles: 0}
      this.jessClick=this.jessClick.bind(this)
  }

jessClick(){
  this.setState({
    bottles: this.state.bottles+1
    })
  }

  render(){
    return(
      <div>
        <NavBar jess={this.state.bottles} />
          <Button onClick={this.jessClick} />


        <div>
          {this.props.children}
        </div>


        <Footer/>
      </div>
    )
  }
}

export default Routes
