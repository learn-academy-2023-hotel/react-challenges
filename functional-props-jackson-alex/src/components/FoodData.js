import React from "react"

const FoodData = (props) => {
    return (
        <>
        <p>{props.food.foodItem} {props.food.price}</p>
        {props.food.selected && <p>selected!</p>}
        <button onClick={() => props.foodSelect(props.index)}>Select</button>
        </>
    )
}


export default FoodData