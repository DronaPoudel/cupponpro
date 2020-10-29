import React from 'react';
import PropTypes from 'prop-types';

// styles
import './Description.styles.scss';

// material
import Typography from '@material-ui/core/Typography';

const Description = ({ description }) => {
  return <Typography className='DescriptionWrapper'>{description}</Typography>;
};

Description.propTypes = {
  description: PropTypes.string,
};

Description.defaultProps = {
  description:
    'You dont have passed the description props yet !. Please pass the description Props to disply here',
};
export default Description;
