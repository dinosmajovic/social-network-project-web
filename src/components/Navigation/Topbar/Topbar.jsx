import React from 'react';
import classes from './Topbar.css';

import Logo from '../Logo/Logo.jsx';
import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle.jsx';
import Searchbar from '../Searchbar/Searchbar.jsx';
import UserSettingsAvatar from '../UserSettingsAvatar/UserSettingsAvatar.jsx';

const Topbar = props => (
    <div className={classes.Topbar}>
        <Logo />
        <div className={classes.DesktopSearchbar}><Searchbar /></div>
        <div className={classes.DesktopAvatar}><UserSettingsAvatar /></div>
        <SidebarToggle clicked={props.sidebarToggleClicked} />
    </div>
);

export default Topbar;
