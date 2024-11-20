import React,{useState,useEffect} from "react";

function TimerComp(){
    const [count,setCount]=useState(10);
    const [isActive,setIsActive]=useState(false)

    useEffect(()=>{
        if(!isActive || count<=0){ return;}
       const intervalId= setInterval(() => {
            setCount((prevCount)=> prevCount-1);
        }, 1000);

       return()=> clearInterval(intervalId);

    },[isActive,count]);
    const TimerStart=()=> setIsActive(true);
    const ResetTimer=()=> {
        setIsActive(false);
        setCount(10)
    }
    return (
        <>
       <h2>Timer: {count}</h2>
     <br />
     
        <button onClick={TimerStart}>Start Timer</button>
        <button onClick={ResetTimer}>Reset Timer</button>
        </>
    )
}

export {TimerComp}