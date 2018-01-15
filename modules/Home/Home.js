import React, { Component } from 'react'
import { Row, Col, Card, CardTitle } from 'react-materialize'


class Home extends Component {
  render(){
    return(
      <div>

      <Row className="KT_heading">
        <Col s={12}>
          <h6 className="center-align" id="kitchen_talk">KITCHEN TALK</h6>
        </Col>
      </Row>

      <Row>
        <Col s={1} m={1} l={1}/>

          <Col className="KT_cards" s={12} m={6} l={3}>
              <Card className="KT_card_bar" header={<CardTitle reveal image={"images/KT/KT_samp1.png"} waves='light'/>}

                reveal={<p className="KT_card_content">“Being famous won’t be easy because I’ll have to sing in front of a lot
                of people, and I get nervous. But I already sang in front of eleven people in music
                class. And I made a video on my mom’s phone that eighty-two people watched on
                Instagram.”</p>}>

                <p className="KT_card_title center-align"><a href="#">Almost Famous</a></p>
              </Card>
            </Col>

          <Col className="KT_cards" s={12} m={6} l={3}>
              <Card className="KT_card_bar" header={<CardTitle reveal image={"images/KT/KT_samp2.png"} waves='light'/>}

                reveal={<p className="KT_card_content">“I was late to the delivery room when she was born. But as soon as I walked in,
                her eyes started tracking me. Like she knew I was her Dad. Even the nurses were laughing about
                it. She’s always been my road dog. She never went through a ‘teenage phase.’ She never stopped
                wanting to spend time with me. We could always talk about the problems she was having at school.
                Even as she got older, we’d still go to the park on Saturdays or find some exotic place to eat in
                Brooklyn. It’s a little tough now that she’s away at college. I miss spending time with her. But
                I trust her completely and I want her to enjoy these years. I just hope that when she falls in
                love with some dude, I’ll still get to see her.” </p>}>

                <p className="KT_card_title center-align"><a href="#">Parenting 101</a></p>
              </Card>
            </Col>

            <Col className="KT_cards" s={12} m={6} l={3}>
              <Card className="KT_card_bar" header={<CardTitle reveal image={"images/KT/KT_samp3.png"} waves='light'/>}

                reveal={<p className="KT_card_content">“When I was a child, it was up to me to feed our family because my father couldn’t work.
                I had a job at a motorcycle repair shop. Everyone would sit at home and wait for me to make money.
                Once we almost ran out of food. We didn’t have a single rupee and there was nothing to eat. I could
                handle it, but I couldn’t bear the thought of my baby sister going to sleep hungry. I sat at my shop
                all day, praying for a customer. But nobody came. Then just as night was falling, a man drove up with
                a puncture in his tire. The price of the repair was three rupees. But when I was finished, the man handed
                me twenty rupees and drove away. I was able to buy two kilograms of rice. My entire life turned around that
                day. My shop became very busy. We were never hungry again. Even today I think about that man. I never saw his
                face. He changed not just my life, but the lives of my entire family. I wonder who he was. Sometimes
                I think it was God himself.” (Mumbai, India) </p>}>

                <p className="KT_card_title center-align"><a href="#">Thank You, Man</a></p>
              </Card>
            </Col>

      </Row>


      <Row>
        <Col s={1} m={1} l={1}/>

          <Col className="KT_cards" s={12} m={6} l={3}>
            <Card className="KT_card_bar" header={<CardTitle reveal image={"images/KT/KT_samp4.png"} waves='light'/>}

              reveal={<p className="KT_card_content">“My mother’s friends say that I’m just like her. She died of breast cancer when I
              was two years old. I had to grow up fast because my father was always working and seldom around.
              I was doing my own laundry at the age of seven. I figured the puberty thing out on my own. During
              high school, I’d leave for entire weekends without my dad even asking where I’d been. Then one year
              at Thanksgiving, my aunt told me that my mother had left me a letter and a video. She got so angry
              when I told her I’d never gotten it. I confronted my Dad about it, and he said that he ‘remembered
              something like that.’ He drove me to a safety deposit box—but the box was empty. He couldn’t
              remember what happened. He had one job. One thing that would mean more to me than anything else,
              and he couldn’t do it. My mom’s friends always tell me: ‘She would be so proud of you,’ or ‘She
              was so in love with you. But that’s not the same. It’s not the same as something directly from her.
              Something she made especially for me. Just one thing that actually says: ‘This is how much
              I love you.’”</p>}>

              <p className="KT_card_title center-align"><a href="#">That One Thing</a></p>
            </Card>
          </Col>

          <Col className="KT_cards" s={12} m={6} l={3}>
            <Card className="KT_card_bar" header={<CardTitle reveal image={"images/KT/KT_samp5.png"} waves='light'/>}

              reveal={<p className="KT_card_content">“My mom made me a birthday dress!” </p>}>

              <p className="KT_card_title center-align"><a href="#">Birthday Dress</a></p>
            </Card>
          </Col>

          <Col className="KT_cards" s={12} m={6} l={3}>
            <Card className="KT_card_bar" header={<CardTitle reveal image={"images/KT/KT_samp6.png"} waves='light'/>}

              reveal={<p className="KT_card_content">“A really bad divorce triggered the first and only manic episode of my life.
              It was my body’s attempt to avoid feeling any pain. I was sleeping three hours a night
              and doing handstands in the morning. I did a whole lot of writing. I’m a contractor–
              so I taught myself all sorts of plastering techniques and developed an entire series
              of finishes. I worked as a carpenter for twelve hours every day. Eventually I pushed
              myself to the point where I injured my shoulder, and the doctor told me that I couldn’t
              work anymore. It forced me to slow down, confront the illness, and make friends with that
              part of myself. Now I’m on a mood stabilizer. I’m not operating in a triggered state anymore.
              And I’m back to work, but this time with a team of people to help me carry the load.” </p>}>

              <p className="KT_card_title center-align"><a href="#">My Life</a></p>
            </Card>
          </Col>
      </Row>


      </div>
    )
  }
}

export default Home
