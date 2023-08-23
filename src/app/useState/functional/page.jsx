"use client"
import React,{useState} from "react";
import Home from "@/app/page";
const FunctionComponent=()=>{
    const [counter,setCounter]=useState(0);

    const increase=()=>{
        setCounter(counter+1);
    }

    return(

        <div>
            <Home></Home>
            <h2>funcctional component</h2>
            <p>counter: {counter}</p>
            <button onClick={()=>increase()} >increase</button>
        </div>
    )




}

export default FunctionComponent;