import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Jokes from "./components/Jokes";

const App = () => {
  return (
    <>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/api" element={<Jokes />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
