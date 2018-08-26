import React from 'react';
import classes from './Searchbar.css';

import Ionicon from 'react-ionicons';

const Searchbar = () => (
    <div className={classes.Searchbar} >
        <input type="text" placeholder="Search..."/>
        <Ionicon 
            className={classes.SearchIcon} 
            icon="ios-search" 
            color="#a7a7a7" 
            fontSize="35px" />
    </div>
);

export default Searchbar;
