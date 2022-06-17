import React from 'react'
import ChatRoomList from '../ChatRoomsList/ChatRoomList'
import BottomBar from './BottomBar'
import classes from "./Home.module.css"
import TopBar from './TopBar'

const Home = () => {
  return (
    <div className={classes["home"]}>
        <TopBar />
        <ChatRoomList />
        <BottomBar />
    </div>
  )
}

export default Home;