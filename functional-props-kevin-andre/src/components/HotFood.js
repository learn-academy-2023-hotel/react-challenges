import React from 'react'

const HotFood = (props) =>{
    console.log(props)

    return(
    <>
        {props.showObj.item} 
        {props.showObj.price}
       
    </>
    )
}
export default HotFood