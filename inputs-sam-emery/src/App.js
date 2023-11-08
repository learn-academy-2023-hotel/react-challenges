import React, { useState } from 'react'

const App = () => {
  const [word, setWord] = useState ("") 
  const handleChange = (e) => {
    console.log(e.target.value)
    return setWord(e.target.value)
  }
  return (
    <>
    <h1>Walrus Bot</h1>
      <input type="text" value={word} onChange={handleChange}/>
    <div>
      <h3>Good Robot</h3>
        <p>{word}</p>
    </div>
    <div>
      <h3>Bad Robot</h3>
        <input type="text" onChange={BadBot(word)}/>
    </div>
    <div>
      <h3>SnookiBot</h3>
    </div>
    
    
    </>
  )
}

export default App;
