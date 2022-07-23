import React from 'react';
import classes from './MenuItems.module.css';

const MenuItems=(props)=>
{
    return (<div className={classes.menu}>
        <div>
            <ul>
                <li className={classes.item}>
                    <b>{props.items[0].ItemName}<br /></b>
                    <i>{props.items[0].ItemDescription}<br /></i>
                    {props.items[0].ItemAmount}
                </li>
                <li className={classes.item}>
                    <b>{props.items[1].ItemName}<br /></b>
                    <i>{props.items[1].ItemDescription}<br /></i>
                    {props.items[1].ItemAmount}
                </li>
                <li className={classes.item}>
                    <b>{props.items[2].ItemName}<br /></b>
                    <i>{props.items[2].ItemDescription}<br /></i>
                    {props.items[2].ItemAmount}
                </li>
                <li className={classes.item}>
                    <b>{props.items[3].ItemName}<br /></b>
                    <i>{props.items[3].ItemDescription}<br /></i>
                    {props.items[3].ItemAmount}
                </li>
            </ul>
        </div>
    </div>)
}

export default MenuItems;