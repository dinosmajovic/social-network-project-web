import React, { Component } from 'react';
import classes from './Register.css';

import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

import RegisterForm from '../../components/Forms/RegisterForm/RegisterForm.jsx';
import Image from './images/image.png';

class Register extends Component {
  onRegisterFormSubmit = values => {
    this.props.registerUser(values, this.props.history);
  }

  render() {
    return (
      <div className={classes.Register}>
        <div className={classes.RegisterContainer}>
          <h1>Create Account</h1>
          <RegisterForm onSubmit={this.onRegisterFormSubmit} />
          <p>Already have an account? <Link to="/">Sign in</Link></p>
        </div>
        <div className={classes.ImageContainer}>
          <img src={Image} alt=""/>
        </div> 
      </div>
    );
  }
}

export default connect(null, {registerUser})(withRouter(Register));
