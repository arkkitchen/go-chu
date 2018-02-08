import React, { Component } from 'react'
import { Row, Col, Input, Button} from 'react-materialize'


class SignUp extends Component {
  render(){
    return(
      <div>
        <Row className="login_heading">
          <Col s={12}>
            <h6 className="center-align placeholder_text" id="login">SIGN UP</h6>
          </Col>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className=" placeholder_text" s={12} m={12} l={6} placeholder="FIRST NAME" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className=" placeholder_text" s={12} m={12} l={6} placeholder="LAST NAME" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className=" placeholder_text" s={12} m={12} l={6} placeholder="EMAIL ADDRESS" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className=" placeholder_text" s={12} m={12} l={6} placeholder="PASSWORD" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className=" placeholder_text" s={12} m={12} l={6} placeholder="CONFIRM PASSWORD" validate></Input>
        </Row>

        <Row>
          <div>
            <Col s={2} m={4} l={5}/>
  		      <Button className=" placeholder_text truncate" id="reset_butt">SIGN UP</Button>
          </div>
        </Row>



      </div>
    )
  }
}

export default SignUp
