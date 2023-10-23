import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [color, setColor] = useState("white")
  return (
    <>
      <div className="color-box">Color {color}</div>
    </>
  )
}




export default App