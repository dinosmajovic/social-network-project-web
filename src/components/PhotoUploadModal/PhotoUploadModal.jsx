import React, { Component } from 'react';
import classes from './PhotoUploadModal.css';

class PhotoUploadModal extends Component {
  render() {
    if (this.props.show) {
      return (
        <div className={classes.PhotoUploadModal}>
          <h1>Upload Profile Picture</h1>
          <div className={classes.ChooseFileContainer}>
            <p>Choose a file or drag and drop</p>
          </div>
          <div className={classes.BioContainer}>
            <textarea name="bioText" placeholder="Write something interesting about yourself…" />
          </div>
          <footer>
            <button className={classes.CancelBtn} onClick={this.props.onCancel} >Cancel</button>
            <button className={classes.SaveBtn}>Save</button>
          </footer>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default PhotoUploadModal;
