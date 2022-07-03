import React from 'react';

import '../NewExpense/ExpenseForm.css';

const ExpenseFrom=()=>
{
    const datehandler=(event)=>
    {
        console.log(event.target.value);
    }
    const titleholder=(event)=>
    {
        console.log(event.target.value);
    }
    const amountholder=(event)=>
    {
        console.log(event.target.value);
    }
    return (<form>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' onChange={titleholder} />
        </div>
        <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min='0.1' step='0.01' onChange={amountholder} />
        </div>
        <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min='2019-01-01' max='2022-12-31' onChange={datehandler}/>
        </div>
        </div>
        <div className='new-expense__actions'>
             <button type='submit'>Add Expenses</button>
        </div>
        </form>

);
}

export default ExpenseFrom;     