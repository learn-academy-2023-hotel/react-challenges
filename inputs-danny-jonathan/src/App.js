import React, { useState } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import Yeezy5000 from './components/Yeezy5000'

const App = () => {
  const [userInput, setUserInput] = useState("")

  const handleChange = (e) => {
    console.log(userInput)
    setUserInput(e.target.value)
  }
return (
<>
<h1>Chat D&R</h1>
<input type="text" 
onChange={handleChange}
/>
<h1>Good Robot</h1>
<GoodRobot 
value={userInput}/>
<h1>Bad Robot</h1>
<BadRobot />
<h1>yeezy 5000 Robot</h1>
<Yeezy5000 />
</>
)
}

export default App
