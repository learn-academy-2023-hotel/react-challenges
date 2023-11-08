import React from "react"

const Dice = (props) => {
    return (
      <div className="inner-box"> Dice {props.dice}
      <button className="inner-boxdice" ></button>
      <button onClick={props.nextRoll}>Click Box to Roll</button>
      </div>
    )
  }

export default Dice