import React from "react";
import classes from "./ChatBox.module.css";
import ChatBoxData from "./ChatBoxData";

const ChatBox = ({ data }) => {
  const { message, username, date, pic } = data;

  let isUser = username === "ghost";

  return (
    <>
      {!isUser && (
        <div className={classes["chat-box"]}>
          <div className={classes["pic-part"]}>
            <img src={pic} alt="username" />
          </div>

          <ChatBoxData data={data} />
        </div>
      )}

      {isUser && (
        <div
          className={`${classes["chat-box"]} ${
            isUser && classes["user-chat-box"]
          }`}
        >
          
          <ChatBoxData data={data} />
          <div className={classes["pic-part"]}>
            <img src={pic} alt="username" />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
