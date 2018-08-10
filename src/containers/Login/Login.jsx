import React, { Component } from 'react';
import classes from './Login.css';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {loginUser} from '../../actions/authActions';

import LoginForm from '../../components/Forms/LoginForm/LoginForm.jsx';
import Logo from '../../assets/images/logo-icon.svg';
import Image from '../../assets/images/image.png';

class Login extends Component {
  onLoginFormSubmit = values => {
    this.props.loginUser(values)
  }

  render() {
    return (
      <div className={classes.Login}>
        <div className={classes.LoginContainer}>
          <img className={classes.Logo} src={Logo} alt="Mopsters"/>
          <h2>Welcome to</h2>
          <h1>mopsters</h1> 	
          <LoginForm onSubmit={this.onLoginFormSubmit} />
          <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        </div>
        <div className={classes.ImageContainer}>
          <img src={Image} alt=""/>
        </div>
      </div>
    );
  }
}

export default connect(null, {loginUser})(Login);
