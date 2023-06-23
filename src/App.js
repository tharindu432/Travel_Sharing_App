
import './App.css';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal';
import { useState } from 'react';
function App() {

 const [courseGoals,setCourseGoals]= useState([
    {id:'cg1',text:"Learn"},
    {id:'cg2',text:"dedicate"},
    {id:'cg3',text:"practicals"}

]);
  const addNewGoalHandler=(newGoal)=>{
   // setCourseGoals(courseGoals.concat(newGoal));
   setCourseGoals((prevCourseGoals)=>{
      return prevCourseGoals.concat(newGoal);
   })
//courseGoals.push(newGoal);
console.log(courseGoals);
  }
  //.log(courseGoals)
  return (
    <div className="App">
     <h2>Finish the Course</h2>
     <NewGoal onAddGoal={addNewGoalHandler}/>
    <GoalList goals={courseGoals}/>
    </div>
  );
}

export default App;
