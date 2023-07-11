import React from 'react'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Header = ({ playAgain }) => {
  return (
    <Navbar className='App-header'>
      <Container>
        <Navbar.Brand href='/float-on' onClick={playAgain}>Float On</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header