import React, { Component } from 'react';
import classes from './PersonToFollow.css';

class PersonToFollow extends Component {
    state = {
        followed: false
    }

    followUser = () => {
        this.setState({
            followed: true
        })
    }

    render() {
        const btnClasses = [classes.FollowBtn];
        if (this.state.followed) {
            btnClasses.push(classes.clicked)
        }
        return (
            <li className={classes.PersonToFollow}>
                <span className={classes.Avatar}></span>
                <div>
                    <h4 className={classes.Name}>{this.props.name}</h4>
                    <p className={classes.Mutual}>{this.props.mutual} mutual friends</p>
                </div>
                <div onClick={this.followUser} className={btnClasses.join(" ")}>
                    <div></div>
                    <div></div>
                </div>
            </li>
        );
    }
}

export default PersonToFollow;
