import React, { Component, useLayoutEffect } from "react";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.runGsapCode();
    }, 500);  // 500 milliseconds, adjust as needed
  }

  componentDidUpdate() {
    
    setTimeout(() => {
      this.runGsapCode();
    }, 500);  // 500 milliseconds, adjust as needed
  }

  runGsapCode() {
    const serviceName = this.props.serviceName;
    // Your gsap code here, e.g.:
  const mm = gsap.matchMedia();
  mm.add(
    {
      xs: '(min-width: 0px) and (max-width: 479px)',
      sm: '(min-width: 480px) and (max-width: 767px)',
      md: '(min-width: 768px) and (max-width: 1023px)',
      lg: '(min-width: 1024px) and (max-width: 1439px)',
      xl: '(min-width: 1440px) and (max-width: 1919px)',
      xxl: '(min-width: 1920px) and (max-width: 5000px)',
    },
    (c, serviceName) => {
      let { xs, sm, md, lg, xl, xxl } = c.conditions;
      const carouselIcons = document.querySelectorAll('[id^="carouselIcon"]');
     /* carouselIcons.forEach((icon, index) => {
          if (icon) { // Check if the button exists in the DOM
          console.log(`running inside number is: ${index+1}`)
        gsap.to(`ul.slick-dots li:nth-of-type(${index+1})`, {
        marginBottom: 0,
        transitionDuration: 0,
        scrollTrigger: {
          trigger: ".inner-data",
          start: "top top+=300px",
          end: "top+=500px top+=300px",
          scrub: true,
          //markers: true,
          id: "carousel icons"
        }
      }); 
    }
  });*/
  gsap.to(`.slick-list`, {
    paddingTop: 0,
    transitionDuration: 0,
    scrollTrigger: {
      trigger: `#${serviceName} .inner-data`,
      start: "top+=400px bottom-=500px",
      end: "top+=800px bottom-=500px",
      scrub: true,
      markers: true,
      id: "list"
    }
  });
    });
    // Revert the context when the component unmounts
    return () => mm.revert();
  }

  componentWillUnmount() {
    // Clean up GSAP or other things here
  }

  render() {
    const { serviceName, carouselData } = this.props; // Accept serviceName as a prop
    const { activeIndex } = this.state;

    const settings = {
      customPaging: (i) => {
        const isActive = i === activeIndex;
        return (
          <a className={`carousel-icon-${i}`} id="carouselIcon">
            <img src={`../../../../media/images/projects/${serviceName}/icon0${i + 1}${isActive ? '-active' : ''}.svg`} />
          </a>
        );
      },
      afterChange: (current) => {
        this.setState({ activeIndex: current });
      },
      dots: true,
      dotsClass: `#${serviceName} slick-dots slick-thumb`,
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