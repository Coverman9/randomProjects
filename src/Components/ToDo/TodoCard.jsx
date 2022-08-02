import React from "react";
import { useNavigate } from "react-router-dom";


const TodoCard = (props) => {
  const { todo } = props;
  const { id, completed, title } = todo;
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "bisque",
        color: "darkslategray",
        margin: "10px",
        padding: "10px",
        width: "200px",
      }}
      onClick={() => navigate(`/todos/${id}`)}
    >
      
      <h4>{title}</h4>
      <h6>{`Completed: ${completed}`}</h6>
    </div>
  );
};

export default TodoCard;
