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
{/* bad robot to say BLAB 1 charachter for every character that is in userInput
start with userInput, .split() every letter out of the words typed in userInput
change letters to BLAB then .join() them together
charAT(i) each letter then */}
<BadRobot value={userInput} />
<h1>yeezy 5000 Robot</h1>
<Yeezy5000 value={userInput}/>
</>
)
}

export default App
