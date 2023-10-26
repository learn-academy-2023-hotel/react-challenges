import React, { useState } from "react"
import Menu from "./components/Menu"
import Order from "./components/Order"


const App = () => {
  const [menuList, setMenuList] = useState([
    { name: "Hamburger", price: 5.95 },
    { name: "Pizza", price: 10.95},
    { name: "Chili", price: 8.95},
    { name: "Ribbs", price: 10.95}
  ])
  
  const addedOrder = (selectedFood) => {
    
  }

  
  return (
    <>
     <h1>The Project</h1>
    {menuList.map((food, index) => {
      return ( 
        <Menu 
          menuObj={food}
          key={index}
          addedOrder={addedOrder}
          index={index}
        
        />
      )
    })}

     <Order />

    </>
  )
}

export default App