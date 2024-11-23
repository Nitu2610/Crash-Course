import { useState,useEffect } from "react"

const Timer =()=>{
let [count,setCount]=useState(0);

const countIncreament=()=>{
    setCount((previousCount)=> previousCount+1);
};
const countDecreament=()=>{
    if(count<=0){
        return;
    }
    setCount((previousCount)=> previousCount-1);
};
const countReset=()=>{
    setCount(()=> 0);
}

return(
    <>
    <div id="timerBox">
    <h1>Counter</h1>
    <h1 style={{color: count>0? "darkblue":"black" }}>{count}</h1>
    <button onClick={countIncreament}>Increase Count</button>
    <button onClick={countDecreament}>Decrease Count</button>
    <button onClick={countReset}>Reset Counter</button>
    </div>
    <br />
    </>
)
}

export {Timer}