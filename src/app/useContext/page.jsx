"use client"
import React, {useState} from "react";
import UserList from "@/components/UserList";
import userList from "@/components/UserList";

import {userContext} from "@/context/userContext";
import Home from "@/app/page";

const data=[
    {id:1,name:"emin", email:"xxxx@gmail.com", age:25 , color:"lightcyan"},
    {id:2,name:"ali", email:"eeee@gmail.com", age:30 , color:"honeydew"},
    {id:3,name:"veli", email:"vvvv@gmail.com", age:45 , color:"mistyrose"}
];


const UseContext=()=>{
    const [users,setUsers]=useState(data);
    const changeColor=(id,color)=>{
        setUsers(
            users.map(user=>(user.id===id?{...user,color:color}:user))
        );
    }

    const style={color:"black"}
return (
    <userContext.Provider value={{users,changeColor}}>
        <Home></Home>
        <h1>useContext</h1>
        <div style={style}>
            <h1>welcome!</h1>
            <UserList ></UserList>
        </div>
    </userContext.Provider>

)

}

export default UseContext;















