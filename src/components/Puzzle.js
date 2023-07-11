import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmog } from '@fortawesome/free-solid-svg-icons'

const smog = <FontAwesomeIcon icon={faSmog} />

/* TODO: Read and print special characters (', -, ' ') and numbers) */

const Puzzle = ({ puzzle, correctGuesses }) => {
  return (
    <Container>
      <Row className='puzzle-box'>
        <Col xs lg='2'></Col>
        <Col lg='8'>
          <h1 className='puzzle-head'>Guess the letters to solve the puzzle!</h1>
          <h4 className='m-3'>
            If the puzzle is not solved in eight (8) guesses or less, your
            ship will sink, and you will not float on to paradise.</h4>
          <div className='puzzle'>
            {puzzle.name.split('').map( (letter, i) => {
              if (letter === ' ') {
                return (
                  <span className='letter space' key={i}>
                    {letter}
                  </span>
                )
              }
              else {
                return (
                  <span className='letter' key={i}>
                    {correctGuesses.includes(letter.toLowerCase()) ? letter : smog}
                  </span>
                )
              }
            })}
          </div>
          <div className='hint'>
            <p>{puzzle.hint}</p>
          </div>
        </Col>
        <Col xs lg='2'></Col>
      </Row>
    </Container>
  )
}

export default Puzzle