import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom'
import classes from './Landing.css';

import RenderIf from '../../Helpers/RenderIf';

import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../actions/authActions';

import Logo from '../../assets/images/logo-icon.svg';
import Image from '../../assets/images/image.png';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm';

class Landing extends Component {
    state = {
        errors: null,
        registerShow: false
    } 

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    onLoginFormSubmit = values => {
        this.props.loginUser(values)
    }

    onRegisterFormSubmit = values => {
        this.props.registerUser(values);
    }

    toggleRegister = () => {
        this.setState({
            registerShow: !this.state.registerShow
        })
    }

    render() {
        const { errors } = this.state;

        return (
            <div className={classes.Landing}>
                <Redirect to="/" />
                <RenderIf condition={!this.state.registerShow}>
                    <div className={classes.LoginContainer}>
                        <img className={classes.Logo} src={Logo} alt="Mopsters"/>
                        <h2>Welcome to</h2>
                        <h1>mopsters</h1>
                        <LoginForm onSubmit={this.onLoginFormSubmit} />
                        <p>Don't have an account? <span onClick={this.toggleRegister}>Sign Up</span></p>
                    </div>
                </RenderIf>
                <RenderIf condition={this.state.registerShow}>
                    <div className={classes.RegisterContainer}>
                        <img className={classes.Logo} src={Logo} alt="Mopsters"/>
                        <h2>Register as a</h2>
                        <h1>mopster</h1>
                        <RegisterForm onSubmit={this.onRegisterFormSubmit} />
                        <p>Already have an account? <span onClick={this.toggleRegister}>Login</span></p>
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

export default connect(mapStateToProps, {loginUser, registerUser})(withRouter(Landing));
