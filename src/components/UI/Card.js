import React from 'react';
import './Card.css';


const Card=(props)=>
{
      return(
         <div className='list-form'>{props.children}</div>
        
    )
}
export default Card;