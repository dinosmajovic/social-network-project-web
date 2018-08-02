import React, { Component } from 'react';
import classes from './UserSettingsAvatar.css';
import RenderIf from '../../../Helpers/RenderIf';
import UserSettings from '../../UI/UserSettings/UserSettings.jsx';

class UserSettingsAvatar extends Component {
    state = {
        userSettings: false
    }

    toggleUserSettings = () => {
        this.setState(prevState => {
            return {userSettings: !prevState.userSettings}    
        })
    }

    render() {
        return [
            <div className={classes.UserSettingsAvatar} >
                <div className={classes.UserIcon} onClick={this.toggleUserSettings}></div>
            </div>,
            <RenderIf condition={this.state.userSettings}>
                <UserSettings />
            </RenderIf>
        ];
    }
};

export default UserSettingsAvatar;
