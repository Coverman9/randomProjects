import "./App.css";
import React from "react";
import Counter from "./Components/Counter/Counter";
import Home from "./Components/Home"
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Todos from "./Components/ToDo/Todos";
import Todo from "./Components/ToDo/Todo";
import Wordle from "./Components/Wordle/Wordle";
import Traffic from "./Components/Traffic/Traffic";
import Wackamole from "./Components/Wackamole/Wackamole";
import MatchGame from "./Components/MatchCopyGame/MatchGame";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h2 style={{marginBottom: "50px"}}>Hop hei</h2> */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todolist" element={<Todos />} />
          <Route path="/todos/:id" element={<Todo />} />
          <Route path="/wordle" element={<Wordle />}/>
          <Route path="/traffic" element={<Traffic />}/>
          <Route path="/wackamole" element={<Wackamole />}/>
          <Route path="/matchgame" element={<MatchGame />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
