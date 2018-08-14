import React, { Component } from 'react';
import classes from './Post.css';
import RenderIf from '../../../Helpers/RenderIf';

import { connect } from 'react-redux';
import Moment from 'react-moment';

import MoreIcon from './icons/more.svg';
import HeartIcon from './icons/big-heart.svg';
import Ionicon from 'react-ionicons';

class Post extends Component {
    state = {
        postOptions: false
    }

    togglePostOptions = () => {
        this.setState({
            postOptions: !this.state.postOptions
        })
    }

    render() {
        let textClasses = [classes.PostText]
        if (this.props.photo) {
            textClasses.push(String(classes.TextWithImage))
        }

        return (
            <div className={classes.Post}>
                <header>
                    <span className={classes.Avatar}></span>
                    <div className={classes.Info}>
                        <h3 className={classes.Name}>{this.props.name}</h3>
                        <Moment className={classes.Timestamp} fromNow>{this.props.timeStamp}</Moment>
                    </div>
                    <img onClick={this.togglePostOptions} src={MoreIcon} className={classes.MoreIcon} alt="" />
                    <RenderIf condition={this.state.postOptions}>
                        <div className={classes.PostOptions}>
                            <RenderIf condition={this.props.userId == this.props.user.nameid}>
                                <Ionicon onClick={() => this.props.toggleModal('edit')} icon="ios-brush" size="16px" color="#666" />
                                <Ionicon icon="ios-trash" size="16px" color="#c0392b" />
                            </RenderIf>
                            <Ionicon icon="ios-bulb" size="16px" color="#f39c12" />
                        </div>
                    </RenderIf>
                </header>
                <main>
                    <p className={textClasses.join(' ')}>{this.props.postText}</p>
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
                        <img src={HeartIcon} />
                        <span className={classes.LikesNum}>{this.props.likesNum}</span>
                    </div>
                </footer>
            </div >
        );
    }
}

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps, {})(Post);
