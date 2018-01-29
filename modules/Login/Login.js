import React, { Component } from 'react'
import { Row, Col, Input, Icon, Button} from 'react-materialize'

class Login extends Component {
  constructor(){
    super()
    this.state = {
      user_name: null,
      password: null,
    }
    this.login_user = this.login_user.bind(this)
  }
  login_user() {
    // TODO: validate signin user data
    console.log(this.state);
    fetch('http://localhost:3000/', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({u: this.state.user_name})
    }).then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    })
  }

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
          <Input className="center-align" s={12} m={12} l={6} label="EMAIL ADDRESS" validate onChange={(evt) => {this.setState({user_name: evt.target.value})}}><Icon>email</Icon></Input>
        </Row>
        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="PASSWORD" validate onChange={(evt) => {this.setState({password: evt.target.value})}}><Icon>fingerprint</Icon></Input>
        </Row>

        <Row>
          <div>
            <Col s={3} m={4} l={5}/>
  		      <Button className="center-align" id="sign-in_butt" onClick={this.login_user}>SIGN IN</Button>
          </div>
        </Row>


          <div>
          <Col s={1} m={1} l={4}/>
            <a href="/reset"><h3 className="center-align pw_signup">FORGOT PASSWORD?</h3></a>
          </div>

          <div>
          <Col s={12} m={11} l={12}/>
            <h3 className="center-align pw_signup">DONT HAVE AN ACCOUNT? <a href="/signup" id="sign_up_text">SIGN UP!</a></h3>
          </div>

          <Row>
            <div>
              <Col s={2} m={3} l={4}/>
              <Button className="center-align" id="sign-in_FB_butt">FACEBOOK SIGN IN</Button>
            </div>
          </Row>
      </div>
    )
  }
}

export default Login
