import React from "react"

const Dice = () => {
    const number = Math.floor(Math.random() * 6) + 1
    
    return (
        <button>onclick</button>
        console.log(number)
    )
}
export default Dice