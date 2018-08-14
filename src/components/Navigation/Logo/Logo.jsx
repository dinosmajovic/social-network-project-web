import React from 'react';
import classes from './Logo.css';
import {Link} from 'react-router-dom';

import MopstersLogo from '../../../assets/images/logo.png';

const logo = () => (
    <div className={classes.Logo} >
        <Link className={classes.LogoLink} to="/"><img src={MopstersLogo} alt="Mopsters"/></Link>
    </div>
);

export default logo;
