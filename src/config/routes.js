import React from 'react';

// routeer
import { Route, Switch } from 'react-router-dom';

// components
import Home from '../containers/Home';
import PageAbout from '../containers/About';
import { PageNotFound } from '../components/ErrorPage';

const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/aboutUs' exact component={PageAbout} />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
