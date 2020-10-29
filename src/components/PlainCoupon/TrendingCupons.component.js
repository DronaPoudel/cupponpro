import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";

// material
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { Typography } from '@material-ui/core';

// styles
import './TrendingCupons.styles.scss';


// custom components
import { BoxCard } from '../../global/BoxCard';
import { CollectButton } from '../../Button';
import { Description } from '../../Description';
import { Discount } from '../../global/Discount';

const useStyles = makeStyles ((theme) => ({
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


    const TrendingCupons = ({ imageUrl, cupponTitle, title }) => {
    const classes = useStyles();


    const settings = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
      };


      const cardBody = () => {
        return (
            <div className='cardBodyWrapper'>
                <div className='TCImageWrapper'>
                <Avatar variant='rounded' className={classes.rounded}>
                    <img srcSet={imageUrl} height={115} alt={'alt'} />
                </Avatar>
                </div>
                <div className='cardHeaderWrapper'>
                <Typography
                    variant='h2'

                    className={classes.typography}
                    component='h2'>
                    {cupponTitle}

                    {}
                </Typography>
                </div>
                <div className='cardTextWrapper'>
                <Description description='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor' />
                </div>
                <br />
                <div className='cardBottomWrapper'>
                <Discount />
                <CollectButton />
                </div>
            </div>
    //     );
    //   };
    
      
    
          );
      };
      return(
        <div className = "section-trendingCoupons">
            <Slider {...settings}>

            <BoxCard cardBody = {cardBody(title)} />
            <BoxCard cardBody = {cardBody(title)} />
            <BoxCard cardBody = {cardBody(title)} />
            <BoxCard cardBody = {cardBody(title)} />
            <BoxCard cardBody = {cardBody(title)} />
            <BoxCard cardBody = {cardBody(title)} />
            <BoxCard cardBody = {cardBody(title)} />
            <BoxCard cardBody = {cardBody(title)} />

            </Slider>
        </div>

      )

};

TrendingCupons.propTypes = {
    imageUrl: PropTypes.string,
    cupponTitle: PropTypes.string,
  };

  TrendingCupons.defaultProps = {
    imageUrl: 'https://i.ibb.co/6JL3NgC/Miniso-logo.png',
    cupponTitle: 'gym yoga pants',
  };

export default TrendingCupons;