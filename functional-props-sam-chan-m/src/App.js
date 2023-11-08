import React, { useState } from 'react'
import MenuItem from "./components/MenuItem"

const App = () => {
  
  const [menuList, setmenuList] = useState([
    {food: "banana", price: "$0.50", selected: false}, 
  {food: "BBQ Burger", price: "$9.00", selected: false},
  {food: "Slice of Pizza", price: "$4.00", selected: false}, 
  {food: "Pho", price: "$12.50", selected: false}, 
  {food: "Sushi Platter", price: "$25.00", selected: false} 
  ])  

  const pickedFood = (selectedFood) =>{
    menuList[selectedFood].selected = true
    console.log(selectedFood)
  }


  return (
    <>
    <h1>Food Menu</h1>
    {menuList.map((eats, index) => {
      return <MenuItem 
                thisItem={eats} //To access our data in lines 6-11 we created a component which store our data under the variable "MenuItem". within that function we run our props "objects" through a function and want it to return the value of menuList. To access this data we used props.thisItem to access the values stored under eats which contains the object under menuList then use dot notation to acess the other information in the object. i.e. menuList -> food or menuList -> price Review Sectional Func Props
                key={index}
                pickedFood={pickedFood}
                index={index}
              
                
                />
      })}
      
    </>
  )
}

export default App