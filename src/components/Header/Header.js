import React from 'react';
import classes from './Header.module.css';
import CartButton from './Cart/CartButton';

const Header=()=>
{
    return(<div>
        <div className={classes.header_nav}>
        <ul>
            <li><a href='./Home'>Home</a></li>
            <li><a href='./Store'>Store</a></li>
            <li><a href='./About'>About</a></li>
        </ul>
        <CartButton />
        </div>
        
    </div>)
}
export default Header;