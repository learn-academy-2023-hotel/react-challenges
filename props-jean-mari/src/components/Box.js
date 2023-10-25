import React, { useState } from "react"



const Box = () => {
        const [ count, setCount] = useState(0)
        const handleClick = () => {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            setCount(randomValue)
        }
    return (
       <>
        <div onClick={handleClick} className="box-here">{count}
        </div>



       </>
    )

}

export default Box