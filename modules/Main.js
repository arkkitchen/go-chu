import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Routes from './Routes'
import Home from './Home/Home'
import Cart from './Cart/Cart'


class Main extends Component{
  render(){
    return(
      <div>
        <MuiThemeProvider>
          <Routes>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
          </Routes>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Main
