import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './Home.scss'

import Recognition from './Recognition'
import CommunityService from './CommunityService'
import DesignThinking from './DesignThinking'
import Work from './Work'

function Home () {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div className='Home'>
      <section id='intro' className='Intro'>
        <Container>
          <Row>
            <Col>
              <h1 className='title'>
                Hello! I’m Steph — a Product Designer currently at{' '}
                <a href='https://www.lululemon.com/'>
                  <span className='lulu'>lululemon</span>
                </a>
                .
              </h1>
            </Col>
          </Row>
        </Container>
      </section>

      <Work />
      <DesignThinking />
      <Recognition />
      <CommunityService />
    </div>
  )
}

export default Home
