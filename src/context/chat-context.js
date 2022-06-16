import React, { useState } from "react"

const ChatContext = React.createContext({
    curChat: {},
    updateCurChat: (id) => {},
})

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

export const ChatContextProvider = ({children}) => {
    const [curChatState, setCurChatState] = useState(DEFAULT_MSGS);


    const updateCurChatHandler = (id) => {
        setCurChatState(id)
    }

    console.log("curChatState", curChatState)

    return (
        <ChatContext.Provider value={{
            cutChat: curChatState,
            updateCurChat: updateCurChatHandler,
        }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContext;
