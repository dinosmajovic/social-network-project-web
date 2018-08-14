import React, { Component } from 'react';
import classes from './UserSettings.css';

import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import UserIcon from '../UserIcon/UserIcon';

class UserSettings extends Component {
    logoutUser = () => {
        if (this.props.clicked)
            this.props.clicked();
        this.props.logoutUser();
    }

    render() {
        return (
            <div className={classes.UserSettings}>
                <div className={classes.IconContainer}>
                    <UserIcon image={this.props.avatarPhoto.actort} width="100px" height="100px" />
                </div>
                <span className={classes.Username}>{this.props.name}</span>
                <button className={classes.SettingsBtn}>Settings</button>
                <button className={classes.LogoutBtn} onClick={this.logoutUser}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    avatarPhoto: state.auth.user,
    name: state.auth.user.unique_name
})

export default connect(mapStateToProps, { logoutUser })(UserSettings);
