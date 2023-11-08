import React, { useState } from "react"

const Changer = () =>{
    const [color, setColor] = useState("white")
    let colorOptions = ["red", "blue", "green", "yellow", "pink", "orange", "black"]
    const handleClick = () => {
        const randNum = Math.floor(Math.random() * 7)
        console.log("random number ", randNum)
        setColor(colorOptions[randNum])
        }
        return (
            <div onClick={handleClick} className="color-box">
                Color {color}
            </div>
        )
    }
export default Changer