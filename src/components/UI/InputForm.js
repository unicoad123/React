import classes from './InputForm.module.css';

const InputForm=(props)=>
{
    return (<div className={classes.input}>
                   <label htmlFor={props.input.id}>{props.label}</label>
         <input {...props.input} /> 
    </div>)
}

export default InputForm;