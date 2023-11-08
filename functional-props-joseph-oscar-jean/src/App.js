import React, { useState } from "react"
import './App.css';
import FoodMenu from "./components/FoodMenu"
import YourOrder from "./components/YourOrder";

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
  console.log(selectedFood) // --> logs the id of the movie clicked
    console.log(foods[selectedFood]) // --> logs the clicked movie object
    console.log(foods[selectedFood].clicked) // --> logs the clicked movie watched value
    foods[selectedFood].watched = true // updates the watched value to true
    setFoods([...foods]) // sets the state to reflect the new changes

}

  return (
    
    <>
    <h1>AMERICAN FAST FOOD</h1>
      {foods.map((food,index) => {
      return <FoodMenu 
            food={food} 
            key={index} 
            orderedFood = {orderedFood}
            index={index}/>
    }  )   }
    <h2>YOUR ORDER </h2>
      {foods.filter((foods[0]) => {
      return 
            
      
    
    

      
           
            
  
   </>

  );
}
export default App;
