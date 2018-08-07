import React, { Component } from 'react';
import classes from './NewsFeed.css';
import CreatePost from '../../components/Post/CreatePost/CreatePost';
import Post from '../../components/Post/Post/Post';

class NewsFeed extends Component {
    render() {
        const posts = [
            {
                name: "Muriz Suljević",
                postText: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                timeStamp: "1 day ago",
                likesNum: 128
            },
            {
                name: "Dino Smajovic",
                postText: "A little Dog that wags his tail.",
                timeStamp: "2 days ago",
                photo: "http://www.pethealthnetwork.com/sites/default/files/why-does-my-vet-want-a-poop-sample-186258997.jpg",
                likesNum: 25
            }
        ];

        let postsToReturn = posts.map(post => (
            <Post 
                name={post.name}
                photo={post.photo}
                postText={post.postText} 
                timeStamp={post.timeStamp}
                likesNum={post.likesNum} />
        ));

        return (
            <div className={classes.NewsFeed}>
                <CreatePost />
                {postsToReturn}
            </div>
        );
    }
}

export default NewsFeed;
