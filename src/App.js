import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Page from './Page'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from='/' to="/dashboard" />
          <Route path='/' component={Page} />
        </Switch>
      </Router>
    );
  }
}

export default App;
