import React, { Component } from 'react';
import classes from './ProfilePhotos.css';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import RenderIf from '../../Helpers/RenderIf.jsx';
import Ionicon from 'react-ionicons';
import axios from 'axios';
import { API } from '../../constants';

class ProfilePhotos extends Component {
  state = {
    currentImage: 0,
    currentImageId: 0,
    editPhoto: false,
    isMain: false
  }

  openLightbox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      currentImageId: obj.photo.id,
      isMain: obj.photo.isMain,
      lightboxIsOpen: true,
      editPhoto: true
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
      editPhoto: false
    });
  }

  deletePhoto = () => {
    axios.delete(API + '/users/' + this.props.currentUser.id + '/photos/' + this.state.currentImageId, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwtToken
      }
    })
      .then(res => this.props.getUser(this.props.currentUser.id))
      .catch(err => console.log(err.data))

    this.closeLightbox();
  }

  setMainPhoto = () => {
    axios.post(API + '/users/' + this.props.currentUser.id + '/photos/' + this.state.currentImageId + '/setMain', null, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwtToken
      }
    })
      .then(res => {
        this.props.getUser(this.props.currentUser.id);
      })
      .catch(err => console.log(err.data))

    this.closeLightbox();
  }

  gotoPrevious = () => {
    const id = this.props.user.photos[this.state.currentImage - 1].id;
    this.setState({
      currentImage: this.state.currentImage - 1,
      currentImageId: id
    });
  }

  gotoNext = () => {
    const id = this.props.user.photos[this.state.currentImage + 1].id;
    this.setState({
      currentImage: this.state.currentImage + 1,
      currentImageId: id
    });
  }

  render() {
    console.log(this.state)
    let photosToReturn;
    if (Object.keys(this.props.user).length !== 0) {
      photosToReturn = this.props.user.photos.map(photo => (
        {
          src: photo.url,
          width: 1,
          height: 1,
          id: photo.id,
          isMain: photo.isMain
        }
      ))
    }

    let mainButtonClasses = [classes.SetMainBtn]
    if (this.state.isMain)
      mainButtonClasses.push(classes.IsMain);

    return (
      <div className={classes.ProfilePhotos}>
        <RenderIf condition={Object.keys(this.props.user).length !== 0}>
          <Gallery photos={photosToReturn} direction={"column"} onClick={this.openLightbox} />
        </RenderIf>
        <Lightbox images={photosToReturn}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          backdropClosesModal={true}
        />
        <RenderIf condition={this.props.currentUser.id == this.props.user.id}>
          <RenderIf condition={this.state.editPhoto}>
            <div className={classes.EditPhoto}>
              <Ionicon onClick={this.deletePhoto} icon="ios-trash" fontSize="30px" color="#ffffff" />
              <button onClick={this.setMainPhoto} className={mainButtonClasses.join(" ")}>Main</button>
              <p>{this.state.currentImageId}</p>
            </div>
          </RenderIf>
        </RenderIf>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.userPayload,
  currentUser: state.auth.user
})

export default connect(mapStateToProps, { getUser })(ProfilePhotos);
