import React, { Component } from 'react';
import classes from './ProfileInfo.css';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import UserIcon from '../UI/UserIcon/UserIcon.jsx';
import RenderIf from '../../Helpers/RenderIf';
import { PulseLoader } from 'react-spinners';
import { getUser } from '../../actions/userActions';
import Ionicon from 'react-ionicons';

class ProfileInfo extends Component {
  state = {
    user: {}
  }

  componentDidMount = () => {
    this.props.getUser(/[^/]*$/.exec(this.props.location.pathname)[0]);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ user: nextProps.user })
    }
  }

  render() {
    const { user } = this.props;
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
            <Ionicon 
              icon="md-create" 
              className={classes.UploadPhotoIcon} 
              onClick={this.props.onClick}
              fontSize="18px"
              color="#666" />
            <h1>{user.username}</h1>
            <span className={classes.AtUser}>@{user.username}</span>
            <footer>
              <div className={classes.Followers}>
                <span className={classes.Name}>Followers</span>
                <span className={classes.Value}>1,024</span>
              </div>
              <div className={classes.Following}>
                <span className={classes.Name}>Following</span>
                <span className={classes.Value}>658</span>
              </div>
              <div className={classes.Posts}>
                <span className={classes.Name}>Posts</span>
                <span className={classes.Value}>21</span>
              </div>
            </footer>
          </RenderIf>
        </div>
        <div className={classes.ProfilePhotos}>
          {/* TODO: Change condition and photos to photos from API */}
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
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </main>
            <Link to={'/user/' + this.props.match.params.id + '/photos'} className={classes.SeeAllBtn}>See All</Link>
          </RenderIf>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.userPayload
})

export default connect(mapStateToProps, { getUser })(withRouter(ProfileInfo));
