import "./App.css";
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oefenen from "./Oefenen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Oefenen />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
