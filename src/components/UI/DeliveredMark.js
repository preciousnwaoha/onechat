import React from 'react'
import classes from "./DeliveredMark.module.css"

const DeliveredMark = ({ sent, recieved}) => {
  return (
    <div className={classes["delivered-mark"]} >
        {sent && <div className={classes["sent"]}></div>}
        {recieved && <div className={classes["recieved"]}></div>}
    </div>
  )
}

export default DeliveredMark