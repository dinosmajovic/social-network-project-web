import React, { Component } from 'react';
import classes from './Topbar.css';

import Logo from '../Logo/Logo.jsx';
import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle.jsx';
import Searchbar from '../Searchbar/Searchbar.jsx';
import UserSettings from '../UserSettings/UserSettings.jsx';

const Topbar = props => (
    <div className={classes.Topbar}>
        <Logo />
        <div className={classes.DesktopTopbar}>
            <Searchbar />
            <UserSettings />
        </div>
        <SidebarToggle clicked={props.sidebarToggleClicked} />
    </div>
);

export default Topbar;
