import React, { useState } from 'react';
import "./App.css"
import Dice from "./Components/Dice"
import Roll from "./Components/Roll"


const App = () => {
  // const rolls = [1, 2, 3, 4, 5, 6]
  const [number, setNumber] = useState([0])
  var rollDice = Math.floor(Math.random()*(6)+1)
  const nextRoll = () => {
    setNumber(rollDice)
  }
  return (
    <>
    <h1>Welcome to Our Dice Roller</h1>
    <div className = "dice-box">
    <Dice rollNum={number}/>
    <Roll rollNum={nextRoll}/>
  
      




    </div>
    </>
  )
}

export default App
