import Card from '../UI/Card';
import React,{useState} from 'react';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from './ExpenseList'

import './Expenses.css'


const Expenses=(props)=>
{
    const [filteredYear,setFilteredYear]=useState('2020');
    const filterChangeHandler=(selectedYear)=>
    {
      setFilteredYear(selectedYear);
    }

    const filterdExpense=props.items.filter(expense=>
      {
         return expense.date.getFullYear().toString()===props.filteredYear;
      })
 
     

    return (
        <Card className="expenses">
         <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
         <ExpenseList items={filterdExpense}/>
       </Card>
    );
}

export default Expenses;