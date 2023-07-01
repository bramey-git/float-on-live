import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
  return (
    <Navbar className='App-header'>
      <Container>
        <Navbar.Brand href='/'>Float On</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header