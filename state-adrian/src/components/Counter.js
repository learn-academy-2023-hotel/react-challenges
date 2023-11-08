import React, { useState } from "react"

const Counter = () => {
    const [color, setColor] = useState("white")
    const colors = ["red", "blue", "gree", "yellow"]
    const handleClick = () => {
        const randomNum = Math.floor(Math.random() * 4)
        console.log("randomNum: ", randomNum)
        setColor()
    }

return (
    <>
    <div onClick={handleClick} className = "counter-box"> {color}</div>
    </>
)
}

export default Counter

