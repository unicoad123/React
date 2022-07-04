import React from 'react';
import '../NewExpense/NewExpense.css';
import ExpenseFrom from './ExpenseForm';
const NewExpense=(props)=>
{
    const saveExpenseDataHandler=(enteredExpensedata)=>
    {
        const expenseData={
            ...enteredExpensedata,
            id:Math.random().toString()
        };
         props.onAddExpense(expenseData);
    }
    return (
        <div className='new-expense'>
              <ExpenseFrom onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    )

}

export default NewExpense;