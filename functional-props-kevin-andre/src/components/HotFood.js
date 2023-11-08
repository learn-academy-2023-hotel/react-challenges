import React from 'react'

const HotFood = (props) =>{
    console.log(props)
    const selectedFood = () => {

       props.foodOrder(props.index)

    }

    return(
    <>
      
     {props.showObj.order && <h4>order</h4>}
      {props.showObj.item},{props.showObj.price}
        <button onClick={selectedFood}>Select</button>
       
     </>
    )
}
export default HotFood