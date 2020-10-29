import React from 'react';
import PartnerbrandData from '../../stories/Json/PartnersCarousel.json';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// styles 
import './style.scss';



//   https://www.youtube.com/watch?v=4fCr1IepJRw 

  const PartnersCarousel = () => {
    const settings = {
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear",
      pauseOnHover: true,
    };
      // console.log (PartnerbrandData, 'logo');
      return (
          <div className = "BrandCarousel">
            <h2>Supporting Partners</h2>
            <Slider {...settings} className="slideContainer">
            {PartnerbrandData?.map(brandItems => {
              return(
            // <h3> Hello from partner Carousel </h3>
            <img src={brandItems.logo} alt = {brandItems.branditems_description} className="brandlogo" />
  
              )
            })}
            </Slider>
          </div>
      );
  }


//   return (
//     <Slider className="slide" {...settings}>
//       <div>
//         <img className="slides" src="hero.png"></img>
//       </div>
//       <div>
//         <h3><img className="slides" src="banner-img2.png"></img></h3>
//       </div>
//       <div>
//         <h3><img className="slides" src="banner-img3.png"></img></h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//     </Slider>
// );
// };

  export default PartnersCarousel;