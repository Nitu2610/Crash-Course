import { useState, useEffect, useRef } from "react";

const Stopwatch = () => {
  let [count, setCount] = useState(0);
  let intervalRef = useRef(null);

  const tenSec = () => setCount(10);
  const twintySec = () => setCount(20);
  const thirtySec = () => setCount(30);
  const sixtySec = () => setCount(60);

  const startTimer = () => {
    if (count > 0 && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount > 0) {
            console.log(Date.now());
            return prevCount - 1;
          } else {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
            return 0;
          }
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  document.title = `Timer: ${count}`;

  return (
    <>
      <div id="timerBox">
        <h1>Stopwatch Timer</h1>
        <h1 style={{ color: count > 0 ? "darkblue" : "black" }}>
          {" "}
          {count}
        </h1>{" "}
        <br />
        <button className="timerControllerBtn" onClick={startTimer}>
          Start
        </button>
        <button className="timerControllerBtn" onClick={stopTimer}>
          Stop
        </button>
        <button className="timerControllerBtn" onClick={resetTimer}>
          Reset
        </button>
        <br />
        <br />
        <div className="timeSelecterBtn">
          <button onClick={tenSec}>10 seconds</button>
          <button onClick={twintySec}>20 seconds</button>
          <button onClick={thirtySec}>30 seconds</button>
          <button onClick={sixtySec}>60 seconds</button>
        </div>
      </div>
    </>
  );
};

export { Stopwatch };
