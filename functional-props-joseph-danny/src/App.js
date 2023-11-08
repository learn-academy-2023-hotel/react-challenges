import React, { useState } from 'react'
import FoodData from './components/FoodData'

=======
import Cart from './components/Cart'



const App = () => {
  
  const [foodList, setfoodList] = useState([
    { title: "Burger", price: 5.00, click: false},
    { title: "Pizza", price: 4.00, click: false},

    { title: "French Fries", price: 2.00, click: false}
    { title: "Taco", price: 1.00, click: false}
    { title: "Burrito", price: 4.50, click: false}
  ])
=======
    { title: "French Fries", price: 2.00, click: false},
    { title: "Taco", price: 1.00, click: false},
    { title: "Burrito", price: 4.50, click: false}
  ])

  // const [cart, setCart] = useState([])

  const clickedFood = (selectedFood) => {
    foodList[selectedFood].click=true
    // setCart([...cart, foodList[selectedFood]])
    // setfoodList([...foodList])
  }


  return (
    <>
    <h1> Food Menu</h1>
    {foodList.map((food, index) => {
      return (
        <FoodData

        showObj={food}
        key={index}
        likeShow={likeFood}
=======
        foodObj={food}
        key={index}
        clickedFood={clickedFood}

        index={index}
        />
      )
    })}

=======
    <Cart />

    </>
    )
    // I can click a button to select an item I want to order
  }
export default App