import React, { useState } from 'react'
import './App.css'
import { TimerComp } from './components/Timer'
import ScrollEventComp from './components/ScrollEventComp';

function App() {
  let [mountTimer,setMountTimer]=useState(true);
let [buttonText,setButtonText]=useState("Unmount Timer");
const [showScrollEvent, setShowScrollEvent] = useState(true);

const toggleTimer=()=>{
  setMountTimer(!mountTimer);
  setButtonText(mountTimer? "Mount TImer" : "Unmount Timer")
}
  return (
    <>
     <h1>HANDLE THE SIDE EFFECT OF Use Effect.</h1>
    {mountTimer && <TimerComp/> };
    <button onClick={toggleTimer}>{buttonText}</button>

    <hr />

{showScrollEvent && <ScrollEventComp />}
<button onClick={() => setShowScrollEvent(!showScrollEvent)}>
    {showScrollEvent ? "Unmount Scroll Event" : "Mount Scroll Event"}
</button>
    </>
  )
}

export default App
