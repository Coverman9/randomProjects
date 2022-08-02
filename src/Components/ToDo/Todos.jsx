import { CircularProgress } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get (`https://jsonplaceholder.typicode.com/todos`).then((res) => {
        const resData = res.data
        setTodos(resData)
    })
  }, [])

  console.log(todos);

  return (
    <>
    <NavLink to="/home">
        <FontAwesomeIcon className="backButton" icon={faArrowCircleLeft} />
      </NavLink>
    {todos ? (
    <div style={{display: "flex", flexWrap:"wrap"}}>
        {todos.slice(0,10).map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
        ))}
    </div>
    ) : (
    <CircularProgress/>
    )}
    </>
  )
}

export default Todos;
