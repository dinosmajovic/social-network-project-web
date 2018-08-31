import React, { Component } from 'react';
import classes from './UserSettings.css';

import { connect } from 'react-redux';
import { logoutUser } from '../../../actions/authActions';
import { withRouter } from 'react-router';
import UserIcon from '../UserIcon/UserIcon';

class UserSettings extends Component {
    logoutUser = () => {
        if (this.props.clicked)
            this.props.clicked();
        this.props.logoutUser();
    }

    goToProfile = () => {
        this.props.history.push('/user/' + this.props.currentUser.id)
        this.props.clicked();
    }

    render() {
        return (
            <div className={classes.UserSettings}>
                <div className={classes.IconContainer}>
                    <UserIcon image={this.props.currentUser.photoUrl} width="100px" height="100px" />
                </div>
                <span onClick={this.goToProfile} className={classes.Username}>{this.props.currentUser.username}</span>
                <button className={classes.SettingsBtn}>Settings</button>
                <button className={classes.LogoutBtn} onClick={this.logoutUser}>Logout</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.user
})

export default connect(mapStateToProps, { logoutUser })(withRouter(UserSettings));
