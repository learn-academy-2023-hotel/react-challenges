import React from 'react'


const FoodData = (props) => {

return (
<>
{/* <h3>{props.showObj.title}</h3> */}
{/* <button onClick={handleClick}>Food</button> */}
=======
import Cart from './Cart'

const FoodData = (props) => {
const handleClick = () => {
    props.clickedFood(props.index)
}
return (
<>
<h3>{props.foodObj.title}</h3>
<h3>{props.foodObj.price}</h3>
<h4>{props.foodObj.click}</h4>
<button onClick={handleClick}>Order</button>

</>
)
}

export default FoodData