import React, { Component } from "react";
import Image from "next/image"

const slider = React.createRef();
const container = React.createRef();
const isTouchDevice = typeof document !== 'undefined' && 'ontouchstart' in document.documentElement;

export default class CustomButton extends Component {
    state = {
        count: 0, // Initialize count to zero
      };

  componentDidMount() {
    if (isTouchDevice) {
      document.addEventListener("touchmove", this.onDrag);
      document.addEventListener("touchend", this.stopDrag);
    } else {
      document.addEventListener("mousemove", this.onDrag);
      document.addEventListener("mouseup", this.stopDrag);
    }
    this.containerWidth = container.current.clientWidth - 50;
  }

  onDrag = (e) => {
    if (this.unmounted || this.state.unlocked) return;
    if (this.isDragging) {
      if (isTouchDevice) {
        this.sliderLeft = Math.min(
          Math.max(0, e.touches[0].clientX - this.startX),
          this.containerWidth
        );
      } else {
        this.sliderLeft = Math.min(
          Math.max(0, e.clientX - this.startX),
          this.containerWidth
        );
      }
      this.updateSliderStyle();
      // Calculate and update the count based on slider position
      const maxCount = 57; // Maximum count value
      const newCount = Math.round((this.sliderLeft / this.containerWidth) * maxCount);
      this.setState({ count: newCount });
      this.props.updateCount(Math.round(newCount));
    }
  };

  updateSliderStyle = () => {
    if (this.unmounted || this.state.unlocked) return;

            // Calculate the widths based on the slider's position
        const maxWidth = 4; // Initial maximum width
        const minWidth = 6; // Target minimum width
        const width = minWidth + (maxWidth - minWidth) * (this.sliderLeft / this.containerWidth);


        // Apply the calculated widths to the right-top and right-bottom elements
        const rightTop = document.querySelector('.right-top');
        const rightBottom = document.querySelector('.right-bottom');
        if (rightTop && rightBottom) {
          rightTop.style.width = width + 'px';
          rightBottom.style.width = width + 'px';      
        }
  // Calculate the midpoint of the slider
  const midpoint = this.containerWidth / 2;

  // Check if the slider is past the midpoint
  if (this.sliderLeft >= midpoint) {
    // Apply the final opacity (0) when the slider is 50% or more across
    const rightTop = document.querySelector('.right-top');
    const rightBottom = document.querySelector('.right-bottom');

    if (rightTop && rightBottom) {
     /* rightTop.style.opacity = 0;
      rightBottom.style.opacity = 0; */
    }

    // Remove the transition
    slider.current.style.transition = "none";
  } else {
    // Calculate the opacity change when the slider is 0% to 50% across
    const halfWidth = this.containerWidth / 2; // Half of the container width
    const completionPercentage = (this.sliderLeft / halfWidth) * 100; // Percentage of completion

    // Calculate the new opacity based on the completion percentage
    const initialOpacity = 1; // Initial opacity
    const opacity = initialOpacity - (completionPercentage / 100);

    // Apply the calculated opacities to the right-top and right-bottom elements
    const rightMiddle = document.querySelector('.right-middle');

    if (rightMiddle) {
      rightMiddle.style.opacity = opacity;
    }
  }
    // Remove the transition
    slider.current.style.transition = "none";

      // Calculate opacity based on the slider's position
      const maxOpacity = 1;
      const minOpacity = 0;
      const maxTextScale = 1.4;
      const minTextScale = 1;
      const opacity = minOpacity + (maxOpacity - minOpacity) * (this.sliderLeft / this.containerWidth);
      const textscale = minTextScale + (maxTextScale - minTextScale) * (this.sliderLeft / this.containerWidth);

      // Apply the calculated opacity to the rsbcText element
      const rsbcText = document.querySelector('.rsbcText');
      if (rsbcText) {
        rsbcText.style.opacity = opacity;
        rsbcText.style.scale = textscale;
      }
      const counter = document.querySelector('.counter');
      if (counter) {
        counter.style.opacity = opacity;
      }
        // Calculate border width based on the slider's position
        const maxBorderWidth = 6.5; // Initial maximum border width
        const minBorderWidth = 4; // Target minimum border width
        const borderWidth = maxBorderWidth - (maxBorderWidth - minBorderWidth) * (this.sliderLeft / this.containerWidth);

        // Apply the calculated border width to the logo-rect element
        const logoRect = document.querySelector('.logo-rect');
        if (logoRect) {
          logoRect.style.borderWidth = borderWidth + 'px';
  }
      // Calculate scale based on the slider's position
      const maxScale = 2;
      const minScale = 1;
      const scale = minScale + (maxScale - minScale) * (this.sliderLeft / this.containerWidth);

      const rectangle = document.querySelector('.pulsing-rectangle');
      if (rectangle) {
        rectangle.style.scale = scale;
      }

    if (!this.isDragging && this.sliderLeft !== this.containerWidth) {
      // Apply the CSS transition when not dragging and slider isn't at the end
      slider.current.style.transition = "left 0.5s ease";
    } else {
      slider.current.style.transition = "none"; // Remove transition when dragging or at the end
    }
    slider.current.style.left = this.sliderLeft + 50 + "px";
  };

  stopDrag = () => {
    if (this.unmounted || this.state.unlocked) return;
    if (this.isDragging) {
      this.isDragging = false;
      if (this.sliderLeft > this.containerWidth * 0.99) {
        this.sliderLeft = this.containerWidth;
        if (this.onSuccess) {
          this.onSuccess();
        }
      } else {
        // If not at the end, smoothly return to the start
        this.sliderLeft = 0;
        this.updateSliderStyle();
        if (this.props.onFailure) {
          this.props.onFailure();
        }
  
        // Gradually decrease the count back to zero over half a second
        const maxCount = 57; // Maximum count value
        const startCount = this.state.count;
        const duration = 500; // half a second
        const step = 1; // Decrease count by 1 in each step
        const steps = duration / step;
        let currentStep = 0;
  
        const countInterval = setInterval(() => {
          if (currentStep < steps) {
            const newCount = Math.max(0, startCount - (startCount / steps) * currentStep);
            this.setState({ count: Math.round(newCount) });
            this.props.updateCount(Math.round(newCount));
            currentStep++;
          } else {
            clearInterval(countInterval);
          }
        }, step);
      }
    }
  };

  startDrag = (e) => {
    if (this.unmounted || this.state.unlocked) return;
    this.isDragging = true;
    if (isTouchDevice) {
      this.startX = e.touches[0].clientX;
    } else {
      this.startX = e.clientX;
    }
  };

  onSuccess = () => {
    console.log("Slider Unlocked"); // Debug statement
    /* container.current.style.width = container.current.clientWidth + "px"; */
    this.setState({
      unlocked: true
    });
  };

  getText = () => {
    return this.state.unlocked
      ? this.props.text_unlocked || "Labz"
      : this.props.text || "Labz";
  };

  reset = () => {
    if (this.unmounted) return;
    this.setState({ unlocked: false }, () => {
      this.sliderLeft = 0;
      this.updateSliderStyle();
    });
    console.log("Slider Reset"); // Debug statement
  };

  componentWillUnmount() {
    // this.unmounted = true;
    console.log("Component tried to unmount"); // Debug statement
  }

  render() {
    console.log("Component Rendered"); // Debug statement
    return (
      <>
      <div className="slide-unlock relative w-[220px] mr-[172px]">
      <div className="ReactSwipeButton">
        <div
          className={
            "rsbContainer " +
            (this.state.unlocked ? "Unlocked" : "")
          }
          ref={container}
        >
          <div
            className="rsbcSlider z-100"
            ref={slider}
            onMouseDown={this.startDrag}
            style={{ background: this.props.color }}
            onTouchStart={this.startDrag}
            onSuccess={this.onSuccess}
          >

            <div className="rsbcSliderText arrow-right absolute -right-[120px] top-[20px] w-[46px]">
        <Image src="/media/images/arrow-right.png" width={46} height={20} alt={'Swipe right'}/>
      </div>

            { /* slider circle */}
            <div className=""></div>
            <div className="rsbcSliderCircle -z-20">
            <div className="pulsing-rectangle relative flex w-[59px] h-[62px] float-right">
            <div className="w-[59px] h-[62px] -z-[1] pointer-events-none"><p className="counter absolute left-[7px] top-[6px] text-[6px] font-bold text-[#fff]">{this.state.count}</p>
               <div className="logo-rect absolute block -z-[1] pointer-events-none w-[59px] h-[61px]">
                  <div className="right-top"></div>
                  <div className="right-bottom"></div>
                  <div className="right-middle"></div>
               </div>
            </div>
            <div className="outer-rectangles absolute w-[59px] h-[62px]">
            <Image className="pulse absolute -z-[1] pointer-events-none" src="/media/images/labz-rectangle-slide-outer1.png" width={82} height={84} alt={'Welcome to Labz'}/>
            <Image className="pulse2 absolute -z-[1] pointer-events-none" src="/media/images/labz-rectangle-slide-outer2.png" width={107} height={110} alt={'Welcome to Labz'}/>
            <Image className="pulse3 absolute -z-[1] pointer-events-none" src="/media/images/labz-rectangle-slide-outer3.png" width={147} height={152} alt={'Welcome to Labz'}/>
            </div>
            </div>
            </div>
            { /* end slider circle */}

          </div>
          <div className="rsbcText">{this.getText()}</div>
        </div>
      </div>
  </div>
  </>
      );
    }
  }
