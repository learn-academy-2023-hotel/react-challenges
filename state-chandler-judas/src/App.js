import React, {useState} from "react"

const App = () => {
  const [count, setCount] = useState(0)
const handleClick = () => {

}  
return (
  <> 
    <h1>Counter Application</h1> 
    <div onClick={handleClick}>Count {count}</div>
    </>
)
}

export default App