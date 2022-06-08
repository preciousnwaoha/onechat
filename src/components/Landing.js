import React, { useState } from 'react'
import classes from "./Landing.module.css"

const Landing = () => {
    const [getStarted, setGetStarted] = useState(false)

    const getStartedHandler = () => {
        setGetStarted(true)
    }

  return (
    <div className={`${classes.landing} ${getStarted && classes.open}`} >
        <div>
            
        <h1>OneChat</h1>
        <h4>Onetime Anonynous Chat Sessions</h4>
        </div>

        <button type="button" onClick={getStartedHandler} >Get started</button>
    </div>
  )
}

export default Landing