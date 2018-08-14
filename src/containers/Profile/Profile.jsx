import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUser, getUserPosts } from '../../actions/userActions';
import Post from '../../components/Post/Post/Post.jsx';

import classes from './Profile.css';
import { withRouter } from "react-router-dom";
import RenderIf from '../../Helpers/RenderIf';
import { PulseLoader } from 'react-spinners';
import UserIcon from '../../components/UI/UserIcon/UserIcon';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop.jsx';

class Profile extends Component {
  state = {
    user: {},
    userPosts: {},
    showModal: false,
    modalType: ''
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ user: nextProps.user })
    }
    if (nextProps.userPosts) {
      this.setState({ userPosts: nextProps.userPosts })
    }
  }

  componentDidMount = () => {
    this.props.getUser(this.props.match.params.id);
    this.props.getUserPosts(this.props.match.params.id);
  }

  toggleModal = (type) => {
    this.setState({
      modalType: type,
      showModal: !this.state.showModal
    })
  }

  render() {
    const { user } = this.props

    let postsToReturn = <PulseLoader
      sizeUnit={"px"}
      size={15}
      color={'#000'}
      loading={true}
    />

    if (Object.keys(this.state.userPosts).length !== 0) {
      postsToReturn = this.state.userPosts.map(post => (
        <Post
          toggleModal={this.toggleModal}
          userId={post.userId}
          name={user.username}
          photo={false}
          postText={post.content}
          timeStamp={post.datePublished}
          likesNum={post.likesNum} />
      ));
    }

    return (
      <React.Fragment>
        <Backdrop clicked={this.toggleModal} show={this.state.showModal} />
        <Modal show={this.state.showModal}>
          <RenderIf condition={this.state.modalType === 'edit'}>
            Edit modal
          </RenderIf>
        </Modal>
        <RenderIf condition={Object.keys(this.state.user).length === 0}>
          <div className={classes.LoaderContainer}>
            <PulseLoader
              sizeUnit={"px"}
              size={15}
              color={'#000'}
              loading={true}
            />
          </div>
        </RenderIf>
        <RenderIf condition={Object.keys(this.state.user).length !== 0}>
          <div className={classes.Profile}>
            <div className={classes.ProfileInfo}>
              <UserIcon image={user.photoUrl} width="150px" height="150px" />
              <h1>{user.username}</h1>
              <h3>Gender: {user.gender}</h3>
              <h5>{user.city}, {user.country}</h5>
              <p>Bio: {user.bio}</p>
            </div>
            <div className={classes.ProfilePosts}>
              {postsToReturn}
            </div>
          </div>
        </RenderIf>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.userPayload,
  userPosts: state.user.userPosts
})

export default connect(mapStateToProps, { getUser, getUserPosts })(withRouter(Profile));