import React, { Fragment } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#EC555C',
    width: '100%',
    textTransform: 'capitalize',
    fontSize: '16px',
    margin: '0rem !important',
    padding: '2px',
    borderRadius: '0px 0px 5px 5px',
    '&:hover': {
      backgroundColor: '#EC555C',
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const CollectButton = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <ColorButton
        variant='contained'
        color='primary'
        className={classes.margin}>
        Collect
      </ColorButton>
    </Fragment>
  );
};

export default CollectButton;
