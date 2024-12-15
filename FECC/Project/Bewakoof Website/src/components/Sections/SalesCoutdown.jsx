import React, { useState, useEffect } from "react";
import "../../styles/CountdownTimer.css";

const SaleCountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const resetTimer = () => {
    const now = new Date();
    const nextMidnight = new Date(now);
    nextMidnight.setHours(24, 0, 0, 0);
    return nextMidnight;
  };

  const calculateTimeLeft = () => {
    const now = new Date();
    const nextMidnight = resetTimer();
    const diff = nextMidnight - now;
    if (diff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  };

  useEffect(() => {
    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="salesEndCountDownOuterBox">
      <h2 id="title">Sales Ends In</h2>
      
      <div className="countandtext">
      
      <div className="timefontandtextbox" >
        <p className="timefont"> {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours} </p>
        <p className="timetext">hours</p>
      </div>  

       <span>:</span>

      <div className="timefontandtextbox" >
        <p className="timefont" > {timeLeft.minutes < 10 ? `0${timeLeft.minutes}`:timeLeft.minutes}  </p>
        <p className="timetext">mins</p>
      </div>
      <span>:</span>
      
      <div className="timefontandtextbox" >
        <p className="timefont">
          {timeLeft.seconds < 10 ? `0${timeLeft.seconds}`: timeLeft.seconds} </p>
        <p className="timetext">secs</p>
      </div>
      </div>

    </div>
  );
};

export { SaleCountDown };
