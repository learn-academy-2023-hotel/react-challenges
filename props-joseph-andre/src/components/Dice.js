import React from 'react'


const Dice = (diceRoll) => {
  return (
    <>
      <div className = "dice" onClick = {diceRoll}>ROLL
        {/* <button onClick = {diceRoll}>ROLL </button>  */}
      </div>
        
    </>
  )
}

export default Dice
