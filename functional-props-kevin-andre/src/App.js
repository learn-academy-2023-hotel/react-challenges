import React, { useState } from 'react'
import HotFood from './components/HotFood'



const App = () => {

  // let food = [{ item: 'hotdog', price: .99 }, { item: 'hamburger', price: 1.00 }, { item: 'fries', price: .50 }]

  const [foodItems, setFoodItems] = useState([

    { item: 'hotdog', price: .99 , order: false},
    { item: 'hamburger', price: 1.00 , order: false},
    { item: 'fries', price: .50 , order: false},
    { item:'pizza', price: 2.99, order: false},
    { item:'spaghetto', price: 0.10, order: false},
    { item:'spaghetti', price: 1.99, order: false},
    { item:'nachos', price: 3.99, order: false},
    { item:'chips', price: .99, order: false},
    { item:'cake', price: 2.99, order: false},
    { item:'drinks', price: .99, order: false},

  ])
    const foodOrder = (selectedItem) => {
    foodItems[selectedItem].order = true
    setFoodItems([...foodItems])
  }

 
  return (
    <>
      <h1> Challenge: Food Ordering App </h1>
      {foodItems.map((value, index) => {
        return <HotFood showObj={value} key={index} index = {index} />
      })}
    </>
  )

}

export default App
