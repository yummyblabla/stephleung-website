import React, { useState, useEffect, useRef } from 'react'

import './DesignThinking.scss'

import TitleBar from '../../../components/TitleBar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const LORD_ICON_STYLE = {
  width: 100,
  height: 100
}

function DesignThinking () {
  const [height, setHeight] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    setHeight(ref.current.clientHeight)
  }, [ref])
  return (
    <section id='designThinking' className='DesignThinking'>
      <div className='title'>
        <div className='title' ref={ref}>
          <div className='title-with-background' style={{ height }}></div>
          <div className='title title-text-container'>
            <h3 className='header'>Design Thinking</h3>
            <h6 className='description'>My creative process</h6>
          </div>
        </div>
        <TitleBar />
      </div>

      <Container className='designthinking-section'>
        <Row>
          <Col className='card-block'>
            <lord-icon
              style={LORD_ICON_STYLE}
              trigger='hover'
              colors='primary:#000000,secondary:#ee4a7b'
              src='https://cdn.lordicon.com/iltqorsz.json'
            />
            <p className='card-title'>01 / Discover</p>
            <h5 className='card-second-title'>Client & Industry Research —</h5>
            <p className='card-description'>
              How do they run their business? Who are their competitors? What
              problems do they solve for their customers and how? What is their
              company culture, reputation and brand personality?
            </p>
          </Col>
          <Col className='card-block'>
            <lord-icon
              style={LORD_ICON_STYLE}
              trigger='hover'
              colors='primary:#000000,secondary:#ee4a7b'
              src='https://cdn.lordicon.com/uqpazftn.json'
            />
            <p className='card-title'>02 / Defined</p>
            <h5 className='card-second-title'>User Research —</h5>
            <p className='card-description'>
              Who are the client’s primary audiences? What are their personality
              types, web behaviours, preferred interaction patterns and needs?
              Run usability tests, develop personas and user journey maps to
              identify ideal scenarios on existing pain points.
            </p>
          </Col>
          <Col className='card-block'>
            <lord-icon
              style={LORD_ICON_STYLE}
              trigger='hover'
              colors='primary:#000000,secondary:#ee4a7b'
              src='https://cdn.lordicon.com/jvucoldz.json'
            />
            <p className='card-title'>03 / Deduce</p>
            <h5 className='card-second-title'>Information Architecture —</h5>
            <p className='card-description'>
              What content could be removed or consolidated? What parts of the
              site work well already? Is new content needed? Test architecture
              with users by card sorting and/or interactive prototypes.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='card-block'>
            <lord-icon
              style={LORD_ICON_STYLE}
              trigger='hover'
              colors='primary:#000000,secondary:#ee4a7b'
              src='https://cdn.lordicon.com/joeivjls.json'
            />
            <p className='card-title'>04 / Determine</p>
            <h5 className='card-second-title'>Wireframing —</h5>
            <p className='card-description'>
              Determine what content should be available on each page. Design
              the content structure, layout and interaction patterns for
              cross-platform device interfaces. Share prototypes with users and
              ask for feedback on assumptions.
            </p>
          </Col>
          <Col className='card-block'>
            <lord-icon
              style={LORD_ICON_STYLE}
              trigger='hover'
              colors='primary:#000000,secondary:#ee4a7b'
              src='https://cdn.lordicon.com/fgkmrslx.json'
            />
            <p className='card-title'>05 / Design</p>
            <h5 className='card-second-title'>Interface Design —</h5>
            <p className='card-description'>
              Building on-brand UI elements based on Human Interface Guidelines.
              Share high fidelity prototype with targeted users to get feedback
              and opinion.
            </p>
          </Col>
          <Col className='card-block'>
            <lord-icon
              style={LORD_ICON_STYLE}
              trigger='hover'
              colors='primary:#000000,secondary:#ee4a7b'
              src='https://cdn.lordicon.com/tvyxmjyo.json'
            />
            <p className='card-title'>06 / Deploy</p>
            <h5 className='card-second-title'>
              Analytics & Usability Testing —
            </h5>
            <p className='card-description'>
              Run follow-up usability tests based on any revelations from
              analytics overtime, previous design assumptions, and user
              complaints.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default DesignThinking
