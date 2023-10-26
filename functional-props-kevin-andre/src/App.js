import React, { useState } from 'react'
import HotFood from './components/HotFood'



const App = () => {

  // let food = [{ item: 'hotdog', price: .99 }, { item: 'hamburger', price: 1.00 }, { item: 'fries', price: .50 }]

  const [foodItems, setFoodItems] = useState([
    { item: 'hotdog', price: .99 }, 
    { item: 'hamburger', price: 1.00 }, 
    { item: 'fries', price: .50 },
    { item:'pizza', price: 2.99},
    { item:'spaghetto', price: 0.10},
    { item:'spaghetti', price: 1.99},
    { item:'nachos', price: 3.99},
    { item:'chips', price: .99},
    { item:'cake', price: 2.99},
    { item:'drinks', price: .99},

  ])
 
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
