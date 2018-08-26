import React from 'react';
import classes from './Event.css'

const Event = props => (
  <div className={classes.Event}>
    <div
      style={{
        backgroundImage: "url('" + props.imageUrl + "')",
      }} 
      className={classes.Image}></div>
    <footer>
      <h2 className={classes.EventName}>{props.name}</h2>
      <span className={classes.TimeStamp}>{props.timeStamp}</span>
    </footer>
  </div>
)

export default Event;