import React, { useState } from "react"

const Colorbox = () => {
    const colors = ["white", "red", "orange", "yellow"]
    const [color, setColor] = useState("white")
    const handleClick = () => {
        const randomNum = Math.floor(Math.random()*4)
        console.log("randomNum: ", randomNum)
        // setColor(color ++)

    }
    return(
        <>
           <div onClick={handleClick} className="box">
                {color}
           </div>
        </>
    )
}

export default Colorbox
         // if (color === 0){
        //     return [i]
        // } else if(color === 1) {
        //     return [i + color]
        // } else if(color === 2) {
        //     return [i + color]
        // } else if (color === 3) {
        //     return [i + color]
        // } else if (color === 4) {
        //     return color === 0
        // }

    // const colorWheel = (colors) => {
    //     if (color === 0){
    //         return [i]
    //     } else if(color === 1) {
    //         return [i + color]
    //     } else if(color === 2) {
    //         return [i + color]
    //     } else if (color === 3) {
    //         return [i + color]
    //     }
    // }
