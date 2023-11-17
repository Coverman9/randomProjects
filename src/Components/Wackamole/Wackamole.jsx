import React, { useEffect, useState } from "react";
import "./Wackamole.css";

const Wackamole = () => {
  const initialArrays = Array.from({ length: 9 }, () => new Array(6).fill(""));
  const [hole, setHole] = useState(initialArrays);
  const [mole, setMole] = useState(Math.floor(Math.random() * 9));
  const [score, setScore] = useState(0);

  console.log(mole);
  useEffect(() => {
    setInterval(() => {
      setMole(Math.floor(Math.random() * 9));
    }, 1000);
  }, []);

  return (
    <>
      <h1>Wack-a-mole</h1>
      <h2>Score: {score}</h2>
      <div className="wrapper">
        {hole.map((el, indx) => {
          return (
            <>
              <div
                onClick={() => {
                  if (indx === mole) {
                    setScore(score + 1);
                    setMole(Math.floor(Math.random() * 9)); // Update mole if condition is true
                  }
                }}
                className={indx === mole ? "moleHole" : "emptyHole"}
              ></div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Wackamole;
