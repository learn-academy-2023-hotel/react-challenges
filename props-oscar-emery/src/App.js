import React, { useState } from 'react';
import "./App.css"
import Dice from "./Components/Dice"


const App = () => {
  const rolls = [1, 2, 3, 4, 5, 6]
  const [number, setNumber] = useState(rolls[0])
  const diceRoll = () => {
    
  }
  return (
    <>
    <h1>Welcome to Our Dice Roller</h1>
    <Dice rollNum={number}/>
    <div className = "dice-box">
    {/* {number.map((number, index) => {
      return <Dice rollNum={number} key={index}/> } */}
    {/* )} */}
      




    </div>
    </>
  )
}

export default App
