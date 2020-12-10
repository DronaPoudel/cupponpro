import React, { Fragment } from 'react';
import TextField from '@material-ui/core/TextField';

// icons
import { MdSearch } from 'react-icons/md';

// styles
import './SearchBar.styles.scss';

// hooks
import useWindowViewport from '../../utils/hooks/WindowViewport';

const SearchBar = () => {
  const { width } = useWindowViewport();

  // const textFieldLabel = width > 500 ? 'Search for Cupons, businesses and food' : 'Search';
  const textFieldLabel = width > 500 ? 'Search Cupons' : 'Search';

  return (
    <Fragment>
      {/* <div className="searchBarWrapper"> */}
        <form className="searchbarForm" noValidate autoComplete="off">
          <MdSearch className="search-icon" />
          <TextField id="standard-basic" label={textFieldLabel} />
        </form>
      {/* </div> */}
    </Fragment>
  );
};

export default SearchBar;
