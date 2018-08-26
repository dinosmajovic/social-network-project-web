import React from 'react';
import classes from './CreateEvent.css';
import CreateEventForm from '../Forms/CreateEventForm/CreateEventForm';

const CreateEvent = () => (
    <div className={classes.CreateEvent}>
        <CreateEventForm />            
    </div>
)

export default CreateEvent;