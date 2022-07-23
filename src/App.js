import React from 'react';
import Header from './UI/Header'
import MenuItems from './components/MenuItems';
import Summary from './components/Summary';
function App() {
  const Items=[
    {
      ItemName:'Sushi',
      ItemDescription:'Finest fish and veggies',
      ItemAmount:'$22.99'
    },
    {
      ItemName:'Schnitzel',
      ItemDescription:'A German Speciality',
      ItemAmount:'$16.50'
    },
    {
      ItemName:'Barbecue Burger',
      ItemDescription:'American,raw,meaty',
      ItemAmount:'$12.99'
    },
    {
      ItemName:'Green Bowl',
      ItemDescription:'Healthy...and green....',
      ItemAmount:'$22.99'
    },
  ]
  return (
    <div>
      <Header />
      <MenuItems items={Items}/>
    </div>
  );
}

export default App;
