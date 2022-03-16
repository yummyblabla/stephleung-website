import React, { useEffect } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './NotFound.scss'
import TitleBar from '../../components/TitleBar'

function NotFound () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <section id='notfound' className='NotFound'>
      <div className='title'>
        <div className='title title-with-background'>
          <h2 className='title-header'>A picture is worth a thousand words</h2>
          <h4 className='description'>Can&apos;t seem to find your page</h4>
        </div>
        <div className='title titlebar-with-background'>
          <TitleBar />
        </div>
      </div>
      <div className='background'>
        <Container className='notfound-section'>
          <Row>
            <Col>
              <div className='icon-container'>
                <lord-icon
                  style={{ width: 400, height: 400 }}
                  trigger='loop'
                  colors='primary:#000000,secondary:#ee4a7b'
                  src='https://cdn.lordicon.com/wxnxiano.json'
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

export default NotFound
