import React from 'react';
import classes from './Group.css'

const Group = props => (
  <div className={classes.Group}>
      <div
        style={{
          backgroundImage: "url('" + props.imageUrl + "')",
        }} 
        className={classes.Image}></div>
      <footer>
        <h2 className={classes.GroupName}>{props.name}</h2>
        <span className={classes.MembersNum}>{props.membersNum} members</span>
      </footer>
  </div>
)

export default Group;

