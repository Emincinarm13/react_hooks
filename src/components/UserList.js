"use client"
import React ,{useContext} from "react";
import User from "@/components/User";

import {userContext} from "@/context/userContext";

const UserList=()=>{
    const context=useContext(userContext);
    return(
        <div>
            <h2>user list</h2>
            {context.users.map(user=>(<User key={user.name} user={user} />))}
        </div>
    )
}





export default UserList;









