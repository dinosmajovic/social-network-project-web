import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';

import { connect } from 'react-redux'
import store from './store';

import Layout from './components/Layout/Layout.jsx';
import Landing from './containers/Landing/Landing.jsx';
import Dashboard from './containers/Dashboard/Dashboard.jsx'

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const user = localStorage.user;
  store.dispatch(setCurrentUser(JSON.parse(user)));
}

class App extends Component {
  render() {
    return (
      <Layout show={this.props.isAuthenticated}>
            <Route path="/" component={this.props.isAuthenticated ? Dashboard : Landing} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default withRouter(
  connect(mapStateToProps, {})(App)
);