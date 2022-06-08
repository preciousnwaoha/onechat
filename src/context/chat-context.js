import React, { useState } from "react"

const ChatContext = React.createContext({
    curChat: {},
    updateCurChat: (id) => {},
})

export const ChatContextProvider = ({children}) => {
    const [curChatState, setCurChatState] = useState("");


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
