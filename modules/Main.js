import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Routes from './Routes'
import Home from './Home/Home'
import Cart from './Cart/Cart'
import Products from './Products'
import Checkout from './Cart/Checkout'
import Login from './Login/Login'
import Reset from './Login/Reset'
import SignUp from './Login/SignUp'


class Main extends Component{
  render(){
    return(
      <div>
        <MuiThemeProvider>
          <Routes>
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/products" component={Products}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/login" component={Login}/>
            <Route path="/reset" component={Reset}/>
            <Route path="/signup" component={SignUp}/>
          </Routes>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Main
