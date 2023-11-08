import React from "react";

const Menu = (props) => {
    const handleClick = () => {
        props.chosenFood(props.index)
    }

    return (
        <>
            <div> <p>Food Item: {props.food.name} {props.food.price}</p>
                {props.food.purchased && <p>Added To Cart!</p>}
                <button onClick={handleClick} >Add To Cart</button>
            </div>





        </>
    )
}

export default Menu