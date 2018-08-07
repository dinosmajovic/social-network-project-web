import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import classes from './RegisterForm.css';

class RegisterForm extends Component {
    renderField = ({placeholder, type, label, input}) => (
        <div>
            <label>{label}</label>
            <input {...input} placeholder={placeholder} type={type} />
        </div>
    );

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className={classes.RegisterForm} onSubmit={handleSubmit}>
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
                <button type="submit">Register</button>
            </form>
        );
    }
}

RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm);

export default RegisterForm;
