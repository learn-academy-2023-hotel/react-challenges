import React, { useState } from "react"
import Dice from "./components/Dice"
import "./App.css"

const App = () => {
  const possibleRolls = [1, 2, 3, 4, 5, 6]

  const [currentRoll, setCurrentRoll] = useState(possibleRolls[0])

  const nextRoll = () => {
    let randomNum = possibleRolls[Math.floor(Math.random() * possibleRolls.length)]
    setCurrentRoll(possibleRolls[randomNum])
  }

  return(
    <>
      <h1>Dice Roller</h1>
      <Dice />

    </>
  )
}

export default App
