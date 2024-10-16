import "./App.css";
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Oefenen from "./Oefenen";
import End from "./End";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Oefenen />}></Route>
        <Route path='/end' element={<End />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
