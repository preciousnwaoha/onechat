import React from 'react'
import DeliveredMark from '../../../UI/DeliveredMark';
import classes from "./ChatBoxData.module.css"

const ChatBoxData = ({data}) => {
    const { message, username, date } = data;

  return (
    <div className={classes["chat-box-data"]}>
          <p className={classes["username"]}>{username}</p>
          <p className={classes["message"]}>{message}</p>
          <div className={classes["date-mark"]}>
            <p className={classes["date"]}>{date}</p>
            <DeliveredMark sent={true} recieved={true} />
          </div>

    </div>
  )
}

export default ChatBoxData