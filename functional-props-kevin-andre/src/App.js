import React, { useState } from 'react'
import HotFood from "./components/HotFood"

const App = () => {

  // let food = [{ item: 'hotdog', price: .99 }, { item: 'hamburger', price: 1.00 }, { item: 'fries', price: .50 }]

  const [foodItems, setfoodItems] = useState([{ item: 'hotdog', price: .99 }, { item: 'hamburger', price: 1.00 }, { item: 'fries', price: .50 }])



  return (
    <>
      <h1> Challenge: Food Ordering App </h1>
      {foodItems.map((value, index) => {
        return <HotFood showObj={value} key={index} />
      })}
    </>  
  )
}

export default App
