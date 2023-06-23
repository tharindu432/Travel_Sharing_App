import React from 'react'

const GoalList = props => {
    console.log(props.goals);
  return (
    <div>
       <ul className='goal-list'>
        {/* <li>{props.goals[0].text}</li>
        <li>{props.goals[1].text}</li>
        <li>{props.goals[2].text}</li> */}

        {props.goals.map((goal)=>{
            return <li key={goal.id}>{goal.text}</li>
        })}

     </ul>
    </div>
  )
}

export default GoalList
