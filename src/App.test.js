import { render, screen } from '@testing-library/react'

import App from './App'
import Boat from './components/Boat'
import Category from './components/Category'
// import Footer from './components/Footer'
import Header from './components/Header'
import KeyBoard from './components/KeyBoard'
// import Notification from './components/Notification'
import Puzzle from './components/Puzzle'
// import Result from './components/Result'
// import Wrong from './components/Wrong'

// screen.debug()

test('renders App', () => {
  render(<App />);
  const title = screen.getByText(/Float On/i);
  expect(title).toBeInTheDocument();
});

test('renders Header', () => {
  render(<Header />);
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', '/float-on');
});

test('renders Boat', () => {
  render(<Boat wrongGuesses={0} />);
  const boat = screen.getByRole('image');
  expect(boat).toBeInTheDocument();
});

test('lists Categories', () => {
  render(<Category />);
  const categories = screen.getAllByRole('button');
  expect(categories).toHaveLength(6);
});


test('renders Puzzle', () => {
  render(<Puzzle puzzle={{'name': 'testing'}} correctGuesses={''} />);
  const title = screen.getByText(/Guess the letters to solve the puzzle!/i);
  expect(title).toBeInTheDocument();
});

test('renders Keyboard', () => {
  render(<KeyBoard />);
  const keyboard = screen.getByRole('keyboard');
  expect(keyboard).toBeInTheDocument();
});
