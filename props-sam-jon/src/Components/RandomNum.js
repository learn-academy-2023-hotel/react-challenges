import React from "react"

const RandomNum = () => {
   let diceRoll = Math.floor(Math.random() * 7)
    return( 
     <>
     <div className='Dice'></div>
       {diceRoll}
     </>
    )
    
}
export default RandomNum