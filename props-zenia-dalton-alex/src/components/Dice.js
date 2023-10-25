import React from "react"

const Dice = (props) => {
    const rollNum = Math.floor(Math.random() * 6) + 1
    console.log(props)

    return (
        // <h3>Number: {diceRoll}</h3>
        <div onClick = {props.rollNum} className = "large-box" > {props.diceRoll} </div>
        // console.log(rollNum)
    )
}
export default Dice