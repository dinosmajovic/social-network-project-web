import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import {withRouter} from 'react-router-dom';

import classes from './CreateGroupForm.css';

class CreateGroupForm extends Component {
    renderField = ({placeholder, type, label, input}) => (
        <div>
            <label>{label}</label>
            <input {...input} placeholder={placeholder} type={type} />
        </div>
    );

    cancelEvent = () => {
        this.props.history.goBack();
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form className={classes.CreateGroupForm} onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    label="Group name" 
                    placeholder="ex: Sarajevo Car Meet" 
                    component={this.renderField} 
                    type="text" />
                <Field 
                    name="description" 
                    label="Description" 
                    placeholder="Group description" 
                    component={this.renderField} 
                    type="text" />
                <Field 
                    name="email" 
                    label="Email" 
                    placeholder="ex: mygroup@gmail.com" 
                    component={this.renderField} 
                    type="email" />
                <Field 
                    name="website" 
                    label="Website" 
                    placeholder="ex: www.mygroup.com" 
                    component={this.renderField} 
                    type="text" />
                <Field 
                    name="street" 
                    label="Street" 
                    placeholder="Example street" 
                    component={this.renderField} 
                    type="text" />
                <Field 
                    name="city_town" 
                    label="City/Town" 
                    placeholder="Example city" 
                    component={this.renderField} 
                    type="text" />
                <footer>
                  <button className={classes.CancelBtn} onClick={this.cancelEvent} >Cancel</button>
                  <button className={classes.SubmitBtn} type="submit">Create group</button>
                </footer>
            </form>
        );
    }
}

CreateGroupForm = reduxForm({
    form: 'createGroup'
})(CreateGroupForm);

export default withRouter(CreateGroupForm);
