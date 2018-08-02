import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';

import { connect } from 'react-redux'
import store from './store';

import Layout from './components/Layout/Layout.jsx';
import Landing from './containers/Landing/Landing.jsx';
import NewsFeed from './containers/NewsFeed/NewsFeed.jsx';

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
      <Layout show={this.props.isAuthenticated}>
          <Switch>
            <Route path="/" component={this.props.isAuthenticated ? NewsFeed : Landing} />
          </Switch>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, {})(App);
