import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Landing';
import Landing from './components/Landing';
import TheMan from './components/TheMan';
import TheWork from './components/TheWork';
import TheCall from './components/TheCall';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/man" component={TheMan} />
        <Route path="/works" component={TheWork} />
        <Route path="/call" component={TheCall} />
      </Switch>
    </Router>
  );
};

export default Routes;
