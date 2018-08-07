import React, { Component } from 'react';
import classes from './CreateGroup.css';
import CreateGroupForm from '../Forms/CreateGroupForm/CreateGroupForm';

class CreateGroup extends Component {
    render() {
        return (
            <div className={classes.CreateGroup}>
                <CreateGroupForm />
            </div>
        );
    }
}

export default CreateGroup;
