import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

// routes
import Routes from './config/routes';

const App = () => {
  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
};

export default withRouter(App);
