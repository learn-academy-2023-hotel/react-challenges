import React from 'react'

const GoodRobot = (props) =>{
    return (
        <>
        <div className = "robot-box">
        <h3> Good Robot</h3>
        I hear you saying {props.userInput}. Is that correct?

        </div>


        </>

    )
}


export default GoodRobot

