import React from "react"

const Menu = (props) => {
    // console.log(props)
const handleClick = () => {
    props.orderedFood(props.index)
}
    return (
        <>
        <h3>{props.item}</h3>
        <p>Price: ${props.price}</p>
        <button onClick = {handleClick}>Order Here</button>
        </>
    )
}

export default Menu