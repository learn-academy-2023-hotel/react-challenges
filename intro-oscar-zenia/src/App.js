import React, { useState } from 'react';
import GoodRobot from './components/GoodRobot';
import './App.css';
import BadRobot from './components/BadRobot';
import KanyeBot from './components/KanyeBot';

const App = () => {
  const [name, setName] = useState("") 
  const handleChange = (e) => {
    setName(e.target.value)
  const randomizeWords = ('') ; {
    for(let i = 0; i < setName.length; i++) {
        name + "BLA";
    }

  }
  
  console.log(name)
  console.log(randomizeWords)
    }
  return (
    <>
    <h1>Robo Active Listening</h1>
    <input 
    type="text" 
    placeholder="Type something..."
    onChange={handleChange}
    value={name}
    />
    
    <GoodRobot name={name}/>
    <BadRobot name={name} />
    <KanyeBot name={name} />

    </>
  )
}

export default App
