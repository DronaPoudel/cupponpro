import React from 'react';
import PropTypes from 'prop-types';

// material styles
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  outlined: {
    borderWidth: '5px',
  },
}));

const CpButton = ({
  bntIcon,
  btnText,
  handleButtonPressed,
  primary,
  secondary,
  width,
  btnbackground,
  textColor,
}) => {
  const classes = useStyles();

  if (!!primary) {
    return (
      <Button
        variant='contained'
        className='primaryButton'
        startIcon={bntIcon}
        style={{
          background: btnbackground ?? '#A62A22',
          color: textColor ?? '#FBFBFB',
        }}
        onClick={handleButtonPressed}>
        {btnText}
      </Button>
    );
  } else if (!!secondary) {
    return (
      <Button
        variant='outlined'
        className='primaryButton'
        startIcon={bntIcon}
        style={{
          background: 'transparent',
          color: textColor ?? '#586F7B',
          borderWidth: '2px',
        }}
        onClick={handleButtonPressed}>
        {btnText}
      </Button>
    );
  }
  //   default as primary button
  else
    return (
      <Button
        variant='contained'
        className='primaryButton'
        startIcon={bntIcon}
        style={{
          background: btnbackground ?? '#A62A22',
          color: textColor ?? '#FBFBFB',
        }}
        onClick={handleButtonPressed}>
        {btnText}
      </Button>
    );
};

CpButton.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  bntIcon: PropTypes.element,
  btnText: PropTypes.string,
  width: PropTypes.string,
  btnbackground: PropTypes.string,
  handleButtonPressed: PropTypes.func,
  textColor: PropTypes.string,
};

CpButton.defaultProps = {};

export default CpButton;
