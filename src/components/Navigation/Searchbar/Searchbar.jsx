import React, { Component } from 'react';
import classes from './Searchbar.css';
import Ionicon from 'react-ionicons';

class Searchbar extends Component {
    render() {
        return (
            <div className={classes.Searchbar} >
                <input type="text" placeholder="Search..."/>
                <Ionicon className={classes.SearchIcon} icon="ios-search" color="#a7a7a7" fontSize="22px" />
            </div>
        );
    }
}

export default Searchbar;
