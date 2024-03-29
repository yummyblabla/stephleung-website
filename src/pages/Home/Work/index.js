import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import TitleBar from '../../../components/TitleBar'

import AmazonCardImage from '../../../assets/workCardImages/amazon.png'
import BitesquadCardImage from '../../../assets/workCardImages/bitesquad.png'
import CMGCardImage from '../../../assets/workCardImages/cmg.png'
import ExpediaCardImage from '../../../assets/workCardImages/expedia.png'

import './Work.scss'

function Work () {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [ref])

  return (
    <section id='work' className='Work'>
      <div className='title'>
        <div className='title' ref={ref}>
          <div className='title-with-background' style={{ height }}></div>
          <div className='title title-text-container'>
            <h3 className='header'>Work</h3>
            <h6 className='description'>A showcase of my portfolio</h6>
          </div>
        </div>

        <div className='title titlebar-with-background'>
          <TitleBar />
        </div>
      </div>
      <div className='background'>
        <div className='icon-container'>
          <lord-icon
            style={{ width: 80, height: 80 }}
            trigger='loop'
            colors='primary:#000000,secondary:#ee4a7b'
            src='https://cdn.lordicon.com/wtfdpwey.json'
          />
        </div>

        <Container className='work-section'>
          <Row>
            <Col className='left'>
              <Link to='/work/amazon'>
                <Card className='work-card'>
                  <Card.Img src={AmazonCardImage} />
                  <Card.Body className='card-body'>
                    <Card.Title className='card-title'>Amazon</Card.Title>
                    <Card.Text>
                      Usability tested with Global Sellers on the Automated
                      Pricing Tool. <br />
                      <br />
                      Designed Pricing Dashboard experiences for Sellers to
                      compare inventory pricing with competing products to win
                      the buy box.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to='/work/bitesquad'>
                <Card className='work-card'>
                  <Card.Img src={BitesquadCardImage} />
                  <Card.Body className='card-body'>
                    <Card.Title className='card-title'>Bitesquad</Card.Title>
                    <Card.Text>
                      Tested the App as a first-time user to understand and
                      identity opportunities and pain points for the
                      Pre-Purchase, Purchase, and Post-Purchase flow.
                      <br />
                      <br />
                      Completed a screen-by-screen competitive analysis against
                      other food delivery apps.
                      <br />
                      <br />
                      Designed Bitesquad Rewards to leverage customer retention
                      rates and minimize dropoff rates.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
            <Col className='right'>
              <Link to='/work/expedia'>
                <Card className='work-card'>
                  <Card.Img src={ExpediaCardImage} />
                  <Card.Body className='card-body'>
                    <Card.Title className='card-title'>Expedia</Card.Title>
                    <Card.Text>
                      Designed and launched COVID-19 complient internal
                      questionaire for activity suppliers to fill out, making
                      sure their respective offerings are adhering to
                      Cleanliness standards.
                      <br />
                      <br />
                      Designed and launched Cleanliness filters, banners,
                      messaging, and badges across cross-platform Search Results
                      Pages and Product Detail Pages.{' '}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
              <Link to='/work/cmg'>
                <Card className='work-card'>
                  <Card.Img src={CMGCardImage} />
                  <Card.Body className='card-body'>
                    <Card.Title className='card-title'>
                      Create Music Group
                    </Card.Title>
                    <Card.Text>
                      Incubated Splits App from scratch to beta launch. Created
                      Splits’ design system, app icon, and design mocks adhering
                      to Apple’s Human Interface Guidelines.
                      <br />
                      <br />
                      Designed Splits to gain business exposure and convert
                      prospective music publishers into long term clients.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default Work
