import React, { Component } from 'react'
import classes from './Event.css'


export default class Event extends Component {
  render() {
    return (
      <div className={classes.Event}>
        <div
          style={{
            backgroundImage: "url('" + this.props.imageUrl + "')",
          }} 
          className={classes.Image}></div>
        <footer>
          <h2 className={classes.EventName}>{this.props.name}</h2>
          <span className={classes.TimeStamp}>{this.props.timeStamp}</span>
        </footer>
      </div>
    )
  }
}
