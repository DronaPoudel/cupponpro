import React from 'react';
import './style.scss';
import Card from '@material-ui/core/Card';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  root: {
    width: '588px',
    height: '215px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: '21px',
    marginLeft: '25px',
  },
  icon: {
    width: '26px',
    height: '19px',
  },
}));
const ClientInfo = () => {
  const classes = useStyles ();
  return (
    <div className="mainWrapper">
      <Card className={classes.root}>
        <Typography className={classes.text}>
          <PhoneIphoneIcon className={classes.icon} /> +977 9818828634
        </Typography>
        <Typography className={classes.text}>
          <EmailIcon className={classes.icon} /> user@email.com
        </Typography>
        <Typography className={classes.text}>
          <RoomIcon className={classes.icon} /> Buddhanagar, Kathmandu, Nepal
        </Typography>
      </Card>
    </div>
  );
};

export default ClientInfo;
