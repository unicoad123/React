import React from "react";
import Signup from './SignUp/Signup';

function App() {
  async function addUserHandler(User) {
    const response=await fetch('http://localhost:8080/User',{
      method:'POST',
      body:JSON.stringify(User),
      headers:{
        'Content-Type':'application/json'
      }
    });
    const data=await response.json();
    console.log(data);
  }
  return (
    <div>
      <Signup onaddUser={addUserHandler} />
    </div>
  );
}

export default App;
