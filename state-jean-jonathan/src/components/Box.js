import React, { useState } from "react"


const Box = () => {
    // Make an array of colors
    const allColors = ["red", "orange", "yellow", "blue", "green"]
    // create random index based on the length of the array
    // Set state variable and set the method
    const [colorIndex, setColorIndex] = useState(0)
    const colorClicker = () => {
        const randomNum = Math.floor(Math.random() * allColors.length) 
        setColorIndex( randomNum)
    }
      return (
        <>
        <div className="box">
            
        
            <div onClick={colorClicker}>{allColors[colorIndex]}

        </div>
        
        </div>

        </>
    )
}
export default Box

