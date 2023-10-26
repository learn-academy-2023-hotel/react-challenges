import React, { useState } from "react"
import Menu from "./Components/Menu"
import Order from "./Components/Order"

const App = () => {
  const [food, setFood] = useState([
    {name: "Pizza", price: 15},
    {name: "Tacos", price: 3},
    {name: "Burger", price: 6}])


    return (
        <>
        {food.map((item, index) => {
          return <Menu item={item} key={index}
        />
      })}
      </>
        )
    }

export default App