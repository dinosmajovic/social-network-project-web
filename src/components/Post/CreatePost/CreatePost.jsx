import React, { Component } from 'react';
import classes from './CreatePost.css';
import { connect } from 'react-redux';
import { createPost } from '../../../actions/postActions';

import GalleryIcon from './icons/gallery.svg';

class CreatePost extends Component {
    state = {
        postText: ''
    }

    createPost = () => {
        this.props.createPost(this.props.user.id, this.state.postText);
        this.setState({
            postText: ''
        })
    }

    onTextareaChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className={classes.CreatePost}>
                <textarea
                    className={classes.PostText}
                    name="postText"
                    value={this.state.postText}
                    onChange={this.onTextareaChange}
                    placeholder="What's on your mind?" />
                <footer>
                    <img className={classes.GalleryIcon} src={GalleryIcon} alt="" />
                    <button disabled={!this.state.postText} onClick={this.createPost} className={classes.PostBtn}>Post</button>
                </footer>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.userPayload
})

export default connect(mapStateToProps, { createPost })(CreatePost);
