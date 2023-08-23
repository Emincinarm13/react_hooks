//domlara erişim
"use client"
import React, {useEffect, useRef} from "react";

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
        <div ref={divRef}>
            <h1>react hooks-useRef</h1>

            <input ref={inputRef}/>
            <button onClick={onFocusButton}>inputa focus ol</button>
            <button onClick={onDivBorder}>border ekle</button>
        </div>
    )
}








export default myUseRef;