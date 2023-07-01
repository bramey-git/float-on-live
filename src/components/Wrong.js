import React from 'react'

import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const WrongLetters = ({ wrongGuesses }) => {
  return (
    <Container>
      <Row className='guessed'>
        <div className='wrong'>
          {wrongGuesses.length > 0 && <p>Incorrect</p>}
          {wrongGuesses.map((letter, i) => <span key={i}>{letter}</span>)
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
      </Row>
    </Container>
  )
}

export default WrongLetters