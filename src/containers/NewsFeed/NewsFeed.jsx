import React, { Component } from 'react';
import classes from './NewsFeed.css';
import CreatePost from '../../components/Post/CreatePost/CreatePost';

class NewsFeed extends Component {
    render() {
        return (
            <div className={classes.NewsFeed}>
                <CreatePost />
            </div>
        );
    }
}

export default NewsFeed;
