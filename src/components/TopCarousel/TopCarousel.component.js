import React, {Component} from 'react';
import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TopCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: true,
  };
  return (
      <Slider className="slide" {...settings}>
        <div>
          <img className="slides" src="hero.png"></img>
        </div>
        <div>
          <h3><img className="slides" src="banner-img2.png"></img></h3>
        </div>
        <div>
          <h3><img className="slides" src="banner-img3.png"></img></h3>
        </div>
      </Slider>
  );
};

export default TopCarousel;