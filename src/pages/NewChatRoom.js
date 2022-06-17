import React from 'react'
import { useLocation } from "react-router-dom"
import classes from "./NewChatRooms.module.css"

const NewChatRoom = () => {
    const location = useLocation();



    const queryParams = new URLSearchParams(location.search);

    console.log(queryParams.get('type'))

  return (
    <div className={classes[""]}>{location.pathname}</div>
  )
}

export default NewChatRoom