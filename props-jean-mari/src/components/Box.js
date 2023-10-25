import React, { useState } from "react"



const Box = () => {
        const [ count, setCount] = useState(0)
        const [ history, setHistory] = useState([])        
        const handleClick = () => {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            setCount(randomValue)
            setHistory([... history , randomValue])

        }
        return (
            <>
            <div className="first-box">
              <div onClick={handleClick} className="box-here"> {count}
              </div>
              <div className="box-here"> 
                <ul>
                  {history.map((item, index) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
              </div>
            </>
          )
        }



export default Box