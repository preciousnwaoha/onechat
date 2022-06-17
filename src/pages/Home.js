import React from 'react'
import {  Outlet } from "react-router-dom"
import BottomBar from '../components/Home/BottomBar';
import TopBar from "../components/Home/TopBar";
import ChatRoomList from "../components/ChatRoomsList/ChatRoomList"
import classes from "./Home.module.css"

const Home = () => {
  return (
    <div className={classes["home"]}>
      <Outlet />
        <TopBar />
        <ChatRoomList />
        <BottomBar />
    </div>
  )
}

export default Home