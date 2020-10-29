import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// material
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

// styles
import './BoxCard.styles.scss';

const BoxCard = ({ cardBody, background, border, dotWidth, title }) => {
  return (
    <Fragment>
      <h2> {title} </h2>
    <div className='boxCard'>
      <Box component='span' m={1}>
        <Card className='BoxCardWrapper'>
          <Paper
            elevation={0}
            square
            style={{
              background: background,
              borderTopColor: border,
              borderRightColor: border,
              borderBottomColor: border,
              borderLeftColor: background,
            }}
          />
          <CardContent className='cardContent'> {cardBody} </CardContent>
          <Paper
            elevation={1}
            square
            className='circleRight'
            style={{
              background: background,
              borderTopColor: border,
              borderRightColor: border,
              borderBottomColor: border,
              borderLeftColor: background,
            }}
          />
          <div className='cardDots' style={{ width: dotWidth }}>
            <hr className='new2' />
          </div>
        </Card>
      </Box>
    </div>
    </Fragment>
  );
};

BoxCard.propTypes = {
  background: PropTypes.string,
  border: PropTypes.string,
  dotWidth: PropTypes.string,
};

BoxCard.defaultProps = {
  background: '#FFFFFF',
  border: '#eeeeee',
  dotWidth: '15rem',
};

export default BoxCard;
