import React from 'react'

const Cart = (props) => {
return (
<>
<h1>Cart</h1>
<ol>
    <li>{props.foodObj}</li>
</ol>
</>
)
}

export default Cart