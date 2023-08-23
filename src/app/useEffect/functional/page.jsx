"use client"
import React, {useEffect, useState} from "react";
import Home from "@/app/page";
const FunctionComponent=()=>{
    const [counter,setCounter]=useState(0);
    const[timer ,setTimer]=useState(0)

    useEffect(()=>{
       console.log("useeffect çalıştı");

    },[counter]) // bu şekilde olursa her renderde çalışır eğer fonksiyondan sonra  ,[] koyarsak sadece ilk yüklendiğinde çalışır
    //[counter] yazarsak da counter değiştirğinde çalışcak


    useEffect(()=>{
        const myTimer=setInterval(()=>{
            setTimer(timer=>timer+1)
        },1000);
        return ()=>clearInterval(myTimer);  //burda temizlik yaparız

    },[])

    useEffect(() => {
        console.log(timer)
    }, [timer]);
    const increase=()=>{
        setCounter(counter+1);
    }

    return(

        <div>
            <Home></Home>
            <h2>useEffect funcctional component</h2>
            <p>counter: {counter}</p>
            <button onClick={()=>increase()} >increase</button>
        </div>
    )




}

export default FunctionComponent;