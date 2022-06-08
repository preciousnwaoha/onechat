import React from 'react'
import classes from "./ChatBody.module.css"
import ChatBox from './ChatBox/ChatBox'


const ChatBody = ({messages}) => {
  return (
    <div className={classes["chat-body"]}>
        {messages.map( chat => {
            return (
                <ChatBox key={chat.id} data={chat} />
            )
        })}
    </div>
  )
}

export default ChatBody