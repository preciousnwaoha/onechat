import React, { useState } from "react";
import useInput from "../../hooks/use-input";
import classes from "./CreateRoom.module.css";

// import { db } from "../../../firebase";
// import {collection, addDoc} from "firebase/firebase"

// const chatRooms = collection(db, "chatRooms")

const CreateRoom = ({onEnterChatRoom}) => {
  const [createRoom, setCreateRoom] = useState(false);

  const {
    value: enteredRoomName,
    isValid: roomNameIsValid,
    hasError: roomNameHasError,
    valueChangeHandler: roomNameChangeHandler,
    inputBlurHandler: roomNameBlurHandler,
    reset: roomNameResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredUserName,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: userNameResetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredUsersNum,
    isValid: usersNumIsValid,
    hasError: usersNumHasError,
    valueChangeHandler: usersNumChangeHandler,
    inputBlurHandler: usersNumBlurHandler,
    reset: usersNumResetHandler,
  } = useInput((value) => value.trim() !== "");


  const toggleCreateChatHandler = () => {
    setCreateRoom(prevState => !prevState)
  }

  let formIsValid = false;

  if (roomNameIsValid && userNameIsValid && usersNumIsValid) {
      formIsValid = true
  }

  const createChatSubmitHandler = (event) => {
      event.preventDefault()

    if (!formIsValid) {
        return
    }

      const chatData = {
          chatName: enteredRoomName,
          members: [
              enteredUserName,
          ],
          allowed: enteredUsersNum,
      }

    console.log(chatData)



    roomNameResetHandler()
    userNameResetHandler()
    usersNumResetHandler()

    onEnterChatRoom()
  }
  

  return (
    <div className={classes["create-room"]}>
      {createRoom && (
        <form onSubmit={createChatSubmitHandler}>
            <div className={classes["cancel"]} onClick={toggleCreateChatHandler}></div>

            <label>Chat Room Name</label>
          <input type="text" placeholder="Chat Room Name" id="room-name" onChange={roomNameChangeHandler} onBlur={roomNameBlurHandler} />
          {roomNameHasError && <p>Invalid room name</p>}

          <label>Your Chat Name</label>
          <input type="text" placeholder="ghostrebirth" id="room-name" onChange={userNameChangeHandler} onBlur={userNameBlurHandler} />
          {userNameHasError && <p>Invalid username</p>}

          <label>How many people</label>
          <input type="text" placeholder="2" id="room-name" onChange={usersNumChangeHandler} onBlur={usersNumBlurHandler} />
          {usersNumHasError && <p>must be btw 1 and 50</p>}

          <button type="submit" className={classes["submit-btn"]} >Create</button>
        </form>
      )}

      {!createRoom && (
        <div>
          <p>Anonymous</p>
          <button type="button" onClick={toggleCreateChatHandler} className={classes["create-btn"]}>Create Chat</button>
        </div>
      )}
    </div>
  );
};

export default CreateRoom;
