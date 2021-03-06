import React, { Component } from 'react';
import classes from './Post.css';
import RenderIf from '../../../Helpers/RenderIf';

import { connect } from 'react-redux';
import Moment from 'react-moment';
import { editPost } from '../../../actions/postActions';
import axios from 'axios';
import UserIcon from '../../UI/UserIcon/UserIcon.jsx';
import MoreIcon from './icons/more.svg';
import HeartIcon from './icons/big-heart.svg';
import Ionicon from 'react-ionicons';
import { API } from '../../../constants';

class Post extends Component {
    state = {
        postOptions: false,
        editPost: false,
        editPostText: this.props.postText,
        user: {}
    }

    componentDidMount() {
        axios.get(API + '/users/' + this.props.userId, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.jwtToken
            }
        })
            .then(res => this.setState({ user: res.data }))
            .catch(err => console.log(err.data));
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    togglePostOptions = () => {
        this.setState({
            postOptions: !this.state.postOptions
        })
    }

    toggleEditPost = () => {
        this.setState({
            editPost: !this.state.editPost,
            editPostText: this.props.postText
        })
    }

    editPostHandler = e => {
        if (e.key === 'Enter') {
            this.props.editPost(this.props.id, this.props.user.id, this.state.editPostText);
            this.toggleEditPost();
        }
    }

    render() {
        let textClasses = [classes.PostText]
        if (this.props.photo) {
            textClasses.push(String(classes.TextWithImage))
        }
        return (
            <div className={classes.Post}>
                <header>
                    <UserIcon image={this.state.user.photoUrl} width="40px" height="40px" />
                    <div className={classes.Info}>
                        <h3 className={classes.Name}>{this.state.user.username}</h3>
                        <Moment className={classes.Timestamp} fromNow>{this.props.timeStamp}</Moment>
                    </div>
                    <img onClick={this.togglePostOptions} src={MoreIcon} className={classes.MoreIcon} alt="" />
                    <RenderIf condition={this.state.postOptions}>
                        <div className={classes.PostOptions} onClick={this.togglePostOptions}>
                            <RenderIf condition={this.props.currentUser.id == this.state.user.id}>
                                <Ionicon onClick={this.toggleEditPost} icon="md-create" size="16px" color="#A7A7A7" />
                                <Ionicon onClick={() => this.props.toggleModal('delete', this.props.id)} icon="ios-trash" size="16px" color="#A7A7A7" />
                            </RenderIf>
                            <Ionicon icon="ios-bulb" size="16px" color="#A7A7A7" />
                        </div>
                    </RenderIf>
                </header>
                <main>
                    <RenderIf condition={this.state.editPost}>
                        <textarea
                            value={this.state.editPostText}
                            name="editPostText"
                            onChange={this.handleInputChange}
                            className={classes.EditPostArea}
                            onKeyPress={this.editPostHandler} />
                        <Ionicon onClick={this.toggleEditPost} className={classes.CloseEdit} icon="ios-close" color="#444" fontSize="27px" />
                    </RenderIf>
                    <RenderIf condition={!this.state.editPost}>
                        <p className={textClasses.join(' ')}>{this.props.postText}</p>
                    </RenderIf>
                    <RenderIf condition={this.props.photo}>
                        <img className={classes.Image} src={this.props.photo} alt="" />
                    </RenderIf>
                </main>
                <footer>
                    <textarea
                        name="commentText"
                        className={classes.CommentText}
                        rows="1"
                        placeholder="Add Comment..."></textarea>
                    <div className={classes.LikeContainer}>
                        <img src={HeartIcon} alt="" />
                        <span className={classes.LikesNum}>{this.props.likesNum}</span>
                    </div>
                </footer>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.userPayload,
    currentUser: state.auth.user
})

export default connect(mapStateToProps, { editPost })(Post);
