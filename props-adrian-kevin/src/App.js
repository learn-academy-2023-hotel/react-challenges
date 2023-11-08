import React, { useState } from "react"
import "./App.css"
import Dice from "./components/Dice"
import Rolls from "./components/Rolls"
import Button from "./components/Button"

const App = () => {


  const [currentRollDice, setCurrentRollDice] = useState (rollDice)
      var rollDice = Math.floor(Math.random()*(6)+1)  

  const nextRoll = () => {
      setCurrentRollDice(rollDice)
  }


  return (
    <>
    <h1>Dice Roller</h1>
    <div className="outer-box"> 
    <Dice/>
    <Button currentRollDice={currentRollDice} nextRoll={nextRoll} />
    <Rolls/>
    </div>
    </>
  )
}

export default App