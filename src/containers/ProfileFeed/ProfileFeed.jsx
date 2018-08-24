import React, { Component } from 'react';
import classes from './ProfileFeed.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, getUserPosts } from '../../actions/userActions';
import { PulseLoader } from 'react-spinners';
import Post from '../../components/Post/Post/Post.jsx';
import CreatePost from '../../components/Post/CreatePost/CreatePost.jsx';
import Backdrop from '../../components/UI/Backdrop/Backdrop.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';
import RenderIf from '../../Helpers/RenderIf.jsx';
import Ionicon from 'react-ionicons';
import { editPost, deletePost } from '../../actions/postActions';

class ProfileFeed extends Component {
  state = {
    user: {},
    userPosts: {},
    showModal: false,
    modalType: '',
    modalPostText: '',
    modalPostTextNew: '',
    modalPostId: null
  }

  componentDidMount = () => {
    this.props.getUser(/[^/]*$/.exec(this.props.location.pathname)[0]);
    this.props.getUserPosts(/[^/]*$/.exec(this.props.location.pathname)[0]);
    setTimeout(() => {
      if (this.state.userPosts.length === 0) {
        this.setState({ userPosts: null })
      }
    }, 3000)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState({ user: nextProps.user })
    }
    if (nextProps.userPosts) {
      this.setState({ userPosts: nextProps.userPosts })
    }
  }

  userChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  deletePostHandler = () => {
    this.props.deletePost(this.state.modalPostId, this.state.user.id);
    this.toggleModal();
  }

  toggleModal = (type, postId, postText) => {
    if (this.state.showModal) {
      this.setState({
        modalType: '',
        showModal: false,
        modalPostText: '',
        modalPostId: '',
        modalPostTextNew: ''
      })
    } else {
      this.setState({
        modalType: type,
        showModal: !this.state.showModal,
        modalPostText: postText,
        modalPostId: postId
      })
    }
  }

  render() {
    const { user } = this.props

    let postsToReturn = <PulseLoader
      sizeUnit={"px"}
      size={15}
      color={'#000'}
      loading={true}
    />

    if (this.state.userPosts !== null) {
      if (Object.keys(this.state.userPosts).length !== 0) {
        postsToReturn = this.state.userPosts.map(post => (
          <Post
            toggleModal={this.toggleModal}
            userId={post.userId}
            name={user.username}
            photo={false}
            postText={post.content}
            timeStamp={post.datePublished}
            id={post.id}
            likesNum={post.likesNum} />
        ));
      }
    } else {
      postsToReturn = <p>No posts</p>
    }
    return (
      <React.Fragment>
        <Backdrop clicked={this.toggleModal} show={this.state.showModal} />
        <Modal show={this.state.showModal}>
          <RenderIf condition={this.state.modalType === 'delete'}>
            <header className={classes.ModalHeader}>
              <h3>Delete Post</h3>
              <Ionicon onClick={this.toggleModal} icon="ios-close" color="#000" fontSize="30px" />
            </header>
            <h1 className={classes.DeletePostModalText}>This will be removed from your timeline. You can edit this post if you want to change something.</h1>
            <footer className={classes.ModalFooter}>
              <button className={classes.DeletePostNoBtn} onClick={this.toggleModal}>Cancel</button>
              <button className={classes.DeletePostYesBtn} onClick={this.deletePostHandler}>Delete Post</button>
            </footer>
          </RenderIf>
        </Modal>
        <div className={classes.ProfileFeed}>
          <CreatePost />
          {postsToReturn}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.userPayload,
  userPosts: state.user.userPosts
})

export default connect(mapStateToProps, { getUser, getUserPosts, editPost, deletePost })(withRouter(ProfileFeed));
