// import React, { useContext } from 'react'
// import ChatContext from '../../context/chat-context'
import ChatBody from './ChatBody/ChatBody'
import ChatHeader from './ChatHeader/ChatHeader'
import ChatInput from './ChatInput/ChatInput'
import classes from "./ChatRoom.module.css"

import { db } from '../../firebase'
import { collection } from 'firebase/firestore'

import { useCollectionData } from "react-firebase-hooks/firestore"


const messages = [
  {
    id: "m1",
    message: "Hello",
    createdAt: "",
    username: "ghost"
  },

  {
    id: "m2",
    message: "You there?",
    createdAt: "",
    username: "ghost"
  }
]


const ChatRoom = () => {
    // const chatCtx = useContext(ChatContext)


//     const messagesRef = collection(db, "chatrooms", "hackers", "messages")

//     const query = messagesRef.limit(25);
    
// const [messages] = useCollectionData(query, {idField: "id"})

  return (
    <div className={classes["chat-room"]}>
        <ChatHeader />
        <ChatBody messages={messages} />
        <ChatInput />
    </div>
  )
}

export default ChatRoom