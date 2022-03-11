import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './UnderConstruction.scss'
import TitleBar from '../../components/TitleBar'

function UnderConstruction () {
  return (
    <section id='construction' className='Construction'>
      <div className='title'>
        <div className='title title-with-background'>
          <h2 className='title-header'>Under Construction</h2>
          <h4 className='description'>Please check back later</h4>
        </div>
        <div className='title titlebar-with-background'>
          <TitleBar />
        </div>
      </div>
      <div className='background'>
        <Container className='construction-section'>
          <Row>
            <Col>
              <div className='icon-container'>
                <lord-icon
                  style={{ width: 400, height: 400 }}
                  trigger='loop'
                  colors='primary:#000000,secondary:#ee4a7b'
                  src='https://cdn.lordicon.com/cvpqeffe.json'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='bottom-ramp' />
    </section>
  )
}

export default UnderConstruction
