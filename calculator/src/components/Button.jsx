import React from "react";

export default function Buttons ({value, takeInput}){
    return(
        <>
        <button onClick={() =>{takeInput(value)}}>{value}</button>
        </>
    )
}