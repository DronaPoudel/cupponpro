import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";


// styles
import './PlainCoupon.styles.scss';

// custom components
import { PlainCard } from '../global/PlainCard';
import {BoxCard} from '../global/BoxCard';
// import {PlainCoupon} from "../../components/PlainCoupon";
import {Discount} from '../../components/global/Discount';


// material
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  rounded: {
    width: '100%',
    height: '100%',
    color: '#fff',
    backgroundColor: '#292929',
  },
  typography: {
    color: '#292929',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '2rem',
  },
}));
// const coupontitle = {this.props.title};

const PlainCoupon = ({ imageUrl, cupponTitle, title }) => {
  const classes = useStyles();

// document.createElement
// document.className
// document.querySelector
  const cardBody = () => {
    return (
      <div className='cardBodyWrapper'>
        <div className='TCImageWrapper'>

        <CardMedia  className={classes.media}> 
          <img srcSet={imageUrl} height={150} alt={'alt'} />
          {/* title="Contemplative Reptile" */}
          </CardMedia>
          
        </div>
        <div className='cardHeaderWrapper'>
          <Typography
            variant='h2'
            className={classes.typography}
            component='h2'>
          </Typography>
        </div>
        <div className='cardTextWrapper'>
        <Discount />

          {/* <Description description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor' /> */}
        </div>
        <br />
        
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 5
  };

  return (
        // <Fragment> 
      <div className = 'Cardbody-section' >
        <Slider {...settings}>

            <BoxCard cardBody={cardBody(title)} dotWidth='13rem'/>
            {/* <BoxCard cardBody={cardBody(title)} dotWidth='13rem' title = "Trending Coupons"/> */}
            
        </Slider>

      </div>
    // </Fragment>
  );
};

PlainCoupon.propTypes = {
  imageUrl: PropTypes.string,
  cupponTitle: PropTypes.string,
};

PlainCoupon.defaultProps = {
  imageUrl: 'https://i.ibb.co/6JL3NgC/Miniso-logo.png',
  cupponTitle: 'gym yoga pants',
};

export default PlainCoupon;


