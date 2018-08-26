import React from 'react';
import classes from './Modal.css';

const Modal = props => (
  props.show ? <div className={classes.Modal}>{props.children}</div> : null
)

export default Modal;
