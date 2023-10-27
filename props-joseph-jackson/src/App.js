import React, { useState } from "react"
import "./App.css"
import Button from "./components/Button.js"
import Box from "./components/Box.js"

const App = () => {

  const numbers = [1, 2, 3, 4, 5, 6]
  
  const [currentNumber, setCurrentNumber] = useState(numbers[0])

  const nextNumber = () => {
    let diceTotal = Math.floor(Math.random() * 6) 
    setCurrentNumber(numbers[diceTotal])  
  }

  // const translatedWordsArray = arrayOfUserInput.map((eachWord) => {
  // console.log(nextNumber)

  return (
    <>
      <h1>Random Dice</h1>
      <div className="main">
        <div  className="button-ctr">
        <Button currentNumber={currentNumber} nextNumber={nextNumber} />
        </div>
      </div>
      <div className="card">
        
      {numbers.map((rollAmount,) => {
          return <Box numbers={rollAmount} />
        })}

      </div>
    </>
  )
}

export default App