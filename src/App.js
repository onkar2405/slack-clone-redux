import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import AppBody from "./components/main/AppBody";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route element={<AppBody />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
