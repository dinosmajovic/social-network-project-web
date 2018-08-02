import React, { Component } from 'react';
import classes from './UserSettings.css';

class UserSettings extends Component {
    render() {
        return (
            <div className={classes.UserSettings} >
                <div className={classes.UserIcon}></div>
            </div>
        );
    }
}

export default UserSettings;
