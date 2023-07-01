export function checkWin ({ puzzle, correctGuesses, wrongGuesses }) {
  let status = ''
  if ( puzzle.name ) {
    let match = [...puzzle.name.replaceAll(' ', '').toLowerCase()]
    if( wrongGuesses.length >= 8 ){
      status = 'lose'
    } else if ( match.every(r => correctGuesses.includes(r)) ) {
      status = 'win'
    }
  }
  return status
}
