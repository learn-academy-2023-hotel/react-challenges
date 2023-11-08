import React from "react"

const Dice = (props) => {
    return(
        <div className="box">
            <div className="insideBox">
                <div className="dice">
                    <p className="diceRoll">{props.currentRoll}</p>
                </div>
            </div>
            <div className="insideBox">
            
            </div>
        </div>


    )
}

export default Dice
