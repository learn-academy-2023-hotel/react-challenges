import React, { useState } from "react"
import './App.css';
import FoodMenu from "./components/FoodMenu"

const App = () => {
  const [foods, setFoods ] = useState ([
    {name:"burgers", price:"5", clicked: false },
    {name:"chicken nuggets", price:"4", clicked: false },
    {name:"pizza", price:"6", clicked: false },
    {name:"hot-dog", price:"11", clicked: false },
    {name:"fries", price:"12", clicked: false },
    {name:"nachos", price:"13", clicked: false },
    {name:"soda", price:"1", clicked: false },
    
  ])

const orderedFood = (selectedFood) => {


}

  return (
    
    <>
  <h1>AMERICAN FAST FOOD</h1>
  {foods.map((food,index) => {
    return <FoodMenu 
            food={food} 
            key={index} 
            orderedFood = {orderedFood}
            index={index}
            />
  })} 
  </>
  );
}
export default App;
