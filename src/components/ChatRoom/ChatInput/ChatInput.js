import React from 'react'
import classes from "./ChatInput.module.css"
import ChatInputBar from './ChatInputBar'

const ChatInput = () => {
  return (
    <div className={classes["chat-input"]}>
        <ChatInputBar />
    </div>
  )
}

export default ChatInput