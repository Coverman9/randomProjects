import { CircularProgress } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import TodoCard from "./TodoCard";

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
