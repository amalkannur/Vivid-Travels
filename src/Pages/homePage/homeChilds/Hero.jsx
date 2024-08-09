import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home.scss"

export default function SimpleSlider() {
  var hero_settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3200,
    slidesToScroll: 1,
  };
  return (
    <Slider className="Hero" {...hero_settings}>


        <div className="carousel-item active  slide-1">
            <div className="slide-content"> 
                <h1> Travel  Dubai Like Never Before </h1>
                <button className=' yellow-btn' href=""> View Packages</button>
            </div>
        </div>
     
     
      <div>
        <h3>2</h3>
      </div>
    
    </Slider>
  );
}