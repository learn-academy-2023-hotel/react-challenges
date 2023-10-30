import React, { useState } from "react"

const Roll = () =>{
    const [number, setNumber] = useState("1")
    // let numberOptions = ["1", "2", "3", "4", "5", "6", "7"]
    const randNum = Math.floor(Math.random() * 100)

    const handleClick = () => {
        // console.log("random number ", randNum)
        setNumber(randNum)
        }
        return (
            <div onClick={handleClick} className="box">
                 {number}
            </div>
        )
    }
export default Roll