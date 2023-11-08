import React, {useState} from "react"
import './App.css';
import FoodData from "./components/FoodData"
import OrderData from "./components/OrderData";

const App = () => {
  const [food, setFood] = useState([
    {foodItem: "Burger", price: "$10", selected: false},
    {foodItem: "Hot dog", price: "$5", selected: false},
    {foodItem: "Salad", price: "$6", selected: false},
    {foodItem: "Pizza slice", price: "$4", selected: false},
    {foodItem: "Ice cream", price: "$3", selected: false},
  ])

// const foodList = (selectedList) => {

// }  

const foodSelect = (selectedFood) => {
  food[selectedFood].selected = true
  // food[selectedFood].foodItem = true
  // food[selectedFood].price = true
  setFood([...food])

}


  return (
    <>
    <div className="selection">
    <h1>Food Order</h1>
    {food.map((food, index) => {
      return (
        <FoodData
        food={food}
        key={index}
        foodSelect={foodSelect}
        index={index}
        />
        )
      })}
      </div>
      <h1>Order</h1>
      <div className="Order">
      {food.filter((item) => item.selected === true).map((value) => {
        return <h2>{value.foodItem}</h2>
      })}

      </div>
    </>
  )
}

export default App;
