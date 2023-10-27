import React, { useState } from "react"
import "./App.css"
import Button from "./components/Button.js"

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6]
  const [currentNumber, setCurrentNumber] = useState(numbers[0])

  const nextNumber = () => {
    const totalDice = Math.floor(Math.random(6) )
    console.log(totalDice())

  }

  return (
    <>
      <h1>Random Dice</h1>
      <div className="square-box">
     <Button className="button-icon"/> 
      </div>
    </>
  )
}

export default App