import React from 'react'
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon }from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import classes from "./TopBar.module.css"

const TopBar = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const addNewChatRoomHandler = () => {
    navigate("/new-chat-room?type=create");
  }

  return (
    <div className={classes["top-bar"]}>
        <div className={classes["new-chat-room"]} onClick={addNewChatRoomHandler}>
          <FontAwesomeIcon icon={faPlus} className={classes["plus-icon"]} />
        </div>
    </div>
  )
}

export default TopBar