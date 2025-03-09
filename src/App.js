import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import AppBody from "./components/main/AppBody";
import SideBar from "./components/sidebar/SideBar";
import styled from "styled-components";
import Chat from "./components/main/chat/Chat";

const AppLayout = styled.div`
  display: flex;
`;

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AppLayout>
          <SideBar />
          <AppBody />
          <Routes>
            <Route element={<Chat />} path="/" />
          </Routes>
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
