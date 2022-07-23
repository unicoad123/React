import React from 'react';
import image from '../UI/meals.jpg';
import classes from './Image.module.css';



const Image=(props)=>
{
    return (<div className={classes.main_image}>
        <img src={image} alt='meals' />
    </div>)
}

export default Image
