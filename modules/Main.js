import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Routes from './Routes'
import Home from './Home/Home'
import Cart from './Cart/Cart'


class Main extends Component{
  render(){
    return(
      <div>
        <Routes>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
        </Routes>
      </div>
    )
  }
}

export default Main