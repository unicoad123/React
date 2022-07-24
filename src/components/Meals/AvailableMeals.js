import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
const Items=[
    {
      id:'i1',
      ItemName:'Sushi',
      ItemDescription:'Finest fish and veggies',
      ItemAmount:'$22.99'
    },
    {
        id:'i2',
      ItemName:'Schnitzel',
      ItemDescription:'A German Speciality',
      ItemAmount:'$16.50'
    },
    {
        id:'i3',
      ItemName:'Barbecue Burger',
      ItemDescription:'American,raw,meaty',
      ItemAmount:'$12.99'
    },
    {
        id:'i4',
      ItemName:'Green Bowl',
      ItemDescription:'Healthy...and green....',
      ItemAmount:'$22.99'
    },
  ]
const AvailableMeals=()=>
{
    const mealsList=Items.map(Item => <li><MealItem 
    id={Item.id} 
    name={Item.ItemName} 
    description={Item.ItemDescription}
    price={Item.ItemAmount} /></li>);
   return <section className={classes.meals}>
    <Card>
    <ul>
        {mealsList}
    </ul>
    </Card>
   </section>
}
export default AvailableMeals;