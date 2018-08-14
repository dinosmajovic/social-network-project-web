import React, { Component } from 'react';
import classes from './UserIcon.css';

class UserIcon extends Component {
  render() {
    return (
      <div style={{
        width: this.props.width, 
        height: this.props.height,
        backgroundImage: "url('" + this.props.image + "')" 
      }} className={classes.UserIcon}>
        
      </div>
    );
  }
}

export default UserIcon;
