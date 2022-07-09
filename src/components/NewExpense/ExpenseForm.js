import React, { useState } from 'react';

import '../NewExpense/ExpenseForm.css';

const ExpenseFrom=(props)=>
{ 
    // const [UserInput,setUserInput]=useState({enteredTitle:'',
    // enteredamount:'',
    // entereddate:''
    const [enteredamount,setenteredamount]=useState('');
    const [entereddate,setentereddate]=useState('');
    const [enteredTitle,setenteredTitle]=useState('');

    const datehandler=(event)=>
    {
        // setUserInput({...UserInput,
        //     entereddate: event.target.value});
        // setUserInput((prevState)=>
        // {
        //     return {...prevState,entereddate: event.target.value};
        // });
        setentereddate(event.target.value);
    }
    const titleholder=(event)=>
    {
        // setUserInput({
        //     ...UserInput,
        //     enteredtitle:event.target.value});
        //     setUserInput((prevState)=>
        // {
        //     return {...prevState,enteredTitle: event.target.value};
        // });
        setenteredTitle(event.target.value);
    }
    const amountholder=(event)=>
    {
        // setUserInput({
        //     ...UserInput,
        //     enteredamount:event.target.value});
        // setUserInput((prevState)=>
        // {
        //     return {...prevState,enteredamount: event.target.value};
        // });
        setenteredamount(event.target.value);   
    }
    const submitHandler=(event)=>{
        event.preventDefault();

        const expensedata={title:enteredTitle,amount:enteredamount,date:new Date(entereddate)}
        console.log(expensedata);

        props.onSaveExpenseData(expensedata);
        setenteredTitle('');
        setenteredamount('');
        setentereddate('');
    };
    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={titleholder} />
        </div>
        <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' value={enteredamount} min='0.1' step='0.01' onChange={amountholder} />
        </div>
        <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' value={entereddate} min='2019-01-01' max='2022-12-31' onChange={datehandler}/>
        </div>
        </div>
        <div className='new-expense__actions'>
             <button type='submit'>Add Expenses</button>
        </div>
        </form>

);
}

export default ExpenseFrom;     