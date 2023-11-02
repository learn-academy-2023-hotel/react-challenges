import React, {useState} from 'react'
import Header from './Components/Header'
import GoodRobot from './Components/Goodrobot'
import BadRobot from './Components/BadRobot'
import './App.css'
import KanyeRobot from './Components/KanyeBot'


const App = () => {

  const [userInput, setUserInput] = useState ("")

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  return(
    <>
    <Header />
    <input type="text" value={userInput} onChange={handleChange} />

    <GoodRobot userInput = {userInput}/>
    <BadRobot userInput ={userInput}/>
    <KanyeRobot userInput = {userInput}/>


    </>
  )
}


export default App;
