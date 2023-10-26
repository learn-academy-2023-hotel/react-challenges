import React, { useState } from "react"
import Menu from "./components/Menu.js"




const App = () => {
  const [outNIn, setOutnIn] = useState([
    { item: "Double double", price: "6" },
    { item: "Fries", price: 3 },
    { item: "Shake", price: 4 },
    { item: "Cheeseburger", price: 5 },
    { item: "Drink", price: 1 }
  ])
  // const orderedFood = (selectedFood) => {
  //   console.log("clicked")
  //   outNIn[selectedFood].price = number
  const orderedFood = (selectedFood, newPrice) => {
    // Update the price of the selected food item
    const updatedMenu = [...outNIn];
    updatedMenu[selectedFood].price = newPrice;
    setOutnIn(updatedMenu);
    console.log(outNIn[selectedFood])
  };



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
  </>
)
}



export default App