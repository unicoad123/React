import React from 'react';
import classes from './Summary.module.css';

const Summary=()=>
{
    return (<div className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
            Choose your favorite meal from our broad section of available meals and enjoy a delicious
             lunch or dinner at home
        </p>
        <p>
            All our meals are cooked with high-quality ingredients, just-in-time and of course by 
            experience chefs!
        </p>
    </div>)
}

export default Summary;