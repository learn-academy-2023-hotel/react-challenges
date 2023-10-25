import React, { useState } from "react"
import './App.css';
import Title from './components/Title.js'
import Dice from './components/Dice.js'

const App = () => {
  const [diceRoll, setDiceRoll] = useState(0) 
  // const rollNum = Math.floor(Math.random() * 6) + 1
    // let nextRoll = rollNum 
  const rollNum = () => {
    setDiceRoll(Math.floor(Math.random() * 6)  + 1 )
  }
    
  return (
    <>
    <Title />
    <Dice diceRoll = {diceRoll} rollNum = {rollNum} />
    {/* <button onClick = {nextRoll}>{rollNum}</button> */}
    </>
      
  )
}

export default App;
