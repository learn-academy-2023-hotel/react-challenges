import React, { useState } from "react"
const colorChange = () => {
 const [color, setColor] = useState(0)
 const handleClick = () => {
  const setColor= ["red", "orange", "yellow", "green", "blue", "purple", "pink"]
 }

return (
  <div onClick = {handleClick} className="color-box">
    color
  </div>
)
}
export default Color