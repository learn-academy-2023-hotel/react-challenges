import React, { useState } from "react"
const Counter = () => {

 const [colour, colorName] = useState (colorArray[0])
 
 const handleClick = () =>{
    // for (let i = 0; i < colorArray.length; i++) {
    //  colorName(colorArray[ i + 1 ])
        const randomNum = (Math.floor(Math.random() * 8))
        console.log("random: ", randomNum)
        colorName(colorArray[randomNum])
     }

 return (
     <div onClick = {handleClick} className ="counter-box">color: {colour}</div>
     )

}
    export default Counter
    
    
    const colorArray= ["white", "red", "orange", "yellow", "green", "blue", "purple", "pink"]
    
    






    //  const handleClick = () => {
    //     colorName(i + 1)
    //  }
     