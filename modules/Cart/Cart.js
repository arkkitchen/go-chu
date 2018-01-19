import React, { Component } from 'react'
import { Row, Col, Table, Thead, tr, th, tbody, Button, Img} from 'react-materialize'


class Cart extends Component {
  render(){
    return(

      <div className="container">

      <Row>
      <Col s={1} m={1} l={1}/>

      <Col s={6} m={6} l={6}>
          <Table className=" table-size bordered highlight responsive-table centered">
            <thead>
              <tr>
                <th className="table-title" data-field="cart">Shopping Cart</th>
                <th className="table-title" data-field="quanity">Quanity</th>
                <th className="table-title" data-field="price">Price</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="table-text"><img className="cart_img" src="images/cart/img1.png"/></td>
                <td className="table-text">Eclair</td>
                <td className="table-text">$0.87</td>
              </tr>
              <tr>
                <td className="table-text"><img className="cart_img" src="images/cart/img2.png"/></td>
                <td className="table-text">Jellybean</td>
                <td className="table-text">$3.76</td>
              </tr>
              <tr>
                <td className="table-text"><img className="cart_img" src="images/cart/img3.png"/></td>
                <td className="table-text">Lollipop</td>
                <td className="table-text">$7.00</td>
              </tr>
            </tbody>
          </Table>
          </Col>

          <Col s={1} m={1} l={1}/>

          <Col s={2} m={2} l={2}>
          <h5 className="center-align" id="order">ORDER SUBTOTAL</h5>
          <h6 id="amount"> $0.00 </h6>


          <a className="link_color" href="/checkout"><Button className="center-align" id="checkOut_butt">CHECK OUT</Button></a>
          <hr className="center-align" id="cart_line"></hr>


          <Button Col s={4} m={4} l={4} className="center-align" id="contShopping_butt">CONTINUE SHOPPING</Button>
          <a href="/" className="link_color"><h5 className="center-align" id="empty_cart"> Empty Cart </h5></a>
          </Col>


      <Col s={1} m={1} l={1}/>

      </Row>


      </div>

    )
  }
}

export default Cart
