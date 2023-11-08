import React, { useState } from "react"
import GoodRobot from "./components/GoodRobot"

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
   console.log(e.target.value)
  }

  return (
    <>
    <h1>Robo Listener</h1>
    <h3>Say something here:</h3>
   <input type='text' value={userInput} onChange={handleChange} />

    <p>Good Robot</p>
    <GoodRobot />

    <p>Bad Robot</p>


    <p>Bob</p>


    </>
  )
}