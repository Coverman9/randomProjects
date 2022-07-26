import "./App.css";
import React from "react";
import Counter from "./Components/Counter/Counter";
import Home from "./Components/Home"
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from "./Components/ToDo/Todos";
import Todo from "./Components/ToDo/Todo";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 style={{marginBottom: "50px"}}>Hop hei</h2>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todolist" element={<Todos />} />
          <Route path="/todos/:id" element={<Todo />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
