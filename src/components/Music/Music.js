import React from 'react';
import classes from './Music.module.css';
//import MusicList from './MusicList';
import Contents from './Contents';

const Music =(props)=>
{
    return(<div className={classes.music}>
          <Contents />
    </div>)
}

export default Music;