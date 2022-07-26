import React from "react";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import Students from "../Students";
import "./Counter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom";



const Counter = () => {
  let [students, setStudents] = useState([
    {
      name: "Bakyt",
      age: 34,
      gay: true,
    },
    {
      name: "Bob",
      age: 44,
      gay: false,
    },
    {
      name: "Mal",
      age: 26,
      gay: true,
    },
  ]);

  const randomName = faker.name.firstName("male");
  const randomAge = Math.floor(Math.random() * 30) + 18;
  const gayRoulette = Math.floor(Math.random() * 2);
  console.log(randomName, randomAge, gayRoulette);

  let newStudent = {
    name: randomName,
    age: randomAge,
    gay: gayRoulette,
  };
  return (
    <>
    <NavLink to='/home'>
      <FontAwesomeIcon className="backButton" icon={faArrowCircleLeft} />
      </NavLink>

      <div>Counter: {students.length}</div>
      <div>
        <button
          style={{ padding: "5px 20px" }}
          onClick={() => setStudents([...students, newStudent])}
        >
          +
        </button>
        <button
          style={{ padding: "5px 20px" }}
          onClick={() => setStudents(students.slice(0, students.length - 1))}
        >
          -
        </button>

        {students.map((students) => {
          return <Students key={students.name + students.age} {...students} />;
        })}
      </div>
    </>
  );
};
export default Counter;
