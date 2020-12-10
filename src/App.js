import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import {createMuiTheme, CssBaseline} from '@material-ui/core';


// routes
import Routes from './config/routes';

// Theme Customization
const theme = createMuiTheme({
  palatte:{
    primary:{
      light: "#f97da2",
      main: "#f04f7f",
      dark: "#f90c53"
    },
    secondary:{
      light: "#e0ab7d",
      main: "#c28857",
      dark: "#da8238"
  }
}
})

const App = () => {
  return (
    <>
      <Routes />
      <CssBaseline />
    </>
  );
};

export default withRouter(App);
