// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

import React, { Fragment } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import DiscountbrandData from '../../stories/Json/PartnersCarousel.json';

import './style.scss';

import { PlainCoupon } from '../../components/PlainCoupon';

const SuperSlider = ({ SupSliderItems }) => {
  const settings = {
    dots: true,
    // className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 4,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
  };

  return (
    <div className='Super-discounts'>
      <h2>Top Discounts</h2>
      <Slider {...settings} className='slideContainer'>
        {DiscountbrandData?.map((DiscountItems) => {
          return (
            // <img src={DiscountItems.logo} className="brandLogo" />
            // <PopularCard />
            <PlainCoupon />
          );
        })}
      </Slider>
    </div>
  );
};
export default SuperSlider;
