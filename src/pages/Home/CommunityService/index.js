import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import './CommunityService.scss'

import TitleBar from '../../../components/TitleBar'
import VPLCardImage from '../../../assets/workCardImages/vpl.png'
import YMCACardImage from '../../../assets/workCardImages/ymca.png'
import CPCHCardImage from '../../../assets/workCardImages/cpch.png'

function CommunityService () {
  return (
    <section id='communityService' className='CommunityService'>
      <div className='title'>
        <div className='title title-with-background'>
          <h3 className='header'>Community Service</h3>
          <h6 className='description'>Giving back to the community</h6>
        </div>
        <TitleBar />
      </div>

      <Container className='communityservice-section'>
        <Row>
          <Col>
            <Link to='/community/ymca'>
              <Card className='work-card'>
                <Card.Img src={YMCACardImage} />
                <Card.Body className='card-body'>
                  <Card.Title className='card-title'>
                    YMCA - Old Colony
                  </Card.Title>
                  <Card.Text>
                    Created design components, various page mockups, and UI kit
                    based off of YMCA’s master brand guide.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
            <Link to='/community/vpl'>
              <Card className='work-card'>
                <Card.Img src={VPLCardImage} />
                <Card.Body className='card-body'>
                  <Card.Title className='card-title'>
                    Vancouver Public Library
                  </Card.Title>
                  <Card.Text>
                    Proposed to rearrange a better checkout experience to
                    efficiently meet user needs and reduce congestion near the
                    Library entrance.
                    <br />
                    <br />
                    Defined personas and conducted user surveys for this
                    initiative.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col>
            <Link to='/community/cpch'>
              <Card className='work-card'>
                <Card.Img src={CPCHCardImage} />
                <Card.Body className='card-body'>
                  <Card.Title className='card-title'>
                    Canuck Place Children’s Hospice
                  </Card.Title>
                  <Card.Text>
                    Wireframed, designed, prototyped, and launched the Gift of
                    Love Gala microsite from scratch.
                    <br />
                    <br />
                    My concept was to use imagery of fireflies in a mason jar to
                    symbolize and draw parallels with the mission of savouring
                    life and to celebrate living in the moment.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default CommunityService
