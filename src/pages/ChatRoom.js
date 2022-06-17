import React from 'react'
import { useParams } from "react-router-dom"
import classes from "./ChatRoom.module.css"

const ChatRoom = () => {
  let { chatId } = useParams();

  return (
    <div className={classes["chat-room"]}>{chatId}</div>
  )
}

export default ChatRoom