import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import classes from './LoginForm.css';

class LoginForm extends Component {
    renderField = ({placeholder, type, label, input}) => (
        <div>
            <label>{label}</label>
            <input {...input} placeholder={placeholder} type={type} />
        </div>
    );

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className={classes.LoginForm} onSubmit={handleSubmit}>
                <Field 
                    name="username" 
                    label="Username" 
                    placeholder="exampleuser" 
                    component={this.renderField} 
                    type="text" />
                <Field 
                    name="password" 
                    label="Password" 
                    placeholder="••••••••••••" 
                    component={this.renderField} 
                    type="password" />
                <button type="submit">Login</button>
            </form>
        );
    }
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginForm;
