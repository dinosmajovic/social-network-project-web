import React, { Component } from 'react';
import classes from './PersonToFollow.css';

import FollowIcon from './icons/follow.svg';
import CheckIcon from './icons/check.svg';

class PersonToFollow extends Component {
    render() {
        return (
            <li className={classes.PersonToFollow}>
                <span className={classes.Avatar}></span>
                <div>
                    <h4 className={classes.Name}>{this.props.name}</h4>
                    <p className={classes.Mutual}>{this.props.mutual} mutual friends</p>
                </div>
                <img className={classes.Btn} src={FollowIcon} alt=""/>
            </li>
        );
    }
}

export default PersonToFollow;
