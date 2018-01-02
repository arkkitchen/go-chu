import React, { Component } from 'react'
import { Footer } from 'react-materialize'

class GoFooter extends Component{
  render(){
    return (
      <Footer copyrights="&copy; GO CHU 2017. ALL RIGHTS RESERVED">
        <hr></hr>
        <h5 className="white-text">NEWSLETTER</h5>
        <hr></hr>
      </Footer>
    )
  }
}

export default GoFooter