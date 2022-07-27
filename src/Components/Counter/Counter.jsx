import React from "react";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import Students from "../Students";
import "./Counter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/ducks/counter";

const Counter = () => {
  const count = useSelector((state) => state.counter.students);
  const dispatch = useDispatch()
  console.log(count);

  const addStudent = () => {
    dispatch(increment)
  };
  const deleteStudent = () => {
    dispatch(decrement)
  };

  return (
    <>
      <NavLink to="/home">
        <FontAwesomeIcon className="backButton" icon={faArrowCircleLeft} />
      </NavLink>

      <div>Counter: {count.length}</div>
      <div>
        <button style={{ padding: "5px 20px" }} onClick={addStudent}>
          +
        </button>
        <button style={{ padding: "5px 20px" }} onClick={deleteStudent}>
          -
        </button>

        {count.map((students) => {
          return <Students key={students.name + students.age} {...students} />;
        })}
      </div>
    </>
  );
};
export default Counter;
