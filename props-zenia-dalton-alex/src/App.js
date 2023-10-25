import React from "react"
import './App.css';
import Title from './components/Title.js'
import Dice from './components/Dice.js'

const App = () => {
  return (
    <>
    <Title />
    <div className="large-box">Dice</div>
    <div className="dice-box"><Dice /></div>
    </>
      
  )
}

export default App;
