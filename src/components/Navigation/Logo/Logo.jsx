import React from 'react';
import classes from './Logo.css';

import MopstersLogo from '../../../assets/images/logo.png';

const logo = () => (
    <div className={classes.Logo} >
        <img src={MopstersLogo} alt="Mopsters"/>
    </div>
);

export default logo;
