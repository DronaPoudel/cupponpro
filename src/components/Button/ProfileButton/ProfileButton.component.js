import React from 'react';
import './style.scss';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Typography} from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import Avatar from '@material-ui/core/Avatar';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#F5F5F5',
    width: '715px',
    height: '491px',
    boxShadow: '0px 5px 7px #00000029',
    display: 'flex',
  },
  label: {
    height: '100%',
    display: 'flex',
    alignItems: 'start',
  },

  body1: {
    lineHeight: '5rem',
    fontSize: '29px',
    textTransform: 'capitalize',
  },
  avatar: {
    width: '189px',
    height: '189px',
  },
  icon: {
    width: '31px',
    height: '31px',
  },
  contact: {
    fontSize: '21px',
    textTransform: 'capitalize',
  },
}));

const ProfileButton = () => {
  const classes = useStyles();
  return (
    <Button
      size="large"
      classes={{
        root: classes.root,
        label: classes.label,
      }}
    >
      <div className="comp">
        <div className="topcomp">
          <div className="avtext">
            <Avatar className={classes.avatar} />
            <Typography
              classes={{
                body1: classes.body1,
              }}
            >
              jennie doe
            </Typography>
          </div>
          <CreateOutlinedIcon className={classes.icon} />
        </div>
        <div className="contact">
          <Typography className={classes.contact}>
            <PhoneIphoneIcon />
            +977 9818828634
          </Typography>
          <Typography className={classes.contact}>
            <EmailIcon />
            user@email.com
          </Typography>
        </div>
        <div className="location">
          <Typography className={classes.contact}>
            <RoomIcon />
            Buddhanagar, Kathmandu, Nepal
          </Typography>
        </div>
      </div>
    </Button>
  );
};

export default ProfileButton;
