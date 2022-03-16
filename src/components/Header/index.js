import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Header.scss'

import { ReactComponent as LinkedinLogo } from '../../assets/linkedin.svg'
import { ReactComponent as InstagramLogo } from '../../assets/instagram.svg'

function Header () {
  return (
    <Navbar collapseOnSelect expand='sm' className='Header'>
      <Nav.Link as={NavLink} to='/' className='navLink' id='no-underline'>
        <h5 className='HeaderName'>Steph Leung</h5>
      </Nav.Link>

      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse
        id='responsive-navbar-nav'
        className='justify-content-end'
      >
        <Nav>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/about' className='navLink'>
              <p className='link'>About</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to='/contact' className='navLink'>
              <p className='link'>Contact</p>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://www.instagram.com/x5t3ph/'>
              <InstagramLogo className='social-icon' />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='https://www.linkedin.com/in/stephcyleung/'>
              <LinkedinLogo className='social-icon' />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
