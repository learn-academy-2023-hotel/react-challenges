import React from "react"

const FoodMenu = (props) => {
  return (
    <>
        <p>Food Items: {props.food.name};  Price:$ {props.food.price}</p>
        {props.food.clicked && <p>Food Has Been Ordered</p>}
        <button onClick={() => props.orderedFood(props.index)}>Order</button>
    </>
  )
  


}
export default FoodMenu