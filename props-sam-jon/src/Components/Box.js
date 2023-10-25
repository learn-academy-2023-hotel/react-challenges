import React from 'react'
import RandomNum from './RandomNum'

const Box = (props) => {
    let num =  RandomNum 
    return (
        <>
        <div className='Box'>
            <>{ props.diceRoll }</>
            
        </div>
    
        </>
    )
}
export default Box