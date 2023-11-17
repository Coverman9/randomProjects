import React, { useEffect, useState } from "react";
import "./Traffic.css";

const Traffic = () => {
  const [state, setState] = useState("stop");
  const [timer, setTimer] = useState(5);

  console.log(timer)
  useEffect(() => {
    let intervalID;
    if (state === "stop" && timer > 0) {
      intervalID = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }

    if (timer === 0 && state === "stop") {
      clearInterval(intervalID);
      setTimer(5);
      setState("go")
    }


    if (timer === 0) {
      clearInterval(intervalID);
      setTimer(5);
    }
      setTimeout(() => {
        if (state === "stop") setState("go");
      }, 5000);

      setTimeout(() => {
        if (state === "go") setState("slow");
      }, 2000);

      setTimeout(() => {
        if (state === "slow") setState("stop");
      }, 2000);
    

    return () => clearInterval(intervalID);
  }, [state, timer]);

  return (
    <>
      <h1>Traffic</h1>
      <div className="traffic">
        <div className={`light stop ${state !== "stop" ? "on" : ""}`}></div>
        <div className={`light slow ${state !== "slow" ? "on" : ""}`}>
          <div className="timer">{state === "stop" ? timer : ""}</div>
        </div>
        <div className={`light go ${state !== "go" ? "on" : ""}`}></div>
      </div>
    </>
  );
};

export default Traffic;
