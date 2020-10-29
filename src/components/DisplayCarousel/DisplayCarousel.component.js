import React from 'react';
import './style.scss';
import {makeStyles} from '@material-ui/core/styles';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Typography} from '@material-ui/core';
import { FilterNone } from '@material-ui/icons';

const useStyles = makeStyles({
    text: {
        color: '#a62a22',
        fontSize: '29px',
    }
});

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  rows: 3,
  slidesPerRow: 1,
  nextArrow: <ArrowForwardIosIcon />,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesPerRow: 1,
        slidesToShow: 5,
        infinite: true,
        dots: false,
      },
      breakpoint: 1285,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    }
  ],
};

const DisplayCarousel = () => {
  const classes = useStyles();
  return (
    <div className="carouselWrapper">
      <div>
        <Typography className={classes.text}>TOP DISCOUNT</Typography>
      </div>
      <Slider {...settings}>
        <div className="slide">
          <h3>1</h3>
        </div>
        <div className="slide">
          <h3>2</h3>
        </div>
        <div className="slide">
          <h3>3</h3>
        </div>
        <div className="slide">
          <h3>4</h3>
        </div>
        <div className="slide">
          <h3>5</h3>
        </div>
        <div className="slide">
          <h3>6</h3>
        </div>
        <div className="slide">
          <h3>7</h3>
        </div>
        <div className="slide">
          <h3>8</h3>
        </div>
        <div className="slide">
          <h3>9</h3>
        </div>
        <div className="slide">
          <h3>10</h3>
        </div>
        <div className="slide">
          <h3>11</h3>
        </div>
        <div className="slide">
          <h3>12</h3>
        </div>
        <div className="slide">
          <h3>13</h3>
        </div>
        <div className="slide">
          <h3>14</h3>
        </div>
        <div className="slide">
          <h3>15</h3>
        </div>
        <div className="slide">
          <h3>16</h3>
        </div>
        <div className="slide">
          <h3>17</h3>
        </div>
        <div className="slide">
          <h3>18</h3>
        </div>
        <div className="slide">
          <h3>19</h3>
        </div>
        <div className="slide">
          <h3>20</h3>
        </div>
        <div className="slide">
          <h3>21</h3>
        </div>
        <div className="slide">
          <h3>22</h3>
        </div>
        <div className="slide">
          <h3>23</h3>
        </div>
        <div className="slide">
          <h3>24</h3>
        </div>
        <div className="slide">
          <h3>25</h3>
        </div>
        <div className="slide">
          <h3>26</h3>
        </div>
        <div className="slide">
          <h3>27</h3>
        </div>
      </Slider>
    </div>
  );
};

export default DisplayCarousel;
