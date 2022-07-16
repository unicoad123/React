import React,{useState} from 'react';
import User from './components/Users/User';
import UserList from './components/Users/UserList';

function App()
{
  const [usersList,setUsersList]=useState([]);

  const AddUserHandler=(uname,uage)=>
  {
    setUsersList((prevuserlist)=>
    {
      return [
        ...prevuserlist,
        {name:uname,age:uage,id:Math.random().toString()}];
    })
  }
    return (
        <div>
          <User onAddUser={AddUserHandler} />
          <UserList users={usersList} />
        </div>
    );
}

export default App;