import React from 'react'
import { checkWin } from '../helpers/checkWin'

import Button from 'react-bootstrap/Button'

const Result = ({ puzzle, correctGuesses, wrongGuesses, playAgain }) => {
  let message = ''
  let hint = ''

  if(puzzle && puzzle.name) {
    if( checkWin({ puzzle, correctGuesses, wrongGuesses }) === 'win' ) {
      message = `Congratulations! You have solved the puzzle and floated to paradise!\n
        The answer was ${puzzle.name}\n`
      hint = `${puzzle.hint}`
    } else if( checkWin({ puzzle, correctGuesses, wrongGuesses }) === 'lose' ) {
      message = `You lost and your ship sank. You will not float on, you will not reach paradise...\n
        The answer was ${puzzle.name}\n`
      hint = `${puzzle.hint}`
    }
  }

  return (
    <div className='result-container' style={message !== '' ? {display:'flex'} : {}}>
      <div className='result'>
        <h2>{message}</h2>
        <h3>{hint}</h3>
        <div className='d-grid replay'>
          <Button size='lg' variant='success' onClick={playAgain}>Play Again</Button >
        </div>
      </div>
    </div>
  )
}

export default Result