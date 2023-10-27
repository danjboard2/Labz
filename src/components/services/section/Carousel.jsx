import React, { Component } from "react";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  render() {
    const { serviceName, carouselData } = this.props; // Accept serviceName as a prop
    const { activeIndex } = this.state;

    const settings = {
      customPaging: (i) => {
        const isActive = i === activeIndex;
        return (
          <a>
            <img src={`../../../../media/images/projects/${serviceName}/icon0${i + 1}${isActive ? '-active' : ''}.svg`} />
          </a>
        );
      },
      afterChange: (current) => {
        this.setState({ activeIndex: current });
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };
    return (
      <div>
        <div className="carouseldots"></div>
        <Slider {...settings}>
        {Object.values(carouselData || {}).map((item, index) => (
            <div key={index}>
              <h1 className="text-primary text-[40px] font-bold">{item.carouseltitle}</h1>
              <p className="text-white text-xl">{item.carouselcontent}</p>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}