import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './Contact.scss'

function Contact () {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className='Contact'>
      <section className='title'>
        <h3 className='header'>Let&apos;s get in touch!</h3>
        <h6 className='description'>
          I&apos;m always down for coffee chats ☕
        </h6>
      </section>
      <section >
        <div className='top-ramp' />
        <div className='background'>
          <Container className='contact-section'>
            <Row>
              <Col>
                <h6 className='contact-description'>
                  If you would like to see some more of my work or are looking
                  to discuss about a project opportunity, feel free to contact
                  me.
                </h6>
                <Form>
                  <Form.Group controlId='formName'>
                    <Form.Label>Your Name (required)</Form.Label>
                    <Form.Control
                      type='name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Your Email (required)</Form.Label>
                    <Form.Control
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId='formSubject'>
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type='subject'
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId='formMessage'>
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Form.Group>
                  <Button className='send-button'>SEND</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='bottom-ramp' />
      </section>
    </div>
  )
}

export default Contact
