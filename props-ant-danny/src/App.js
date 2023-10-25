import React from 'react'
import Box from "./components/box.js"
import "./App.css" 
import Numbers from './components/numbers.js'

const App = () => {
  return(
    <>
    <h1>Dice</h1>
    <Numbers side = "1"/>
    </>
  )
}

export default App