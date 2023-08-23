//useReducer, aynı useState gibi state yönetimi için kullanılan hooklardan bir tanesidir.
// useState'e alternatif olarak state yönetimi için daha gelişmiş bir hook'tur.

"use client"
import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";
import Home from "@/app/page";

const initialState={
    data:"",
    loading:false,
    error:""
}
const myReducer= ()=>{

    const[state,dispatch]=useReducer(reducer,initialState);
    const {data,loading,error}=state;
    console.log(state)
    const fetchDog=  async ()=>{
        dispatch({type:"FETCH_START"})
       await  fetch("https://dog.ceo/api/breeds/image/random")
            .then((res)=>res.json())
            .then((res)=>{
                dispatch({type:"FETCH_SUCCESS" ,payload:res.message})
            })
            .catch(()=>{
                dispatch({type:"FETCH_ERROR",payload:"error fetching data"})
            });
    };

    return(
        <div>
            <Home></Home>
        <button onClick={fetchDog} disabled={loading}>Fetch Dog</button>
            {data &&(
                <div>
                    <img src={data} alt="random dog"/>
                </div>
            )}
            {error && <p>{error}</p>}

        </div>
    );
}





export default myReducer;
















