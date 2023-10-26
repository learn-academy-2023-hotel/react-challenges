import React from "react"

const Menu = (props) => {
    console.log(props)
    return (
        <>
        <h3>Select Food Items</h3>
        {props.item.price}
        </>
    )
}

export default Menu