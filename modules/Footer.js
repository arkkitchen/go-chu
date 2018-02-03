import React, { Component } from 'react'
import { Footer, Row, Col } from 'react-materialize'

class GoFooter extends Component{
  render(){
    return (
      <div>
      <Footer className="copywrite" copyrights="&copy;GO CHU KITCHEN 2017. ALL RIGHTS RESERVED"

      	links={
      		<ul>
      			<li><a className="footerTab_text grey-text text-lighten-3" href="#!">our mission</a></li>
      			<li><a className="footerTab_text grey-text text-lighten-3" href="#!">about us</a></li>
      			<li><a className="footerTab_text grey-text text-lighten-3" href="#!">contact us</a></li>
      			<li><a className="footerTab_text grey-text text-lighten-3" href="#!">privacy &amp; terms</a></li>
      		</ul>
      	}
      	className='example'
      >
      		<h1 id="newsletter_heading">NEWSLETTER</h1>
          <h3 className="newsletter_text">do the right thing. stay informed.</h3>
          <h3><a href="#!" id="newsletter_subscribe_link">SUBSCRIBE</a></h3>

      </Footer>
      </div>

    )
  }
}

export default GoFooter
