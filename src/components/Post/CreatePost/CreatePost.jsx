import React, { Component } from 'react';
import classes from './CreatePost.css';

class CreatePost extends Component {
    render() {
        return (
            <div className={classes.CreatePost}>
                <textarea className={classes.PostText} placeholder="What's on your mind?" />
                <footer>
                    <button className={classes.PostBtn}>Post</button>
                </footer>
            </div>
        );
    }
}

export default CreatePost;
