import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full my-8 h-4/6 min-h-screen ">
      <Slider {...settings}>
        <div className="px-4 ">
          <img
            src="https://thumbs.dreamstime.com/b/special-offer-price-tag-sign-paper-against-rustic-red-painted-barn-wood-55863934.jpg"
            alt="Slide 1"
            className="w-full"
          />
        </div>
        <div className="px-4">
          <img
            src="https://img.freepik.com/free-vector/special-offer-modern-sale-banner-template_1017-20667.jpg"
            alt="Slide 2"
            className="w-full"
          />
        </div>
        <div className="px-4">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2006512574/display_1500/stock-vector-sale-banner-template-design-with-geometric-background-big-sale-special-offer-up-to-off-super-2006512574.jpg"
            alt="Slide 3"
            className="w-full"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
