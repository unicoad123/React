import React from 'react';
import classes from './Header.module.css'
import CartItems from './CartItems'
import Image from './Image'



const Header=()=>
{
    return(
    <div>
        <div className={classes.header}>
         <h1>ReactMeals</h1> 
         <CartItems />
         </div>
         <Image />
    </div>
    )
}

export default Header;