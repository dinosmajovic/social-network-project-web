import React, { Component } from 'react';
import classes from './Sidebar.css';
import Logo from '../Logo/Logo.jsx';
import Backdrop from '../../UI/Backdrop/Backdrop.jsx';
import Searchbar from '../Searchbar/Searchbar.jsx';
import UserSettings from '../UserSettings/UserSettings.jsx';

class Sidebar extends Component {
    render() {
        let attachedClasses = [classes.Sidebar, classes.Close];
        if (this.props.open) {
            attachedClasses = [classes.Sidebar, classes.Open]
        }
        return (
            <div>
                <Backdrop 
                    show={this.props.open} 
                    clicked={this.props.closed} />
                <div className={attachedClasses.join(' ')}>
                    <Logo />
                    <Searchbar />
                    <UserSettings />
                </div>
            </div>
        );
    }
}

export default Sidebar;
