import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import classes from './Landing.css';

import RenderIf from '../../Helpers/RenderIf';

import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../actions/authActions';

import Logo from '../../assets/images/logo-icon.svg';
import Image from '../../assets/images/image.png';

class Landing extends Component {
    state = {
        username: '',
        rusername: '',
        password: '',
        rpassword: '',
        remail: '',
        errors: {},
        registerShow: false
    } 

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onLoginFormSubmit = (e) => {
        e.preventDefault();

        const userData = {
            "username": this.state.username,
            "password": this.state.password
        }

        this.props.loginUser(userData)
    }

    showRegister = () => {
        this.setState({
            registerShow: true
        })
    }

    showLogin = () => {
        this.setState({
            registerShow: false
        })
    }

    render() {
        const { errors } = this.state;

        return (
            <div className={classes.Landing}>
                <RenderIf condition={!this.state.registerShow}>
                    <div className={classes.LoginContainer}>
                        <img className={classes.Logo} src={Logo} alt="Mopsters"/>
                        <h2>Welcome to</h2>
                        <h1>mopsters</h1>
                        <form onSubmit={this.onLoginFormSubmit}>
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder="example@email.com"
                                name="username"
                                value={this.state.username}
                                onChange={this.onChange} />
                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder="••••••••••••" 
                                name="password"
                                value={this.state.password}
                                onChange={this.onChange} />
                            <button type="submit" className={classes.SubmitBtn}>Login</button>
                        </form>
                        <p>Don't have an account? <a href="#" onClick={this.showRegister}>Sign Up</a></p>
                    </div>
                </RenderIf>
                <RenderIf condition={this.state.registerShow}>
                    <div className={classes.RegisterContainer}>
                        <img className={classes.Logo} src={Logo} alt="Mopsters"/>
                        <h2>Register as a</h2>
                        <h1>mopster</h1>
                        <form onSubmit={this.onRegisterFormSubmit}>
                            <label>Username</label>
                            <input 
                                type="text" 
                                placeholder="jhondoe"
                                name="rusername"
                                value={this.state.rusername}
                                onChange={this.onChange} />
                            <label>Email</label>
                            <input 
                                type="text" 
                                placeholder="example@email.com"
                                name="remail"
                                value={this.state.remail}
                                onChange={this.onChange} />
                            <label>Password</label>
                            <input 
                                type="password" 
                                placeholder="••••••••••••" 
                                name="rpassword"
                                value={this.state.rpassword}
                                onChange={this.onChange} />
                            <button type="submit" className={classes.SubmitBtn}>Register</button>
                        </form>
                        <p>Already have an account? <a href="#" onClick={this.showLogin}>Login</a></p>
                    </div>
                </RenderIf>
                <div className={classes.ImageContainer}>
                    <img src={Image} alt=""/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {loginUser})(withRouter(Landing));
