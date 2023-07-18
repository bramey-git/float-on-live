import React from 'react'
import Keys from 'react-simple-keyboard'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'react-simple-keyboard/build/css/index.css'

const KeyBoard = ({ checkLetter }) => {
  return (
    <Row className='keyboard m-0'>
      <Col xs lg='2'></Col>
      <Col lg='8' role='keyboard'>
        <Keys
          theme={'hg-theme-default hg-layout-d classic'}
          onKeyPress={checkLetter}
          layout={{
            default: [
              'q w e r t y u i o p',
              'a s d f g h j k l',
              'z x c v b n m',
            ]
          }}
        />
      </Col>
      <Col xs lg='2'></Col>
    </Row>
  )
}

export default KeyBoard