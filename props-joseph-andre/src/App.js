import React from "react"
import Dice from "./components/Dice"
import Roll from "./components/Roll"
import "./App.css"


const App = () => {
  return (
    <>
     <h1>TESTTEST</h1>
    <div className = "app">
    <div className = "cards"> 
      <Dice title = "Dice"/> 
    
    
    
    
    
    
    
    
    
    </div>
    </div>
    

    </>
  )
}

export default App



// -1st create abox with black border white bgrnd using App.css file 
//  make a box within a box

// -2nd make the box clickable to roll dice (math.Random) = generate an number from 0-1 in decimal point but combined with math.Floor it round it up to the first integers we multiply math.Floor by 6
// App.js will be our inner mechanism containing the RNG

// -3 roll log will be on a seperate roll.js file that will only record the output of the dice.js 