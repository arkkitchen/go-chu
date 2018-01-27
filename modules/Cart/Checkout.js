import React, { Component } from 'react'
import { Row, Col, Input, Button} from 'react-materialize'


class CheckOut extends Component {
  render(){
    return(
      <div>
        <Row className="login_heading">
          <Col s={12} m={12} l={12}>
            <h6 className="center-align" id="login">CHECKOUT</h6>
          </Col>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="FULL NAME" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="ADDRESS 1" validate></Input>
        </Row>
        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="ADDRESS 2" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="CITY" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="STATE" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="ZIP" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="COUNTRY" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="PHONE NUMBER" validate></Input>
        </Row>

        <Row>
          <div>
            <Col s={2} m={4} l={5}/>
  		      <Button className="center-align truncate" id="reset_butt">SIGN UP</Button>
          </div>
        </Row>
      </div>
    )
  }
}

export default CheckOut
