import classes from './MealItemForm.module.css';
import InputForm from '../../UI/InputForm'
const MealItemForm=(props)=>{
    return(<form className={classes.form}>
        <InputForm 
        label='Amount'
        input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
        }} />
         <button>+Add</button>
        </form>);
}

export default MealItemForm;