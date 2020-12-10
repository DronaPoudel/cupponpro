import React from 'react'
// import logo from '../../../src/assets/images/CP_Logo/cp.png'
import logo from '../../../src/assets/images/CP_Logo/CB.png'

import { AppBar, ToolBar, Grid, InputBase } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
// import { MdSearch } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';

import LoginSignUp from './LoginSignup.component';
import { SearchBar } from '../../components/SearchBar/';
import './Header.styles.scss';

const useStyles = makeStyles ({
    root: {
      backgroundColor: '#eee',
    },
    searchInput:{
      opacity: '0.6',
      padding: '0 8px',
      backgroundColor: '#f2f2f2',
      width: '60%',

      '&:hover':{
        backgroundColor: '#fff',
        width: '94%',
        transition: 'width 1s',
        border: '1px solid #c28857'
      }
    }
  });

export default function Header() {
    const classes = useStyles();
    return (
        <AppBar position = "fixed" className = {classes.root}>
            <toolbar style = {{color:'#000'}}> 
            {/* <header className="App-header"> */}

                <Grid container alignItems = "center" style = {{}}>
                    <Grid item lg={3} md = {4} xs = {6}>
                      <img src={logo} className="App-logo" alt="logo" style = {{width: '124px'}} />
                    </Grid>
                    
                    <Grid item md = {4} xs={12}>
                        <Grid item >
                        {/* <form className={classes.root} noValidate autoComplete="off">
                          <TextField id="filled-basic" label="Filled" variant="filled" />
                        </form> */}
                            <InputBase
                                placeholder = "Search coupons here"
                                className= {classes.searchInput}
                                startAdornment = {<SearchIcon/>}/>
                            {/* <SearchBar /> */}

                        </Grid>
                    </Grid>

                    <Grid item md={4} xs = {6} className = "id"style = {{position:'flex', justifyContent: 'space-between'}}> 
                        
                        <LoginSignUp />         
                         
                    </Grid>
                    
                </Grid>
{/* </header> */}

              {/* <SearchBar /> */}
            </toolbar>
        </AppBar>
    )
}