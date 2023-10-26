import React, { useState } from "react"
import Menu from "./components/Menu.js"




const App = () => {
  const [OutnIn, setOutnIn] = useState([
    { item: "Double double", price: "6.00"},
    { item: "Fries", price: "3.00"},
    { item: "Shake", price: "4.00"},
    { item: "Cheeseburger", price: "5.00"},
    { item: "Drink", price: "1.00"}
  ])
  const orderedFood = (selectedFood) => {
    console.log(OutnIn[selectedFood])
    OutnIn[selectedFood].price = ""

  }

  return (
    <>
    <h1>Welcome to OutnIn</h1>
    {OutnIn.map((OutnIn, index) => {
    return(
     <Menu  
     Menu={Menu}
     price={price}
     key={index}
     orderedFood={orderedFood}
     index={index}
     />
    )
 })}
</>
  )
}



export default App