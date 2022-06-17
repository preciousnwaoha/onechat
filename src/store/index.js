// import React from 'react';
import { createStore } from 'redux';
// import reactRedux from "react-redux";

const DEFAULT_ROOMS = [
    {
        id: "r1",
        name: "room 1",
        roomDisplayPicture: "default",
        members: [
            "ghost-rebirth",
        ],
        allowedNoOfMembers: 2,
        expiresAt: 1,
        createdAt: new Date(),
        publicKey: "xxxx20",
    },
    {
        id: "r2",
        name: "room 2",
        roomDisplayPicture: "default",
        members: [
            "ghost-rebirth",
        ],
        allowedNoOfMembers: 3,
        expiresAt: 1,
        createdAt: new Date(),
        publicKey: "xxxx20",
    },
    {
        id: "r3",
        name: "room 3",
        roomDisplayPicture: "default",
        members: [
            "ghost-rebirth",
        ],
        allowedNoOfMembers: 5,
        expiresAt: 1,
        createdAt: new Date(),
        publicKey: "xxxx20",
    },
]

const USER = {
    rooms: [
        {
            name: "room 1",
            userName: "ghost-rebirth",
            profilePic: "default",
        },
        {
            name: "room 2",
            userName: "ghost-reborn",
            profilePic: "default",
        },
        {
            name: "room 1",
            userName: "ghost",
            profilePic: "default",
        },
    ]
}

const DEFAULT_MSGS = [
    {
      id: "m1",
      type: "text",
      content: {
        text: "See this stuff",
      },
      createdAt: "",
      delivery: {
        sent: true,
        received: true,
      },
    },
    {
      id: "m2",
      type: "text",
      content: {
        text: "See this stuff",
        image: "assets/p1.png",
      },
      createdAt: "",
      delivery: {
        sent: true,
        received: false,
      },
  
    },
    {
      id: "m3",
      type: "text",
      content: {
        text: "See this stuff",
        image: "assets/p1.png",
        video: "assets/v1.mp4",
      },
      createdAt: "",
      delivery: {
        sent: true,
        received: false,
      },
  
    },
  ]

const chatRoomsReducer = (state = { chatRooms: DEFAULT_ROOMS, addingNewRoom: false, user: USER, messages: DEFAULT_MSGS, }, action) => {
    switch (action.type) {
        case "CREATE_ROOM":
            // anyone can
            let newRooms = state.chatRooms.concat(action.room);
            return { ...state, chatRooms: newRooms }
        case "JOIN_ROOM":
            // if invited
            return { ...state }
        case "LEAVE_ROOM":
            // if password is saved or password expired or room expired
            return { ...state }
        
        case "SWITCH_ROOM":
            // if member of next room
            return { ...state }

        case "DELETE_ROOM":
            // if 50% + 1 allow
            return { ...state }

        default:
            return { ...state }
    }
}

const store = createStore(chatRoomsReducer);

export default store;