import React, { Component } from 'react'
import { Row, Col, Input, Icon, Button} from 'react-materialize'


class Reset extends Component {
  render(){
    return(
      <div>
        <Row className="login_heading">
          <Col s={12} m={12} l={12}>
            <h6 className="center-align" id="login">RESET PASSWORD</h6>
          </Col>
        </Row>

        <Row>
          <Col s={3} m={3} l={3}/>
          <Input className="center-align" s={12} m={12} l={6} label="EMAIL ADDRESS" validate><Icon>email</Icon></Input>
        </Row>

        <Row>
          <div>
            <Col s={2} m={4} l={5}/>
  		      <Button className="center-align truncate" id="reset_butt">RESET PASSWORD</Button>
          </div>
        </Row>



      </div>
    )
  }
}

export default Reset
