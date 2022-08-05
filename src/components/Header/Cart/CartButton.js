import React from 'react';
import classes from './CartButton.module.css';

const CartButton=(props)=>
{
   return (<div>
    <button className={classes.cart_btn}>Cart</button>
   </div>)
}

export default CartButton;