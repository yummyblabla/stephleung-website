import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Recognition.scss'
import TitleBar from '../../../components/TitleBar'

import StimulusImage from '../../../assets/workCardImages/stimulus.png'

function Recognition () {
  return (
    <section id='recognition' className='Recognition'>
      <div className='title'>
        <h3 className='header'>Recognition</h3>
        <h6 className='description'>Awarded concept application</h6>
        <TitleBar />
      </div>
      <Container>
        <Row>
          <Col>
            <h5 className='container-title'>Stimulus</h5>
            <p>
              I conceptualized and invented Stimulus as a gamified daily
              commuting app. It encourages company teamwork in helping Vancouver
              achieve its goals to becoming the Greenest City by 2020.
              <br />
              <br />
              It has won VFS Best Art Direction for Interactive Award, and
              GDC/BC Salazar Awards in 2015.
            </p>
          </Col>
          <Col>
            <img src={StimulusImage} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Recognition
