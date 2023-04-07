import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../constants/sliderData";
import { Link } from "react-router-dom";

const PopularSlider = () => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }

]
  };
  return (
    <>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Link to={'/single'} key={item.id} className="px-2 relative">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt="logo"
                  className="rounded-xl w-[500px] h-[300px] transition-all duration-300 hover:scale-[1.2]"
                />
              </div>
              <div>
                <h4 className="text-2xl absolute top-5 left-2 bg-white px-2 rounded-r-xl text-red-500 font-bold">
                  {item.title}
                </h4>
              </div>
            </Link>
          );
        })}
      </Slider>
    </>
  );
};

export default PopularSlider;
