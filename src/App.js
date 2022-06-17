import React from "react";
// import Landing from "./components/Landing";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
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
        <NavLink
          className={(data) => `${data.isActive ? "active-nav" : ""}`}
          to="/new-chat-room"
        >
          {" "}
          Chat{" "}
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home/*" element={<Home />}>
          <Route path="new-user" element={<h1>New user</h1>} />
        </Route>
        <Route path="/settings" element={<Settings />} />
        <Route path="/new-chat-room" element={<NewChatRoom />} />
        <Route path="/chat-room/:chatId" element={<ChatRoom />} />
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </Router>
  );
}

export default App;
