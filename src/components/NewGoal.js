import React from 'react'
import './NewGoal.css'
import { useState } from 'react';

let NewGoal = (props) => {
  const [enterdText,setEnterdText]=useState('');
const addGoalHandler = (event) => {
event.preventDefault();
const newGoal={
  id:Math.random().toString(),
  text:enterdText
}

setEnterdText('');
props.onAddGoal(newGoal);



};
const textChangeHandler = (event) => {
  setEnterdText(event.target.value);
  }
  return (


    
    <div>
        <form className='new-goal' onSubmit={addGoalHandler}>
            <input type='text' value={enterdText} onChange={textChangeHandler}/>
            <button type='submit'>Add Goal</button>
        </form>
      
    </div>
  )
}

export default NewGoal
