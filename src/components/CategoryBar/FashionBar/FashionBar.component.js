import React, {useState, useEffect} from 'react';
import './style.scss';
import TextField from '@material-ui/core/TextField';
import {GoSettings} from 'react-icons/go';
import {BsSearch} from 'react-icons/bs';
import {Typography} from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import {makeStyles} from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Slide} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import RoomIcon from '@material-ui/icons/Room';

const useStyles = makeStyles((theme) => ({
  elevation: {
    boxShadow: 'none',
    width: '35%',
  },
}));

const FashionBar = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  const clickHandler = () => {
    setShowSearch(!showSearch);
  };

  const hoverEnter = () => {
    setShowSearch(true);
  };

  const hoverOutHandler = () => {
    setShowSearch(false);
  };

  const classes = useStyles();

  return (
    <div className="cat-bar">
      <div className="category-name" onClick={hoverOutHandler}>
        <Typography className="cat-name">Fashion</Typography>
      </div>
      <span className="searchFilter-wrapper">
        <div className="accordionMap">
          <Accordion className={classes.elevation}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className="filter-wrapper" onClick={hoverOutHandler}>
                <GoSettings className="go-icons" />
                <Typography className="text">Filter</Typography>
              </div>
            </AccordionSummary>

            <Divider />
            <AccordionActions>
              <Button size="small">Cancel</Button>
              <Button size="small" color="primary">
                Save
              </Button>
            </AccordionActions>
          </Accordion>
          <div className="mapView">
            <RoomIcon />
            <Typography className="text" onClick={hoverOutHandler}>Map View</Typography>
          </div>
        </div>
        <div className="search-wrapper">
          {showSearch && (
            <Slide direction="left" in={showSearch} mountOnEnter unmountOnExit>
              <TextField
                type="search"
                className={classes.searchBox}
                placeholder="Search for cuppons"
              />
            </Slide>
          )}
          <BsSearch
            onMouseEnter={hoverEnter}
            onClick={clickHandler}
            className="icn"
          />
        </div>
      </span>
    </div>
  );
};

export default FashionBar;
