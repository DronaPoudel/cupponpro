import {makeStyles, Typography} from '@material-ui/core';
import React from 'react';

import './style.scss';

const useStyles = makeStyles((theme) => ({
  root:{
    width: '30px',
  },
    help: {
        fontSize: '28px',
        color: '#203a53',
        textAlign: 'left',
    },
    visit: {
        fontSize: '18px',
        color: '#203a53',
        textAlign: 'left',
    },
}));

const HelpCenter = () => {
  const classes = useStyles();
  return (
    <div className="mainWrapper">
      <Typography className={classes.help}>Help Center</Typography>
      <Typography className={classes.visit}>Visit our help center</Typography>
      <img
        src="https://img.freepik.com/free-vector/support-with-icons_1212-151.jpg?size=338&ext=jpg"
        className="img"
      />
    </div>
  );
};

export default HelpCenter;
