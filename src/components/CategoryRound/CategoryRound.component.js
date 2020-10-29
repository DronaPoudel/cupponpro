import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// styles
import './style.scss';

// slider
import Slider from 'react-slick';

// json
import categoryItemJson from '../../stories/Json/RoundedCategoryItem.json';

// redux get categories
import { getCategories } from '../../redux/actions/getCategoriesAction';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  initialSlide: 0,
  speed: 3000,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        height: '100%',
        width: '100%',
        autoplay: true,
      },
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        height: '100%',
        width: '100%',
        autoplay: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
  ],
};

const CategoryRound = ({ categoryItems, getCategories }) => {
  useEffect(() => {
    getCategories();
  }, []);

  console.log(categoryItems);
  return (
    <Slider {...settings}>
      {categoryItems?.map((category) => (
        <div className='roundedCategory-wrapper'>
          <div className='container'>
            <div className='icon-container'>
              <img
                src={'https://image.flaticon.com/icons/svg/3075/3075977.svg'}
                className='icon'
              />
            </div>
            <span className='name'>{category.name}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getCategories: (data) => dispatch(getCategories(data)),
});

const mapStateToProps = (state) => ({
  categoryItems: state.getCategories.categories,
});
CategoryRound.propTypes = {
  categoryItems: PropTypes.object,
};

CategoryRound.defaultProps = {
  categoryItems: categoryItemJson,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryRound);
