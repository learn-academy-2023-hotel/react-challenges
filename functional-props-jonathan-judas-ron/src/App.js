import React, { useState } from "react"
import Menu from "./Components/Menu"
import './App.css'
import Order from "./Components/Order"

const App = () => {
  const [food, setFood] = useState([
    {name: "Pepporoni Pizza", $: 15, picked: false},
    {name: "Carne Asada Tacos", $: 3, picked: false},
    {name: "Burger", $: 6, picked: false},
    {name: "Steak Fries", $: 4, picked: false},
    {name: "1/2 Rack of Ribs", $: 15, picked: false},
    {name: "Chicken Alfredo", $: 10, picked: false}
  ])

  const foodPicked = (selectedFood) => {
    
    food[selectedFood].picked = true
    setFood([...food])
  }

    return (
    <>
      <div className="big-box">
        
        <div className="header"><h1>Mooses Bangin Bistro </h1></div>
        <h3>Menu</h3>
       
        <Order />
        {food.map((junkFood, index) => {
          return (
            <Menu 
            junkFood={junkFood} 
            key={index} 
            index={index}
            foodPicked={foodPicked}/>
            
          )
        })}
      </div>
    </>
        )
    }

export default App