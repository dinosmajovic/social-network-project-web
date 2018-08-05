import React, { Component } from 'react';
import classes from './Group.css'

export default class Group extends Component {
  render() {
    return (
      <div className={classes.Group}>
        <div
          style={{
            backgroundImage: "url('" + this.props.imageUrl + "')",
          }} 
          className={classes.Image}></div>
        <footer>
          <h2 className={classes.GroupName}>{this.props.name}</h2>
          <span className={classes.MembersNum}>{this.props.membersNum} members</span>
        </footer>
      </div>
    )
  }
}
