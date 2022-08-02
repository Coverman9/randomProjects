import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Todo = () => {
  const [todoDetails, setTodoDetails] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        const resData = res.data;
        setTodoDetails(resData);
      });
  }, []);
  console.log(todoDetails);
  const { title, completed, userId } = todoDetails || {};

  return (
    <div>
      <NavLink to="/todolist">
        <FontAwesomeIcon className="backButton" icon={faArrowCircleLeft} />
      </NavLink>
        {todoDetails ? (
            <div>
           <div>{`This is todo number: ${id}`}</div>
           <div>{`Title: ${title}`}</div>
           <div>{`Completed: ${completed}`}</div> 
           </div>
        ) : (
            <CircularProgress/>
        )}
      
    </div>
  );
};

export default Todo;
