import { useState, useEffect } from "react";
import "./timer.css";

const Timer = () => {
  let [count, setCount] = useState(10);
  let [isMount, setIsMount] = useState(true);

  useEffect(() => {
    let intervalId;
    if (isMount && count > 0) {
      intervalId = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [count, isMount]);

  const handleToggle = () => {
    setIsMount((prevMount) => !prevMount);
    console.log("btn working!!!!!!");
  };

  return (
    <>
      <h1>Counter via useEffect!</h1>
      {isMount ? <h1>Timer: {count}</h1> : null}
      <button onClick={handleToggle}>{isMount ? "Unmount" : "Mount"}</button>
    </>
  );
};

export { Timer };
