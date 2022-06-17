import { useState } from "react";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import ChatRoomList from "./components/ChatRoomsList/ChatRoomList";
import Landing from "./components/Landing";
import "./App.css";

function App() {
  const [enterRoom, setEnterRoom] = useState(false);

  const enterChatRoomHandler = () => {
    setEnterRoom(true);
  };

  return (
    <>
      <Landing />
      {enterRoom && <ChatRoom />}
      {!enterRoom && <ChatRoomList />}
    </>
  );
}

export default App;
