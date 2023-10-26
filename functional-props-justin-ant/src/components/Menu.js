import React from "react"


const Menu = (props) => {
  


  return (
    <>
     <h3>{props.menuObj.name}   ${props.menuObj.price}</h3>
     <button onClick={addedOrder}>Add to Order</button>
     
    </>
  )
}

export default Menu