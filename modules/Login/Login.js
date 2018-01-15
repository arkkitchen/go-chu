import React, { Component } from 'react'
import { Row, Col, Input, Icon, Button} from 'react-materialize'


class Login extends Component {
  render(){
    return(
      <div>
        <Row className="login_heading">
          <Col s={12}>
            <h6 className="center-align" id="login">LOGIN</h6>
          </Col>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="EMAIL ADDRESS" validate><Icon>email</Icon></Input>
        </Row>
        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="PASSWORD" validate ><Icon>fingerprint</Icon></Input>
        </Row>

        <Row>
          <div>
            <Col s={3} m={4} l={5}/>
  		      <Button className="center-align" id="sign-in_butt">SIGN IN</Button>
          </div>
        </Row>


          <div>
          <Col s={1} m={1} l={3}/>
            <a href="/reset"><h3 className="center-align pw_signup">FORGOT PASSWORD?</h3></a>
          </div>

          <div>
          <Col s={12} m={11} l={12}/>
            <h3 className="center-align pw_signup">DONT HAVE AN ACCOUNT? <a href="/signup">SIGN UP!</a></h3>
          </div>

          <Row>
            <div>
              <Col s={1} m={3} l={4}/>
              <Button className="center-align" id="sign-in_FB_butt">FACEBOOK SIGN IN</Button>
            </div>
          </Row>

      </div>
    )
  }
}

export default Login
