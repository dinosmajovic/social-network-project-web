import React from 'react';
import classes from './Sidebar.css';

import Backdrop from '../../UI/Backdrop/Backdrop.jsx';
import Logo from '../Logo/Logo.jsx';
import Searchbar from '../Searchbar/Searchbar.jsx';
import UserSettings from '../../UI/UserSettings/UserSettings';
import DashboardNavigation from '../../DashboardNavigation/DashboardNavigation';

const Sidebar = props => {
    let attachedClasses = [classes.Sidebar, classes.Close];
    if (props.open)
        attachedClasses = [classes.Sidebar, classes.Open]

    return (
        <div>
            <Backdrop 
                show={props.open} 
                clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <Logo />
                <Searchbar />
                <DashboardNavigation clicked={props.closed} />
                <UserSettings clicked={props.closed} />
            </div>
        </div>
    );
}

export default Sidebar;
