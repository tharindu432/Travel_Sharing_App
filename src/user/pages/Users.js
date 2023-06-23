import React from "react";
import UsersList from "../components/UsersList";

const Users=()=>{
    const USERS=[{
        id:'u1',
        name:"tharindu",
        image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fscience%2Fflower&psig=AOvVaw3XhPHYXlaiygzxDfpLeVf4&ust=1687629112202000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjdkMD62f8CFQAAAAAdAAAAABAE',
        places:3
    }]
    return <UsersList items={USERS}/>;
}

export default Users;