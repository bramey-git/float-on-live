import React,{useState,useEffect,useCallback} from 'react'

import Boat from './components/Boat'
import Category from './components/Category'
import Footer from './components/Footer'
import Header from './components/Header'
import KeyBoard from './components/KeyBoard'
import Notification from './components/Notification'
import Puzzle from './components/Puzzle'
import Result from './components/Result'
import Wrong from './components/Wrong'

import Container from 'react-bootstrap/Container'

import './App.css'
import './index.css'

function App() {
  const [category, setCategory] = useState(false)
  const [correctGuesses, setCorrectGuesses] = useState([])
  const [guesses, setGuesses] = useState([])
  const [playable, setPlayable] = useState(false)
  const [puzzle, setPuzzle] = useState({})
  const [wrongGuesses, setWrongGuesses] = useState([])

  function playAgain() {
    setPlayable(false)
    setCategory(false)
    setPuzzle({})
    setGuesses([])
    setCorrectGuesses([])
    setWrongGuesses([])
  }

  const checkLetter = useCallback((letter) => {
    if(puzzle.name.toLowerCase().includes(letter)){
      if(!correctGuesses.includes(letter)){
        const newGuesses = currentLetters => [...currentLetters,letter]
        setCorrectGuesses(newGuesses)
      }
      else{
        // TODO: Add an already guessed notification
      }
    }
    else{
      if(!wrongGuesses.includes(letter)){
        const newGuesses = currentLetters => [...currentLetters,letter]
        setWrongGuesses(newGuesses)
      }
      else{
        // TODO: Add an already guessed notification
      }
    }
    if(!guesses.includes(letter)) {
      const guesses = currentLetters => [...currentLetters,letter]
      setGuesses(guesses)
    }
  }, [correctGuesses, wrongGuesses, guesses, puzzle])

  useEffect(() => {

    const handleKeydown = async event => {
      const {key,keyCode} = event
      if(playable && keyCode >= 65 && keyCode <= 90){
        const letter = key.toLowerCase()
        return checkLetter(letter)
      }
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [correctGuesses, wrongGuesses, guesses, playable, puzzle, checkLetter])

  return (
    <div className='App'>
      <Header playAgain={playAgain} />
      <Container className='p-0' fluid>
        <div className='boat'>
          <Boat wrongGuesses={wrongGuesses} />
        </div>
        {!puzzle.name && <Category category={category} setCategory={setCategory}
                  setPlayable={setPlayable} setPuzzle={setPuzzle}
        />}
        {puzzle.name && <Puzzle puzzle={puzzle} correctGuesses={correctGuesses} />}
        {puzzle.name && <KeyBoard checkLetter={checkLetter}/>}
        <Wrong guesses={guesses} wrongGuesses={wrongGuesses} setWrongGuesses={setWrongGuesses} />
        {puzzle.name && <Result puzzle={puzzle} correctGuesses={correctGuesses}
                                wrongGuesses={wrongGuesses} playAgain={playAgain}
        />}
        <Notification />
      </Container>
      <Footer />
    </div>
  )
}

export default App
