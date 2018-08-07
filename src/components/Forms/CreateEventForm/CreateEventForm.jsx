import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import {withRouter} from 'react-router-dom';

import classes from './CreateEventForm.css';

class CreateEventForm extends Component {
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
            <form className={classes.CreateEventForm} onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    label="Event name" 
                    placeholder="ex: Birthday party" 
                    component={this.renderField} 
                    type="text" />
                <Field 
                    name="details" 
                    label="Details" 
                    placeholder="Add more info" 
                    component={this.renderField} 
                    type="text" />
                <Field 
                    name="location" 
                    label="Where" 
                    placeholder="Add a place?" 
                    component={this.renderField} 
                    type="text" />
                <Field 
                    name="tickets" 
                    label="Tickets" 
                    placeholder="Add a link to buy tickets?" 
                    component={this.renderField} 
                    type="text" />
                <Field 
                    name="date" 
                    label="Date" 
                    placeholder="3/13/2018" 
                    component={this.renderField} 
                    type="text" />
                <Field 
                    name="time" 
                    label="Time" 
                    placeholder="Add a time?" 
                    component={this.renderField} 
                    type="text" />
                <footer>
                    <button className={classes.CancelBtn} onClick={this.cancelEvent} >Cancel</button>
                    <button className={classes.SubmitBtn} type="submit">Create event</button>
                </footer>
            </form>
        );
    }
}

CreateEventForm = reduxForm({
    form: 'createEvent'
})(CreateEventForm);

export default withRouter(CreateEventForm);
