import ExpenseItem from "../Expenses/ExpenseItem";
import Card from '../UI/Card';
import React,{useState} from 'react';
import ExpenseFilter from "./ExpenseFilter";

import './Expenses.css'
import { format } from "path";

const Expenses=(props)=>
{
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=(selectedYear)=>
    {
      setFilteredYear(selectedYear);
    }
    return (
        <Card className="expenses">
         <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem 
         title={props.items[0].title} 
         amount={props.items[0].amount} 
         date={props.items[0].date}  
       />
      <ExpenseItem  
         title={props.items[1].title} 
         amount={props.items[1].amount} 
         date={props.items[1].date}  
         />
         
      <ExpenseItem 
         title={props.items[2].title} 
         amount={props.items[2].amount} 
         date={props.items[2].date}  
         />
      <ExpenseItem  
         title={props.items[3].title} 
         amount={props.items[3].amount} 
         date={props.items[3].date}  
         />
      <ExpenseItem 
         title={props.items[4].title} 
         amount={props.items[4].amount} 
         date={props.items[4].date}  
         />
         </Card>
    );
}

export default Expenses;