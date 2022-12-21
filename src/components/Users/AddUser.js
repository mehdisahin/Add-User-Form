import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = props => {
	const[enteredUserName, setEnteredUserName] =	useState('');
	const[enteredAge, setEnteredAge] =	useState('')

const addUserHandler = (event) => {
	event.preventDefault();
	console.log(enteredUserName, enteredAge);
}
const useNameChangeHandler = (event) => {
	setEnteredUserName(event.target.value);
};
const useAgeChangeHandler = (event) => {
	setEnteredAge(event.target.value);
};

return (	
<Card className={classes.input}>
<form onSubmit={addUserHandler}>
		<label htmlFor='username'>Username</label>
		<input id= 'username' type= 'text' onChange={useNameChangeHandler}></input>
		<label htmlFor='age'>Age (Years)</label>
		<input id= 'age' type= 'number' onChange={useAgeChangeHandler}></input>
		<Button type= 'submit'>Add User</Button>
	</form>
	</Card>
	)
};

export default AddUser;