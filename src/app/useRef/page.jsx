//domlara erişim
"use client"
import React, {useEffect, useRef} from "react";
import Home from "@/app/page";

const myUseRef=()=>{
        const inputRef=useRef();
        const divRef=useRef();

        const onFocusButton=()=>{
            inputRef.current.focus();
        }
        const onDivBorder=()=>{
            divRef.current.style.border="3px solid white"
        }
        useEffect(()=>{
            console.log(inputRef)
        })
    return(
      <div>
          <Home></Home>
          <div ref={divRef}>

              <h1>react hooks-useRef</h1>

              <input ref={inputRef}/>
              <button onClick={onFocusButton}>inputa focus ol</button>
              <button onClick={onDivBorder}>border ekle</button>
          </div>
      </div>
    )
}








export default myUseRef;