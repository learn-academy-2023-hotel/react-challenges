import React from "react"

const Button = (props) => {
    console.log(props)
    return (
      <>
      <button onClick={props.nextRoll}>Roll Dice</button>
      </>
    )
  }

export default Button