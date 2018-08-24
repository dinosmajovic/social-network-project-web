import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

import {withRouter} from 'react-router-dom';

import classes from './EditPostForm.css';

class EditPostForm extends Component {
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
            <form className={classes.EditPostForm} onSubmit={handleSubmit}>
                <Field 
                    name="name" 
                    label="Group name" 
                    placeholder="ex: Sarajevo Car Meet" 
                    component={this.renderField} 
                    type="text" />
                <footer>
                  <button className={classes.CancelBtn} onClick={this.cancelEvent} >Cancel</button>
                  <button className={classes.SubmitBtn} type="submit">Save post</button>
                </footer>
            </form>
        );
    }
}

EditPostForm = reduxForm({
    form: 'editPost'
})(EditPostForm);

export default withRouter(EditPostForm);
