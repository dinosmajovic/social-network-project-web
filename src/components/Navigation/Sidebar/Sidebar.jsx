import React, { Component } from 'react';
import classes from './Sidebar.css';

import Backdrop from '../../UI/Backdrop/Backdrop.jsx';
import Logo from '../Logo/Logo.jsx';
import Searchbar from '../Searchbar/Searchbar.jsx';
import UserSettingsAvatar from '../UserSettingsAvatar/UserSettingsAvatar.jsx';
import UserSettings from '../../UI/UserSettings/UserSettings';

class Sidebar extends Component {
    render() {
        let attachedClasses = [classes.Sidebar, classes.Close];
        if (this.props.open)
            attachedClasses = [classes.Sidebar, classes.Open]

        return (
            <div>
                <Backdrop 
                    show={this.props.open} 
                    clicked={this.props.closed} />
                <div className={attachedClasses.join(' ')}>
                    <Logo />
                    <Searchbar />
                    {/* <UserSettingsAvatar/> */}
                    <UserSettings clicked={this.props.closed}/>
                </div>
            </div>
        );
    }
}

export default Sidebar;
