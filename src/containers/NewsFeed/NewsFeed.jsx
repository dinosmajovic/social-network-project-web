import React, { Component } from 'react';
import classes from './NewsFeed.css';

import logo from '../../assets/images/logo@2x.png';

class NewsFeed extends Component {
    render() {
        return (
            <div className={classes.NewsFeed}>
                <img style={{opacity: "0.3"}} src={logo} alt=""/>
            </div>
        );
    }
}

export default NewsFeed;
