import React, {useState} from "react"

const Counter = () => {

    
    const [textOptions, setTextOptions] = useState(["white", "red", "blue", "yellow", "green", "purple"])
    const [currentTextIndex, setCurrentTextIndex] = useState (0)
    // const [boxColor, setBoxColor] = useState (["red", "blue", "yellow", "green", "purple", "white"])
    const handleClick = () => {
        setCurrentTextIndex ((currentTextIndex + 1) % textOptions.length)
        // setBoxColor (textOptions[currentTextIndex])
    }
    // const getRandomColor = () => {
    //     const colors = ["white", "red", "blue", "yellow", "green", "purple"]
    //     const randomIndex = Math.floor(Math.random() * colors.length)
    //     return colors[randomIndex]
    // }
    return (
        <div onClick={handleClick} className="counter-box" style = {{backgroundColor: textOptions[currentTextIndex]}}>
        <p>{textOptions[currentTextIndex]}</p>
        </div>
    )
}

export default Counter