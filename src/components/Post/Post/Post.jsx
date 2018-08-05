import React, { Component } from 'react';
import classes from './Post.css';
import RenderIf from '../../../Helpers/RenderIf';

import MoreIcon from './icons/more.svg';
import HeartIcon from './icons/big-heart.svg';

class Post extends Component {
    render() {
        let textClasses = [classes.PostText]
        if (this.props.photo) {
            textClasses.push(String(classes.TextWithImage))
        }
        console.log(textClasses)
        return (
            <div className={classes.Post}>
                <header>
                    <span className={classes.Avatar}></span>
                    <div className={classes.Info}>
                        <h3 className={classes.Name}>{this.props.name}</h3>
                        <p className={classes.Timestamp}>{this.props.timeStamp}</p>
                    </div>
                    <img src={MoreIcon} className={classes.MoreIcon} alt=""/>
                </header>
                <main>
                    <p className={textClasses.join(' ')}>{this.props.postText}</p>
                    <RenderIf condition={this.props.photo}>
                        <img className={classes.Image} src={this.props.photo} alt=""/>
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
            </div>
        );
    }
}

export default Post;
