import React from "react"
import ChatBody from './ChatBody/ChatBody'
import ChatHeader from './ChatHeader/ChatHeader'
import ChatInput from './ChatInput/ChatInput'
import classes from "./ChatRoom.module.css"


const ChatRoom = () => {

  return (
    <div className={classes["chat-room"]}>
        <ChatHeader />
        <ChatBody />
        <ChatInput />
    </div>
  )
}

export default ChatRoom