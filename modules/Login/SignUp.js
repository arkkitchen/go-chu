import React, { Component } from 'react'
import { Row, Col, Input, Button} from 'react-materialize'


class SignUp extends Component {
  render(){
    return(
      <div className="body">
        <Row className="login_heading">
          <Col s={12} m={12} l={12}>
            <h6 className="center-align" id="login">SIGN UP</h6>
          </Col>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="FIRST NAME" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="LAST NAME" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="EMAIL ADDRESS" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="PASSWORD" validate></Input>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="CONFIRM PASSWORD" validate></Input>
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

export default SignUp
