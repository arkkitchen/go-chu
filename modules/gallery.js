import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'


 class Gallery extends Component {
   render(){
     return(

     <div>

     <Row className="KT_heading">
       <Col s={12}>
         <h6 class="center-align" id="kitchen_talk">GALLERY</h6>
       </Col>
     </Row>

     <Row>
       <Col s={1} m={1} l={1}/>

         <Col className="KT_cards" s={12} m={5} l={3}>
          <img className="materialboxed" width="280" height="170" src="images/slide/vibrant_yellow.jpg"/>
         </Col>

         <Col className="KT_cards" s={12} m={5} l={3}>
          <img className="materialboxed" width="280" height="170" src="images/slide/stairs.jpg"/>
         </Col>

           <Col className="KT_cards" s={12} m={5} l={3}>
            <img className="materialboxed" width="280" height="170" src="images/slide/cornered.jpg"/>
           </Col>

     </Row>


     <Row>
       <Col s={1} m={1} l={1}/>

         <Col className="KT_cards" s={12} m={5} l={3}>
          <img className="materialboxed" width="280" height="170" src="images/slide/contrast.jpg"/>
         </Col>

         <Col className="KT_cards" s={12} m={5} l={3}>
          <img className="materialboxed" width="280" height="170" src="images/slide/vibrant_yellow.jpg"/>
         </Col>

         <Col className="KT_cards" s={12} m={5} l={3}>
          <img className="materialboxed" width="280" height="170" src="images/slide/stairs.jpg"/>
         </Col>
     </Row>


  </div>
)
}
}

export default Gallery
