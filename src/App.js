import React from "react";
// import Landing from "./components/Landing";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom"

import Home from "./pages/Home"
import Settings from "./pages/Settings";
import NewChatRoom from "./pages/NewChatRoom";
import ErrorPage404 from "./pages/ErrorPage404";
import ChatRoom from "./pages/ChatRoom";

function App() {
  return (
    <Router>
      <nav>
          <Link to="/"> Home </Link>
          <Link to="/settings"> Settings </Link>
          <Link to="/new-chat-room"> Chat </Link>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/new-chat-room" element={<NewChatRoom />} />
        <Route path="/chat-room/:chatId" element={<ChatRoom />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </Router>
  );
}

export default App;
