import React from 'react'
import BottomBar from '../components/Home/BottomBar';
import TopBar from "../components/Home/TopBar";
import ChatRoomList from "../components/ChatRoomsList/ChatRoomList"
import classes from "./Home.module.css"

const Home = () => {
  return (
    <div className={classes["home"]}>
        <TopBar />
        <ChatRoomList />
        <BottomBar />
    </div>
  )
}

export default Home