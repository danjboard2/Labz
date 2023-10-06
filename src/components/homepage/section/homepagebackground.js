import React, {useLayoutEffect, useState, useEffect, useRef, useMemo} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

const MovingImage = ({ src, width, height, initialPosition, initialOpacity, className }) => {
  const imageRef = useRef(null);

  const animateImage = () => {
    const roundedPosition = {
      left: Math.round(initialPosition.left),
      top: Math.round(initialPosition.top),
    };

    const angle = Math.random() * 2 * Math.PI;
    const deltaX = 100 * Math.cos(angle);
    const deltaY = 100 * Math.sin(angle);
    const newLeft = roundedPosition.left + deltaX;
    const newTop = roundedPosition.top + deltaY;
    const newOpacity = 0.5 + Math.random() * 0.5;

    const timeline = gsap.timeline(); // Create a timeline for continuous animation

    timeline.to(imageRef.current, {
      left: `${newLeft}px`,
      top: `${newTop}px`,
      opacity: newOpacity,
      duration: 12,
      ease: 'linear',
    });

    timeline.to(imageRef.current, {
      left: `${roundedPosition.left}px`,
      top: `${roundedPosition.top}px`,
      opacity: initialOpacity,
      duration: 12,
      ease: 'linear',
    });

    // Restart the animation when it completes
    timeline.call(animateImage);
  };

  useEffect(() => {
    animateImage(); // Start the animation when the component mounts
  }, []);

  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt="Element"
      className={`${className} absolute`}
      style={{
        position: 'absolute',
        left: `${initialPosition.left}px`,
        top: `${initialPosition.top}px`,
        opacity: initialOpacity,
      }}
      ref={imageRef}
    />
  );
};


export default function HomepageBackground() {

  const initialPositions = [
    { left: 513, top: 162 },
    { left: 158, top: 983 },
    { left: 717, top: 339 },
    { left: 1066, top: 158 },
    { left: 770, top: 143 },
    { left: 1783, top: 594 },
    { left: 1082, top: 968 },
    { left: 1698, top: 664 },
    { left: 1640, top: 169 },
    { left: 1244, top: 758 },
    { left: 1798, top: 314 },
    { left: 1721, top: 475 },
    { left: 855, top: 452 },
    { left: 785, top: 806 },
    { left: 814, top: 617 },
    { left: 1612, top: 961 },
    { left: 643, top: 935 },
  ];

  const imageSources = [
    '/media/images/element-ag.png',
    '/media/images/element-al.png',
    '/media/images/element-b.png',
    '/media/images/element-c.png',
    '/media/images/element-co.png',
    '/media/images/element-fe.png',
    '/media/images/element-he.png',
    '/media/images/element-hg.png',
    '/media/images/element-ir.png',
    '/media/images/element-la.png',
    '/media/images/element-ni.png',
    '/media/images/element-o.png',
    '/media/images/element-pd.png',
    '/media/images/element-ru.png',
    '/media/images/element-t.png',
    '/media/images/element-ti.png',
    '/media/images/element-u.png',
  ];

  const imageSizes = [
    { width: 48, height: 49.5 },
    { width: 15, height: 15.4 },
    { width: 10.6, height: 11 },
    { width: 21, height: 21.6 },
    { width: 15, height: 15.4 },
    { width: 10.6, height: 11 },
    { width: 34, height: 35 },
    { width: 48, height: 49.5 },
    { width: 48, height: 49.4 },
    { width: 34, height: 35 },
    { width: 34, height: 35 },
    { width: 21, height: 21.6 },
    { width: 22.3, height: 23 },
    { width: 37, height: 38.1 },
    { width: 10.6, height: 11 },
    { width: 34, height: 35 },
    { width: 21, height: 21.6 },
  ];

  useEffect(() => {
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      gsap.fromTo(
        '.homepage-bg-lines',
        {
          opacity: 0,
        },
        {
          opacity: 0.8,
          scrollTrigger: {
            trigger: '.wwd-content',
            start: 'top bottom-=500px',
            end: 'bottom+=100px bottom-=700px',
            scrub: true,
            markers: true,
            id: 'Homepage background opacity',
          },
        }
      );

      gsap.fromTo(
        '.homepage-bg-lines',
        {
          top: '50%',
        },
        {
          top: '0%',
          scrollTrigger: {
            trigger: '.wwd-content',
            start: 'top bottom-=500px',
            end: 'bottom+=100px bottom-=200px',
            scrub: true,
            markers: true,
            id: 'Homepage background position',
          },
        }
      );
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
   <>
   <Image src="/media/images/homepage-lines-bg.jpg" width={3000} height={2000} quality={100} alt="Background image" className="homepage-bg-lines absolute z-0 left-0 right-0 top-0 h-full min-w-max"/>

   { /* background elements */ }
   {initialPositions.map((position, index) => {
        const roundedPosition = {
          left: Math.round(position.left),
          top: Math.round(position.top),
        };

        return (
          <MovingImage
            key={index}
            src={imageSources[index]}
            width={imageSizes[index].width}
            height={imageSizes[index].height}
            initialPosition={position}
            initialOpacity={0.5 + Math.random() * 0.5}
            className={`moving-image-${roundedPosition.left}-${roundedPosition.top}`}
          />
        );
      })}
    </>
  );
};