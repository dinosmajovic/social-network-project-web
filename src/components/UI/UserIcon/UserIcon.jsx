import React, { Component } from 'react';
import classes from './UserIcon.css';

class UserIcon extends Component {
  render() {
    let imageUrl = "url('http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png')";
    if (this.props.image) {
      imageUrl = "url('" + this.props.image + "')"
    }
    return (
      <div style={{
        width: this.props.width,
        height: this.props.height,
        backgroundImage: imageUrl
      }} className={classes.UserIcon}>

      </div>
    );
  }
}

export default UserIcon;
