import React,{useState} from 'react';
import './User.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const User=(props)=>
{
    //const users={name:'Deepthi',age:30};
    const [enteredUsername,setEnteredUsername]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error, setError] = useState();
        const userdatahandler=(event)=>
        {
            event.preventDefault();
            if(enteredUsername.trim().length===0||enteredAge.trim().length===0)
            {
                setError({
                    title: 'Invalid input',
                    message: 'Please enter a valid name and age (non-empty values).',
                  });
                return;
            }
            if(+enteredAge<1)
            {
                setError({
                    title: 'Invalid age',
                    message: 'Please enter a valid age (> 0).',
                  });
                return;
            }
            props.onAddUser(enteredUsername,enteredAge);
            setEnteredAge('');
            setEnteredUsername('');
        }
    const usernameHandler=(event)=>{
        setEnteredUsername(event.target.value);
    }
    const ageHandler=(event)=>
    {
        setEnteredAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
      };
    
    return (
        <div>
        {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={errorHandler}
            />
          )}
        <Card>
            <form onSubmit={userdatahandler}>
                <div className='user-form'>
                <input 
                onChange={usernameHandler} 
                id='name' 
                type='text' 
                placeholder='Username'
                value={enteredUsername} />
                <input 
                onChange={ageHandler} 
                type='number' 
                id='age' 
                placeholder='Age' 
                value={enteredAge} />
                <Button>Add User</Button>
                </div>
            </form>
        </Card>
        </div>
        
    )
}

export default User;