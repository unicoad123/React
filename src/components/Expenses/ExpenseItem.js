import React , {useState,setState} from 'react';
import ExpenseDate from './ExpenseDate';
import '../Expenses/ExpenseItem.css';
import Card from '../UI/Card';


const ExpenseItem=(props)=>
{
    const [title1,setTitle]= useState(props.title);
    const[amount1,setExpense]=useState(props.amount);
    const title=()=>
    {
        setTitle('Updated!');
        console.log(title1);
    }
    const expense=()=>
    {
        setExpense('100');
        console.log(amount1);
    
    }
    // const setState=setState();
    // const delete_title=(props)=>
    // {
    //     let filteredArray = this.state.people.filter(item => item !== props.target.value)
    //     this.setState({people: filteredArray});
    // }
 return (
            <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
            <h2>{title1}</h2>
            <div className='expense-item__price'>${amount1}</div>
            <button onClick={expense}>Change Expense</button>
            </div>
            <button onClick={title}>Change Title</button>
            {/* <button onClick={delete_title}>Delete Title</button> */}
            </Card>
        )
}
export default ExpenseItem;