import React, {useState} from "react"
import './App.css';
import FoodData from "./components/FoodData"

const App = () => {
  const [food, setFood] = useState([
    {foodItem: "Burger", price: "$10"},
    {foodItem: "Hot dog", price: "$5"},
    {foodItem: "Salad", price: "$6"},
    {foodItem: "Pizza slice", price: "$4"},
    {foodItem: "Ice cream", price: "$3"},
  ])

const foodSelect = (selectedFood) => {
  
}

  return (
    <>
    <h1>Food Order</h1>
    {food.map((food, index) => {
      return (
        <FoodData
        food={food}
        key={index}
      />)
    }) }
    </>
  )
}

export default App;
