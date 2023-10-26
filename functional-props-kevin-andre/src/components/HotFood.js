import React from 'react'

const HotFood = (props) =>{
    console.log(props)
    const selectedFood = () => {
        return
       
       
    }

    return(
    <>
     
      {props.showObj.item},{props.showObj.price}
        <button onClick={selectedFood}>Select</button>
       
     </>
    )
}
export default HotFood