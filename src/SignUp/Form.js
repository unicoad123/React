import React from "react";
import classes from './SignUp.module.css';
import Card from "../UI/Card";

const Form=(props)=>
{

    return(<div>
        <Card>
            <form onSubmit={addUser}>
            <input className={classes.signup} type='text' placeholder='Email' /><br></br>
            <input className={classes.signup} type='password' placeholder='Password' /><br></br>
            <input className={classes.signup} type='password' placeholder='Confirm Password' /><br></br>
            <button className={classes.signupbtn}>Login</button>
            <button className={classes.login}>ForgotPassword</button>
            </form>
        </Card>
    </div>)
}

export default Form;