import React, { Fragment } from 'react';
// import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";

// icons
import { MdSearch } from 'react-icons/md';
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import FlagIcon from "@material-ui/icons/Flag";

// styles
import './SearchBar.styles.scss';

// hooks
import useWindowViewport from '../../utils/hooks/WindowViewport';

const SearchBar = () => {
  const { width } = useWindowViewport();

  const textFieldLabel = width > 500 ? 'Search for Cupons' : 'Search';
  return (
    <Fragment>
      <div className="searchBarWrapper">
        <form className="searchbarForm" noValidate autoComplete="off">
          <MdSearch className="search-icon" />
          <TextField id="standard-basic" label={textFieldLabel} />
        </form>
      </div>
    </Fragment>
  );
};

export default SearchBar;
