import React from 'react';
import './style.scss';
import Avatar from '@material-ui/core/Avatar';
import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles (theme => ({
  name: {
    fontSize: '21px',
  },
  address: {
    fontSize: '15px',
    color: '#273238',
  },
  avatar: {
    width: '110px',
    height: '110px',
  },
  comment: {
      marginTop: '10px',
      fontSize: '20px',
  }
}));

const Comment = (props) => {
  const classes = useStyles ();
  return (
    <div className="commentWrapper">
      <div className="firstComp">
        <Avatar className={classes.avatar} />
        <div className="info">
          <Typography className={classes.name}>{props.UserName}</Typography>
          <Typography className={classes.address}>{props.location}</Typography>
        </div>
      </div>
      <div className="secondComp">
        <div className="rate">Ratings</div>
        <Typography className={classes.comment}>{props.comment}</Typography>
      </div>
    </div>
  );
};

export default Comment;
