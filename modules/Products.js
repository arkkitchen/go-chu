import React, { Component } from 'react'
import { Row, Col, Button, Card, CardTitle, Input } from 'react-materialize'


 class Products extends Component {
   render(){
     return(

       <div>

       <Row className="KT_heading">
         <Col id="boxes1" l={12}>
           <h1 className="product_heading center">GO CHU SAUCE</h1>
           <h3 className="product_text center">keep your taste buds happy. go chu&#39;s got you.</h3>
         </Col>
       </Row>

       <Row>
         <Col s={1} m={3} l={5}>
         <img className="bottle_img materialboxed" src="images/products/bottle1.jpg"/>
         </Col>

         <Col s={1} m={1} l={2}/>

         <Col s={11} m={8} l={5} className="container_add2Cart right">
    				<h3 className="product_quanity ">QUANITY</h3>

            <Input className="right" type='select'>
            <option value='1' id="placeholder_text">1</option>
            <option value='2' id="placeholder_text">2</option>
            <option value='3' id="placeholder_text">3</option>
            </Input>

            <h1 className="product_quanity right">$8</h1>

            <a className="link_color" href="/cart"><Button className="center-align" id="checkOut_butt">CHECK OUT</Button></a>

          </Col>

         </Row>
      </div>
    )
  }
}

export default Products
