import ChatBody from './ChatBody/ChatBody'
import ChatHeader from './ChatHeader/ChatHeader'
import ChatInput from './ChatInput/ChatInput'
import classes from "./ChatRoom.module.css"


const ChatRoom = () => {

  return (
    <div className={classes["chat-room"]}>
        <ChatHeader />
        <ChatBody messages={messages} />
        <ChatInput />
    </div>
  )
}

export default ChatRoom