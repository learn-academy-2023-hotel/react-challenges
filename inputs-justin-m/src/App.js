import React, { useState } from "react"
import GoodRobot from "./components/GoodRobot"
import BadRobot from "./components/BadRobot"


function App() {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <h1>Robot Listening Center</h1>
      <div>Say something: 
        <input 
          type="text"
          onChange={handleChange}
          value={name}
        />
      </div>

      <GoodRobot name={name}/>

      <BadRobot name={name}/>


      <p>
        <h3>Random Robot</h3>
        I'm gonna let you finish but Beyonce is XYZZY
      </p>

    </>
  )
}

export default App;
