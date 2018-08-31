import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classes from './UserSettingsAvatar.css';
import RenderIf from '../../../Helpers/RenderIf';
import UserSettings from '../../UI/UserSettings/UserSettings.jsx';
import UserIcon from '../../UI/UserIcon/UserIcon';

class UserSettingsAvatar extends Component {
    state = {
        userSettings: false
    }

    toggleUserSettings = () => {
        this.setState({
            userSettings: !this.state.userSettings
        })
    }

    goToProfile = () => {
        this.props.history.push('/user/' + this.props.user.id)
    }

    render() {
        return [
            <div className={classes.UserSettingsAvatar} >
                <span className={classes.Username} onClick={this.goToProfile} >{this.props.user.username}</span>
                <div className={classes.IconContainer} onClick={this.toggleUserSettings} >
                    <UserIcon image={this.props.user.photoUrl} width="40px" height="40px" />
                </div>
            </div>,
            <RenderIf condition={this.state.userSettings}>
                <UserSettings />
            </RenderIf>
        ];
    }
};

const mapStateToProps = state => ({
    user: state.auth.user
})

export default connect(mapStateToProps, {})(withRouter(UserSettingsAvatar));
