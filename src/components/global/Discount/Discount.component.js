import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Discount.styles.scss';

// material
import Typography from '@material-ui/core/Typography';

const Discount = ({ discount }) => {
  return <Typography className='DiscountWrapper'>{discount}</Typography>;
};

Discount.propTypes = {
  discount: PropTypes.string,
};

Discount.defaultProps = {
  discount: '25% Discount',
};
export default Discount;
