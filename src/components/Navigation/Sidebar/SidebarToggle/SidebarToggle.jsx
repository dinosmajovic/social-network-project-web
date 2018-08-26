import React from 'react';
import Ionicon from 'react-ionicons'
import classes from './SidebarToggle.css';

const sidebarToggle = props => {
    const toggleClasses = [classes.MobileOnly, classes.SidebarToggle];
    return (
        <div className={toggleClasses.join(' ')} onClick={props.clicked}>
            <Ionicon icon="ios-menu" fontSize="35px" color="#585858"/>
        </div>
    );
}

export default sidebarToggle;
