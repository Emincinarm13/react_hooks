"use client"
import React, {useContext} from "react";
import {userContext} from "@/context/userContext";
const User=({user})=>{
    const context=useContext(userContext);

    return(
        <div style={{background:user.color}}>
            <h3>{user.name}</h3>
            <p>email:{user.email}</p>
            <p>age:{user.age}</p>
            Color:{" "}
            <input value={user.color}
            onChange={e=>context.changeColor(user.id,e.target.value)}
            />

        </div>
    )
}


export default User;

