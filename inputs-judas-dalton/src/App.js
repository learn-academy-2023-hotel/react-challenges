import { useState } from 'react'
import './App.css';

const App = () => {
const [userInput, setUserInput] = useState("")

const handleChange = (e) => {
console.log(e.target.value)
}
return (
  <>
  <h1>Robo Active Listening</h1>
  <input type="text" value={userInput} onChange={handleChange} />

  </>
)
}
export default App;
