import React from 'react'
import CreateRoom from './CreateRoom'
import classes from "./Rooms.module.css"

const Rooms = ({onEnterChatRoom}) => {
  return (
    <div className={classes.rooms}>
        <CreateRoom onEnterChatRoom={onEnterChatRoom} />
    </div>
  )
}

export default Rooms