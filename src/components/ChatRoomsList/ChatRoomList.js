import React from 'react'
import { useSelector } from "react-redux"
import ChatRoomItem from './ChatRoomItem';
import classes from "./ChatRoomList.module.css"

const ChatRoomList = () => {
  const chatRooms = useSelector(state => state.chatRooms);
  console.log(chatRooms)

  return (
    <div className={classes["chat-room-list"]}>
      {chatRooms.map(chatRoom => (
          <ChatRoomItem 
            key={chatRoom.id}
            id={chatRoom.id}
            createdAt={chatRoom.createdAt}
            allowedNoOfMembers={chatRoom.allowedNoOfMembers}
            expiresAt={chatRoom.expiresAt}
            name={chatRoom.name}
            publicKey={chatRoom.publicKey}
            members={chatRoom.members}
          />
        )
      )}
    </div>
  )
}

export default ChatRoomList