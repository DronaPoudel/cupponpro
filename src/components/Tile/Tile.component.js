import React from 'react';
import PropTypes from 'prop-types';

// material styles
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  tileWrapper: {
    width: 'fit-content',
    height: 'fit-content',
  },
});

const Tile = ({ tileContent }) => {
  const classes = useStyles();

  return (
    <Card className={classes.tileWrapper}>
      <CardContent>{tileContent}</CardContent>
    </Card>
  );
};

Tile.defaultProps = {
  tileContent: 'this is tile component',
};
Tile.propTypes = {};

export default Tile;
