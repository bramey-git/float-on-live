import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const WrongLetters = ({ guesses, wrongGuesses }) => {
  return (
    <Container>
      <Row>
        <div className='wrong'>
          {wrongGuesses.length > 0 && <h5 className='m-0'>Incorrect Guesses</h5>}
          {wrongGuesses.map((letter, i) => <span key={i}>{letter}</span>)
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
        <div className='guessed'>
          {guesses.length > 0 && <h5 className='m-0'>Guesses</h5>}
          {guesses.map((letter, i) => <span key={i}>{letter}</span>)
            .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)}
        </div>
      </Row>
    </Container>
  )
}

export default WrongLetters