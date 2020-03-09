import React, { useState } from 'react'

const Test = props => {
  const [test, setTest] = useState('')

  const printState = () => {
    const string = 'hello'
    setTest('testing')
    console.log(test)
  }

  return (
    <>
      {props.title}
      <button onClick={printState}>Click here to print state</button>
      {test}
    </>
  )
}

export default Test
