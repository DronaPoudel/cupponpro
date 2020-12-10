import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputIcon from '@material-ui/icons/Input';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import './Header.styles.scss';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

  export default function LoginSignup() {
    const classes = useStyles();
    return (
            <>
            <Button style = {{fontSize: '0.8rem' }}
                variant="contained"
                color="primary"
                size="medium"
                className={classes.margin}
                // endIcon={<Icon></Icon>}
            >
                <InputIcon/> Login 
            </Button>

            <Button
                variant="contained"
                color="primary"
                size="medium"
                // className={classes.button}
                // endIcon={<Icon></Icon>}
            >
                <AccountBoxIcon/> Sign Up 
            </Button>
            </>
    )
  }