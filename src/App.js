import Landing from "./components/Landing";
import "./App.css";
import Rooms from "./components/CreateRoom/Rooms";
import { useState } from "react";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import { ChatContextProvider } from "./context/chat-context";


// import { db } from "../firebase"

// import {useCollectionData} from "react-firebase-hooks"

function App() {
  const [enterRoom, setEnterRoom] = useState(false);

  const enterChatRoomHandler = () => {
setEnterRoom(true);
  }

  return (
    <>
    <ChatContextProvider>
      <Landing />
      {enterRoom && <ChatRoom />}
      {!enterRoom && <Rooms onEnterChatRoom={enterChatRoomHandler} />}
    </ChatContextProvider>
      </>
  );
}

export default App;
