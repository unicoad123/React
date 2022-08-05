import React from 'react';
import classes from './MusicList.module.css'
const MusicList=(props)=>
{
    return(<div>
        <div className={classes.music_content}>
            <div id={props.id}>
                    <h3>{props.album}</h3>
                    <div className={classes.image_container}>
                        <img className={classes.prod_images} src={props.imageUrl} alt={props.title} />
                    </div>
                    <div className={classes.prod_details}>
                        <span>$<span>{props.price}</span></span>
                        <button className={classes.shop_item_button} type='button'>ADD TO CART</button>
                    </div>
                </div>
                </div>
    </div>)
}
export default MusicList;