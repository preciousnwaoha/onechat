import React from 'react'
import classes from "./ChatRoomItem.module.css"

const ChatRoomItem = ({ id, createdAt, allowedNoOfMembers, expiresAt, name, publicKey, members, }) => {
  
  return (
    <div className={classes["chat-room-item"]}>
      {name}
    </div>
  )
}

export default ChatRoomItem