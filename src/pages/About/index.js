import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Typist from 'react-typist'

import './About.scss'

import AboutImage from '../../assets/about/selfprotrait_edited.png'

function About () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className='About'>
      <section id='intro' className='intro'>
        <Container>
          <Row>
            <Col>
              <Typist cursor={{ show: false }}>
                <h1 className='title'>👋 Nice to meet you!</h1>
              </Typist>
              <h2>I design digital experiences.</h2>
            </Col>
          </Row>
        </Container>
      </section>

      <section id='about'>
        <div className='top-ramp' />
        <div className='background'>
          <Container className='about-section'>
            <Row>
              <Col>
                <p>
                  Having previously worked at{' '}
                  <a className='about-link' href='https://www.amazon.com/'>
                    Amazon
                  </a>{' '}
                  and{' '}
                  <a className='about-link' href='https://www.expedia.com/'>
                    Expedia
                  </a>
                  , Steph is a self-starter who loves to solve creative and
                  user-centered problems. She strives to design impactful
                  digital experiences with empathy and accessibility in mind.
                  <br />
                  <br />
                  With a big heart and a small ego, she focuses on her craft and
                  quality. She has concrete experience designing for web,
                  enterprise, as well as mobile apps. With her background in
                  Psychology, Graphic and Digital Design, success to her is
                  being able to create simple solutions for complex problems,
                  which addresses user pain points while increasing customer
                  engagement and obsession.
                </p>
              </Col>
              <Col className='image-container'>
                <img src={AboutImage} className='about-image' />
              </Col>
            </Row>
          </Container>
        </div>
        <div className='bottom-ramp' />
      </section>

      <section>
        <div>
          <Container className='about-section'>
            <Row>
              <Col>
                <p>
                  Outside of work, she enjoys going on scenic photo walks,
                  working on wedding stationary, and freelancing for charities.
                  She can also be found trying out different local food spots
                  around Vancity 🇨🇦, playing darts, and/or staying in with her
                  fur babies outside of the office.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  )
}

export default About
