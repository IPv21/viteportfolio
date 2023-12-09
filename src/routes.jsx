import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App.jsx';
import Landing from './components/Landing.jsx';
import TheMan from './components/TheMan.jsx';
import TheWork from './components/TheWork.jsx';
import TheCall from './components/TheCall.jsx';

const Routes = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Switch>
        <Route path="/" exact element={<App />}>
          <Route index element={<Landing />} />
          <Route path="/man" element={<TheMan />} />
          <Route path="/work" element={<TheWork />} />
          <Route path="/call" element={<TheCall />} />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;