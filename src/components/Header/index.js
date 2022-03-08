import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Header.scss'

function Header () {
  return (
    <Navbar collapseOnSelect expand='sm'>
      <Navbar.Brand>
        <Nav.Link as={NavLink} to='/' style={{ color: 'black' }}>
          <h2 className='HeaderName'>Steph Leung</h2>
        </Nav.Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse
        id='responsive-navbar-nav'
        className='justify-content-end'
      >
        <Nav>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/about'>
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/contact'>
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://instagram.com'>
              Instagram
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://linkedin.com'>
              Linkedin
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
