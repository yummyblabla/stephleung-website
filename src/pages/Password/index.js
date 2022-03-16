import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import './Password.scss'
import TitleBar from '../../components/TitleBar'
import Form from 'react-bootstrap/Form'

function Password ({ ProtectedPage }) {
  const [password, setPassword] = useState('')
  const [validated, setValidated] = useState(false)
  const [invalidPassword, setInvalidPassword] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (localStorage.getItem('validated')) {
      setValidated(true)
    }
  }, [])

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setInvalidPassword(false)
  }

  const passwordCheck = (e) => {
    e.preventDefault()
    if (password === 'getinspired') {
      localStorage.setItem('validated', true)
      setValidated(true)
    } else {
      setInvalidPassword(true)
    }
  }

  if (validated) {
    return <ProtectedPage />
  }

  return (
    <section id='password' className='Password'>
      <div className='title'>
        <div className='title title-with-background'>
          <h2 className='title-header'>Look no further</h2>
          <h4 className='description'>
            A password is required to view this project
          </h4>
        </div>
        <div className='title titlebar-with-background'>
          <TitleBar />
        </div>
      </div>
      <div className='background'>
        <Container className='password-section'>
          <Row>
            <Col>
              <div className='icon-container'>
                <lord-icon
                  style={{ width: 400, height: 400 }}
                  trigger='loop'
                  colors='primary:#000000,secondary:#ee4a7b'
                  src='https://cdn.lordicon.com/zbopvjaq.json'
                />
              </div>
              <Form className='password-form' onSubmit={passwordCheck}>
                <Form.Group controlId='formName'>
                  <Form.Label className='form-label'>Enter Password</Form.Label>
                  <Form.Control
                    type='password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  {invalidPassword && (
                    <Form.Text>Incorrect password.</Form.Text>
                  )}
                </Form.Group>
                <Button className='next-button' onClick={passwordCheck}>
                  NEXT
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='bottom-ramp' />
    </section>
  )
}

export default Password

Password.propTypes = {
  ProtectedPage: PropTypes.any
}
