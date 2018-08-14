import React, { Component } from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
import { registerUser, loginUser } from '../../actions/authActions';

import Login from '../Login/Login.jsx';
import Register from '../Register/Register.jsx';

class Landing extends Component {
    state = {
        errors: []
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    render() {
        return (
            <div>
                <Redirect to="/" />
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {loginUser, registerUser})(withRouter(Landing));
