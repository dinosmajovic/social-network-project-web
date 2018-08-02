import React, { Component } from 'react';
import Layout from './components/Layout/Layout.jsx';
import {Route, Switch} from 'react-router-dom';

import Landing from './containers/Landing/Landing.jsx';
import Login from './containers/Login/Login.jsx';
import Mopsters from './containers/Mopsters/Mopsters.jsx';

class App extends Component {
  state = {
    isAuthenticated: false
  }

  render() {
    return (
      <Layout>
          <Switch>
            <Route path="/" 
              component={this.state.isAuthenticated ? Mopsters : Landing} />
          </Switch>
      </Layout>
    );
  }
}

export default App;
