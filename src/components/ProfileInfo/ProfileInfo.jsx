import React, { Component } from 'react';
import classes from './ProfileInfo.css';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import UserIcon from '../UI/UserIcon/UserIcon.jsx';
import RenderIf from '../../Helpers/RenderIf';
import { PulseLoader } from 'react-spinners';
import { getUser, followUser, unfollowUser } from '../../actions/userActions';
import Ionicon from 'react-ionicons';
import axios from 'axios';
import { API } from '../../constants';
import _ from 'lodash';

class ProfileInfo extends Component {
  state = {
    user: {},
    isFollowing: false,
    followers: 0,
    followed: 0
  }

  componentDidMount = () => {
    this.props.getUser(/[^/]*$/.exec(this.props.location.pathname)[0]);

    axios.post(API + '/users/' + this.props.currentUser.id + '/isFollowing/' + /[^/]*$/.exec(this.props.location.pathname)[0], null, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwtToken
      }
    })
      .then(res =>
        this.setState({
          isFollowing: res.data
        }))
      .catch(err => console.log(err))

    axios.get(API + '/users/' + /[^/]*$/.exec(this.props.location.pathname)[0] + '/followers', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwtToken
      }
    })
      .then(res =>
        this.setState({
          followers: _.size(res.data)
        }))

      .catch(err => console.log(err.data))


    axios.get(API + '/users/' + /[^/]*$/.exec(this.props.location.pathname)[0] + '/followed', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.jwtToken
      }
    })
      .then(res =>
        this.setState({
          following: _.size(res.data)
        }))

      .catch(err => console.log(err.data))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ user: nextProps.user })
    }
  }

  followUser = () => {
    this.props.followUser(this.props.currentUser.id, this.props.user.id);
    this.setState({
      isFollowing: true
    })
  }

  unfollowUser = () => {
    this.props.unfollowUser(this.props.currentUser.id, this.props.user.id);
    this.setState({
      isFollowing: false
    })
  }

  render() {
    const { user } = this.state;
    return (
      <div className={classes.ProfileInfoContainer}>
        <div className={classes.ProfileInfo}>
          <RenderIf condition={Object.keys(this.state.user).length === 0}>
            <div className={classes.LoaderContainer}>
              <PulseLoader
                sizeUnit={"px"}
                size={15}
                color={'#000'}
                loading={true} />
            </div>
          </RenderIf>
          <RenderIf condition={Object.keys(this.state.user).length !== 0}>
            <UserIcon image={user.photoUrl} width="136px" height="136px" />
            <RenderIf condition={user.id == this.props.currentUser.id}>
              <Ionicon
                icon="md-create"
                className={classes.UploadPhotoIcon}
                onClick={this.props.onClick}
                fontSize="18px"
                color="#666" />
            </RenderIf>
            <h1>{user.username}</h1>
            <RenderIf condition={user.id != this.props.currentUser.id}>
              <RenderIf condition={this.state.isFollowing}>
                <button className={classes.UnfollowBtn} onClick={this.unfollowUser}>Unfollow</button>
              </RenderIf>
              <RenderIf condition={!this.state.isFollowing}>
                <button className={classes.FollowBtn} onClick={this.followUser}>Follow</button>
              </RenderIf>
            </RenderIf>
            <span className={classes.AtUser}>@{user.username}</span>
            <footer>
              <div className={classes.Followers}>
                <span className={classes.Name}>Followers</span>
                <span className={classes.Value}>{this.state.followers}</span>
              </div>
              <div className={classes.Following}>
                <span className={classes.Name}>Following</span>
                <span className={classes.Value}>{this.state.following}</span>
              </div>
              <div className={classes.Posts}>
                <span className={classes.Name}>Posts</span>
                <span className={classes.Value}>{_.size(this.props.userPosts)}</span>
              </div>
            </footer>
          </RenderIf>
        </div>
        <div className={classes.ProfilePhotos}>
          <RenderIf condition={Object.keys(this.state.user).length === 0}>
            <div className={classes.LoaderContainer}>
              <PulseLoader
                sizeUnit={"px"}
                size={15}
                color={'#000'}
                loading={true} />
            </div>
          </RenderIf>
          <RenderIf condition={Object.keys(this.state.user).length !== 0}>
            <header>
              <h2>Photos</h2>
            </header>
            <main className={classes.PhotosContainer}>
              {user.photos ? user.photos.map(photo => (
                <div style={{ backgroundImage: "url(" + photo.url + ")" }} ></div>
              )) : null}
              <div></div>
              <div></div>
            </main>
            <Link to={'/user/' + this.props.user.id + '/photos'} className={classes.SeeAllBtn}>See All</Link>
          </RenderIf>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.userPayload,
  currentUser: state.auth.user,
  userPosts: state.user.userPosts
})

export default connect(mapStateToProps, { getUser, followUser, unfollowUser })(withRouter(ProfileInfo));
