import React from 'react';
import './style.scss';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  button: {
    background: '#F5F5F5',
    width: '330px',
    height: '180px',
    boxShadow: '0px 5px 7px #00000029',
  },
  text: {
    textTransform: 'capitalize',
  },
}));

const RedeemButton = () => {
  const classes = useStyles();
  return (
    <div>
      <Button size="large" className={classes.button}>
        <div className="redeem-wrapper">
          <Typography className={classes.text}>redeem</Typography>
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_452039.png"
            className="redeemImg"
          />
        </div>
      </Button>
    </div>
  );
};

export default RedeemButton;
