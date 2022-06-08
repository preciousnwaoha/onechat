import React from 'react'
import useInput from '../../../hooks/use-input';
import classes from "./ChatInputBar.module.css"

const ChatInputBar = () => {

    const {
        value: enteredMessage,
        isValid: messageIsValid,
        hasError: messageHasError,
        valueChangeHandler: messageChangeHandler,
        inputBlurHandler: messageBlurHandler,
        reset: messageResetHandler,
      } = useInput((value) => value.trim() !== "");

      
    


    const submitHandler = (event) => {
        event.preventDefault();

        if (!messageIsValid) {
            return
        }

        console.log("added", enteredMessage);

        messageResetHandler()
    }

  return (
    <form onSubmit={submitHandler} className={classes["chat-input-bar"]}>
        <label htmlFor="type-message">Message</label>
        <input tyoe="text" placeholder='Type Here...' id="type-message" onChange={messageChangeHandler} onBlur={messageBlurHandler} />

        <button type='submit'>

        </button>
    </form>
  )
}

export default ChatInputBar