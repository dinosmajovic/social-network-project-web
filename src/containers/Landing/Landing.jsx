import React, { Component } from 'react';
import classes from './Landing.css';

import Logo from '../../assets/images/logo-icon.svg';
import Image from '../../assets/images/image.png';

class Landing extends Component {
    render() {
        return (
            <div className={classes.Landing}>
                <div className={classes.LoginContainer}>
                    <img className={classes.Logo} src={Logo} alt="Mopsters"/>
                    <h2>Welcome to</h2>
                    <h1>mopsters</h1>
                    <form onSubmit={this.onFormSubmit}>
                        <label>Email</label>
                        <input type="text" placeholder="example@email.com"/>
                        <label>Password</label>
                        <input type="password" placeholder="••••••••••••" />
                        <button type="submit" className={classes.SubmitBtn}>Login</button>
                    </form>
                    <p>Don't have an account? <a href="#">Sign Up</a></p>
                </div>
                <div className={classes.ImageContainer}>
                    <img src={Image} alt=""/>
                </div>
            </div>
        );
    }
}

export default Landing;
