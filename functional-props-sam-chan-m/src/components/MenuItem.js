import React from 'react'

const MenuItem = (props) => {
    return (
            <>
        <h3>{props.thisItem.food + ' ' + props.thisItem.price}</h3>
        <button onClick={() => props.pickedFood(props.index)}></button>

        
    
            </>
    )
}

export default MenuItem
