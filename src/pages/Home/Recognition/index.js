import React, { useState, useEffect, useRef } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Recognition.scss'
import TitleBar from '../../../components/TitleBar'

import StimulusImage from '../../../assets/workCardImages/stimulus.png'
import { Link } from 'react-router-dom'

function Recognition () {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [ref])

  return (
    <section id='recognition' className='Recognition'>
      <div className='title'>
        <div className='title' ref={ref}>
          <div className='title-with-background' style={{ height }}></div>
          <div className='title title-text-container'>
            <h3 className='header'>Recognition</h3>
            <h6 className='description'>Awarded concept application</h6>
          </div>
        </div>
        <div className='title titlebar-with-background'>
          <TitleBar />
        </div>
      </div>
      <div className='background'>
        <Container className='recognition-section'>
          <Row>
            <Col>
              <h5 className='container-title'>Stimulus</h5>
              <p>
                I conceptualized and invented Stimulus as a gamified daily
                commuting app. It encourages company teamwork in helping
                Vancouver achieve its goals to becoming the Greenest City by
                2020.
                <br />
                <br />
                It has won VFS Best Art Direction for Interactive Award, and
                GDC/BC Salazar Awards in 2015.
              </p>
            </Col>
            <Col>
              <Link to='community/stimulus'>
                <img className='work-card' src={StimulusImage} />
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Recognition
