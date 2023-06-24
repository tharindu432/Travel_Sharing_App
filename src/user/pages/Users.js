import React from "react";
import UsersList from "../components/UsersList";
import nuwi from './nuwi.jpeg'
const Users=()=>{
    const USERS=[
        {
        id:'u1',
        name:"Nuwani Hansika",
        image:`${nuwi}`,
        places:3
    }
]
    return <UsersList items={USERS}/>;
}

export default Users;