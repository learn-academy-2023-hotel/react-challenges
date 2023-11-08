import React, { useState } from 'react';
import Menu from './components/Menu.js'
import './App.css';

const App = () => {
  const [foods, setFoods] = useState([
    { name: "Burger", price: "8.99", purchased: false },
    { name: "Pasta", price: "12.99", purchased: false },
    { name: "Milkshake", price: "6.99", purchased: false },
    { name: "Donut", price: "3.00", purchased: false },
  ])
  const chosenFood = (selectedFood) => {
    console.log(selectedFood)
    console.log(foods[selectedFood])
    console.log(foods[selectedFood].price)
    foods[selectedFood].purchased = true
    setFoods([...foods])
  }
return (
  <>
    <h1>Deliveroo</h1>
    <div>
      {foods.map((food, index) => {
        return <Menu
          food={food}
          key={index}
          chosenFood={chosenFood}
          index={index}
        />
      }

      )}
    </div>
    <h2> Your Cart</h2>
    <div>
      {foods.filter((food) => food.purchased === true)
        .map(foodItem => {
          return <h3>{foodItem.name}</h3>
        })
      }
    </div>
  </>
)
}
export default App
