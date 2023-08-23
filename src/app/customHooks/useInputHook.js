"use client"
import {useState} from "react";

export const useInput=params=>{
const [inputs,setInputs]=useState(params);
    const handleChange=(event)=>{
        setInputs({...inputs, [event.target.name]:event.target.value})

    };
    console.log(inputs)

    return [inputs,handleChange];
}

//bu hook  state oluşturur datayı alır update eder