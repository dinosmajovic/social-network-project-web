import React, { Component } from 'react';
import classes from './UserSettings.css';

import { logoutUser } from '../../../actions/authActions';
import { connect } from 'react-redux';

class UserSettings extends Component {
    logout = () => {
        this.props.logoutUser();
    }

    render() {
        return (
            <div className={classes.UserSettings} >
                <div className={classes.UserIcon} onClick={this.logout}></div>
            </div>
        );
    }
};

export default connect(null, {logoutUser})(UserSettings);
