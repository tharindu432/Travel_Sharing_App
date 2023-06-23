import React from 'react'

const UserItem = (props) => {
  return (
   <li className='user-item'>
    <div className='user-item__content'>
        <div className='user-item__image'>
            <img src={props.image} alt={props.name}/>
        </div>
        <div className='user-item__info'>

        </div>
    </div>

   </li>
  )
}

export default UserItem
