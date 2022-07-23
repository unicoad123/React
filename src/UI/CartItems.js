import React from 'react';
import classes from './Cart.module.css'
import { BsFillCartFill } from "react-icons/bs";
const CartItems=()=>
{
    return (
        <div className={classes.cart}>
        <BsFillCartFill className={classes.icon} />
         <h4>Your Cart</h4>
         <div className={classes.cart_number}>
         <h4>0</h4>
         </div>
         </div>
    )
}
export default CartItems;