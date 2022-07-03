import React from 'react';
import '../NewExpense/NewExpense.css';
import ExpenseFrom from './ExpenseForm';
const NewExpense=()=>
{
    return (
        <div className='new-expense'>
              <ExpenseFrom />
        </div>
    )

}

export default NewExpense;