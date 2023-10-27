const Menu = (props) => {
  
    return (
        <>
            

         <p>{props.junkFood.name} ${props.junkFood.$}</p>
         {props.junkFood.picked && <p>Added to order.</p>}
          <button onClick={() => props.foodPicked(props.index)} className='buttons'>
            Add Item
          </button>

        
        </>
    );
    
}
export default Menu