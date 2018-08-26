import React from 'react';
import classes from './UserIcon.css';

const UserIcon = props => {
  let imageUrl = "url('http://sg-fs.com/wp-content/uploads/2017/08/user-placeholder.png')";
  if (props.image) {
    imageUrl = "url('" + props.image + "')"
  }

  return (
    <div style={{
      width: props.width,
      height: props.height,
      backgroundImage: imageUrl
    }} className={classes.UserIcon}>

    </div>
  );
}

export default UserIcon;