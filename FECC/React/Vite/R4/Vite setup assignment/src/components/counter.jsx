import React from "react";

import { useState } from "react";

function Counter(){
    let [count,setCount]= useState(0);
const Increament=()=>{
    setCount(count+1)
}

const Decreament=()=>{
    setCount(count-1)
}

    return (<>
    <button onClick={Decreament}>Count Decreament </button>
    <div><h1>{count}</h1>
    <button onClick={Increament}>Count Increament </button>
    </div>
    </>)
}

export {Counter}