import React from 'react';
import MusicList from './MusicList';
import Card from '../UI/Card'

const productsArr = [
    {
    id:'p1',
    album:'Album1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        id:'p2',
        album:'Album2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        id:'p3',
        album:'Album3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        id:'p4',
        album:'Album4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]
const Contents=(props)=>
{
        const musiclist=productsArr.map((music)=>
        (
          <MusicList 
          key={music.id}
          id={music.id}
          album={music.album}
          title={music.title}
          price={music.price}
          imageUrl={music.imageUrl}
          />
        ));
    return(<div>
          <Card>{musiclist}</Card>
    </div>)
}

export default Contents;