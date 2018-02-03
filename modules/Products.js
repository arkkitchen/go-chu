import React, { Component } from 'react'
import { Row, Col, Card, CardTitle, Input } from 'react-materialize'


 class Products extends Component {
   render(){
     return(

     <div>

     <Row className="KT_heading">
       <Col s={12}>
         <h1 className="product_heading center">GO CHU SAUCE</h1>
         <h3 className="product_text center">keep your taste buds happy. go chu&#39;s got you.</h3>
       </Col>
     </Row>

     <Row>

       <Col s={2} m={2} l={3}>
       <img className="bottle_img materialboxed" src="images/products/bottle1.jpg"/>
       </Col>

       <Col s={5} m={5} l={4}/>

       <Col s={5} m={5} l={3}>
				<h3 className="product_quanity">QUANITY</h3>
        <Input type='select'>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </Input>
		   </Col>

       <Col l={1}>
       <h3 className="product_quanity">$8</h3>
       </Col>


     </Row>
  </div>
)
}
}

export default Products
