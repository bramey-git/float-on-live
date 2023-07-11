import React from 'react'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

import categoryList from '../lists/categoryList'
import puzzleList from '../lists/puzzleList'

const Category = ({ category, setCategory, setPuzzle, setPlayable }) => {
  const findPuzzle = (c) => {
    const puzzles = puzzleList.filter(puzzle => {
      return puzzle.CategoryId === c.category.id
    })
    setPuzzle(puzzles[Math.floor(Math.random() * puzzles.length)])
    setCategory(true)
    setPlayable(true)
  }

  return (
    <Row className='puzzle-box m-0'>
      <Col xs lg='3'></Col>
      <Col lg='6'>
        <div>
          <h1>Select a Category</h1>
          {categoryList.map((category) => {
            return (
              <div className='d-grid m-1' key={category.id}>
                <Button
                  variant='primary'
                  className='category'
                  size='md'
                  onClick={() => findPuzzle({category:category})}
                >{category.title}
                </Button>
              </div>
            )
          })}
        </div>
      </Col>
      <Col xs lg='3'></Col>
    </Row>
  )

}

export default Category