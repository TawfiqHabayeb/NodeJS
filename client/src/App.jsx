import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import * as React from "react";
import Dash from "./pages/Dash";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/Dash" element={<Dash />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
