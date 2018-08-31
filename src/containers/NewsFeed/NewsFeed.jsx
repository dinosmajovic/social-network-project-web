import React, { Component } from 'react';
import classes from './NewsFeed.css';
import { connect } from 'react-redux';

import { getFeed } from '../../actions/userActions';
import CreatePost from '../../components/Post/CreatePost/CreatePost';
import Post from '../../components/Post/Post/Post';
import { PulseLoader } from 'react-spinners';


class NewsFeed extends Component {
    state = {
        userFeed: {}
    }

    componentDidMount() {
        this.props.getFeed(this.props.currentUser.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.userFeed) {
            this.setState({ userFeed: nextProps.userFeed })
        }
    }

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

        const { userFeed } = this.props;

        let postsToReturn = <PulseLoader
            sizeUnit={"px"}
            size={15}
            color={'#000'}
            loading={true}
        />

        if (this.state.userFeed !== null) {
            if (Object.keys(this.state.userFeed).length !== 0) {
              postsToReturn = this.state.userFeed.map(post => (
                <Post
                  toggleModal={this.toggleModal}
                  userId={post.userId}
                  name={post.userId}
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
            <div className={classes.NewsFeed}>
                <CreatePost />
                {postsToReturn}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.user,
    userFeed: state.user.userFeed
})

export default connect(mapStateToProps, { getFeed })(NewsFeed);
