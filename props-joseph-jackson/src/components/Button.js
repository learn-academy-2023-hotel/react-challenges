import React from 'react'

const Player = (props) => {
  console.log(props)
  return (
    <>
      <h3>Roll: {props.currentNumber}</h3>
      <button onClick={props.nextNumber}>Button</button>
      <hr />
    </>
  )

  
}

export default Player