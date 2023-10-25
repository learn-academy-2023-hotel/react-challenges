import React from 'react'
import Box from './Components/Box'
import "./App.css"
import RandomNum from "./Components/RandomNum"

const App = () => {
  const [diceRoll, setdiceRoll] useState = (0)
  setdiceRoll ()
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