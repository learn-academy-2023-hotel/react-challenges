import React, { useState } from 'react'
import Box from './Components/Box'
import "./App.css"
import RandomNum from "./Components/RandomNum"

const App = () => {
  // const num = () => {
  // setdiceRoll(Math.floor(Math.random() * 7))
  // }

  diceRoll = Math.floor(Math.random() * 7)
  return (
    <>
    <h1>Dice Game</h1>
    <div>
      <Box diceRoll = {diceRoll}/>
    </div>
    </>
  )
}
export default App