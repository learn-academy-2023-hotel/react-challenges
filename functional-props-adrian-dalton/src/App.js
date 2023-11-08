import React, { useState } from "react"
import Menu from "./components/Menu.js"
import Total from "./components/OrderLIst.js"
import "./App.css"


const App = () => {
  const [outNIn, setOutnIn] = useState([
    { item: "Double double", price: 6 },
    { item: "Fries", price: 3 },
    { item: "Shake", price: 4 },
    { item: "Cheeseburger", price: 5 },
    { item: "Drink", price: 1 }
  ])

  const orderedFood = (selectedFood, newPrice) => {
    const updatedMenu = [...outNIn]
    setOutnIn(updatedMenu);
    console.log(outNIn[selectedFood])
  };

// const completedOrder = (total) => {

// }


return (
  <>
    <h1>Welcome to OutnIn</h1>
    {outNIn.map((foodItem, index) => {
      return (
        <Menu
          item={foodItem.item}
          price={foodItem.price}
          key={index}
          orderedFood={orderedFood}
          index={index}
        />
      )
    })}
    <Total />
  </>
)
}



export default App