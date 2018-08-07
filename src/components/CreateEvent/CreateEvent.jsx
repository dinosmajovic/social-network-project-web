import React, { Component } from 'react';
import classes from './CreateEvent.css';
import CreateEventForm from '../Forms/CreateEventForm/CreateEventForm';

class CreateEvent extends Component {
    render() {
        return (
            <div className={classes.CreateEvent}>
                <CreateEventForm />
            </div>
        );
    }
}

export default CreateEvent;
