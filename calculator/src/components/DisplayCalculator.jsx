import React, { useState } from "react";
import Buttons from "./Button";
import "./DisplayScreen.css"
function DisplayCalculator(){

    let[inputValue, setInputValue] = useState("");
    let[result, setResult] = useState(0)

    function takeInput(value){
        setInputValue((prev) => prev + value)
    }
    function delInput(){
        setInputValue(inputValue.slice(0, -1))
    }
    function clearInput(){
        setInputValue("")
        setResult("")
    }
    const calculate = () => {
        try{
            setResult(eval(inputValue))
        }
        catch(error){
            setResult("ERROR")
        }
    }
        return(
        <>
        <div className="parent-most">
        <div className="parent-container">
            <div className="text-1">
                <input type="text" placeholder="0" value={inputValue} readOnly/>
            </div>
            <div className="text-2">
                <input type="text" placeholder="0" value={result} readOnly/>
            </div>
        </div>
        <div className="btn">
            <div className="btn-child1">
            <Buttons value={"AC"} takeInput={clearInput}/>
            <Buttons value={"DEL"} takeInput={delInput}/>
            <Buttons value={"="} takeInput={calculate}/>
            <Buttons value={"."} takeInput={takeInput}/>
            </div>
            <div className="btn-child2">
            <Buttons value={"1"} takeInput={takeInput}/>
            <Buttons value={"2"} takeInput={takeInput}/>
            <Buttons value={"3"} takeInput={takeInput}/>
            <Buttons value={"+"} takeInput={takeInput}/>
            </div>
            <div className="btn-child3">    
            <Buttons value={"4"} takeInput={takeInput}/>
            <Buttons value={"5"} takeInput={takeInput}/>
            <Buttons value={"6"} takeInput={takeInput}/>
            <Buttons value={"-"} takeInput={takeInput}/>
            </div>
            <div className="btn-child4">
            <Buttons value={"7"} takeInput={takeInput}/>
            <Buttons value={"8"} takeInput={takeInput}/>
            <Buttons value={"9"} takeInput={takeInput}/>
            <Buttons value={"*"} takeInput={takeInput}/>
            </div>
            <div className="btn-child5">
            <Buttons value={"%"} takeInput={takeInput}/>
            <Buttons value={"0"} takeInput={takeInput}/>
            <Buttons value={"/"} takeInput={takeInput}/>
            </div>
        </div>
        </div>
        </>
    )
}

export default DisplayCalculator