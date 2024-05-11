import React, { useState } from 'react';
import "./Calculator.css"

function Calculator() {
  const [exp, setExp] = useState("");
  const [answer, setAnswer] = useState("");
  const handleClick = (e) => {
    setExp(exp+e.target.innerText)
  }
  const evaluateExp = () => {
    if(exp[exp.length-1] !== "+" && exp[exp.length-1] !== "-" && exp[exp.length-1] !== "*" && exp[exp.length-1] !== "/"){
        setAnswer(eval(exp));
        setExp("");
    }
  }
  const clearExp = () => {
    setExp("");
    setAnswer("");
  }
  return (
    <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center'
    }}>
      <h1>React Calculator</h1>
      <input type="text" value={exp} style={{marginBottom:"10px"}} />
      <div style={{marginBottom:"10px"}}>{answer}</div>
      <div>
        <div style={{
            width: "35vh",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px"
        }}>
            <button onClick={handleClick}>7</button>
            <button onClick={handleClick}>8</button>
            <button onClick={handleClick}>9</button>
            <button onClick={handleClick}>+</button>
        </div>
        <div style={{
            width: "35vh",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px"
        }}>
            <button onClick={handleClick}>4</button>
            <button onClick={handleClick}>5</button>
            <button onClick={handleClick}>6</button>
            <button onClick={handleClick}>-</button>
        </div>
        <div style={{
            width: "35vh",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px"
        }}>
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick}>*</button>
        </div>
        <div style={{
            width: "35vh",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "12px"
        }}>
            <button onClick={clearExp}>C</button>
            <button onClick={handleClick}>0</button>
            <button onClick={evaluateExp}>=</button>
            <button onClick={handleClick}>/</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
