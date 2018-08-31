import React, { Component } from 'react';
import classes from './PhotoUploadModal.css';
import Dropzone from 'react-dropzone'

import { uploadProfilePhoto } from '../../actions/userActions';
import { connect } from 'react-redux'

class PhotoUploadModal extends Component {
  state = {
    photo: []
  }

  onDrop = (photo) => {
    this.setState({
      photo
    })
  }

  savePhoto = () => {
    this.props.uploadProfilePhoto(this.props.user.id, this.state.photo);
    this.setState({
      photo: []
    });
    this.props.onCancel();
  }

  onCancel = () => {
    this.setState({
      photo: []
    })
    this.props.onCancel();
  }

  render() {
    if (this.props.show) {
      return (
        <div className={classes.PhotoUploadModal}>
          <h1>Upload Profile Picture</h1>
          <div className={classes.ChooseFileContainer}>
            <Dropzone onDrop={this.onDrop}>
              <p>Upload a photo</p>
            </Dropzone>
            <ul>
              {
                this.state.photo.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </div>
          <div className={classes.BioContainer}>
            <textarea name="bioText" placeholder="Write something interesting about yourself…" />
          </div>
          <footer>
            <button className={classes.CancelBtn} onClick={this.onCancel} >Cancel</button>
            <button className={classes.SaveBtn} onClick={this.savePhoto}>Save</button>
          </footer>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  user: state.user.userPayload
})

export default connect(mapStateToProps, { uploadProfilePhoto })(PhotoUploadModal);
