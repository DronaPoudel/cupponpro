import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// material
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';

// styles
import './Rating.styles.scss';

// icons
import { IoMdStar } from 'react-icons/io';

const StyledRating = withStyles({
  iconFilled: {
    background: '#a63622',
    borderRadius: '3px',
  },
  iconEmpty: {
    background: '#9f9f9f',
    borderRadius: '3px',
  },
  decimal: {
    marginLeft: '2px',
    marginRight: '2px',
  },
})(Rating);

const RatingItems = ({ rating, totalRating }) => {
  const ratingContainer = () => {
    return (
      <div className='ratingWrapper'>
        <IoMdStar size={18} color='#FFFFFF' />
      </div>
    );
  };

  return (
    <Fragment>
      <StyledRating
        readOnly
        name='customized-color'
        defaultValue={rating}
        precision={0.5}
        icon={ratingContainer()}
      />
    </Fragment>
  );
};

RatingItems.propTypes = {
  rating: PropTypes.number,
  totalRating: PropTypes.number,
};

RatingItems.defaultProps = {
  rating: 3.5,
  totalRating: 5,
};

export default RatingItems;
