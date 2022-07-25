import "./App.css";
import React from "react";
import Counter from "./Components/Counter";
import Home from "./Components/Home"
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
