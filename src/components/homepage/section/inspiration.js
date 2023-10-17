import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { addClass } from "rsuite/esm/DOMHelper";
import Image from 'next/image'

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function InspirationAnims() {
  useLayoutEffect(() => {
    // Create a timeline context


  // Create a timeline context
  let ctx = gsap.context(() => {

    gsap.to(".quote-wrap h4.quote", {
      lineHeight: "1em",
      paddingTop:"0px",
      rotation: 0,
      scrollTrigger: {
        trigger: ".inspiration-inner",
        start: "top bottom-=100px",
        end: "top+=800px bottom-=400px",
        scrub: true,
        //markers: true,
        id: "quote"
      }
    });

    gsap.to(".quote-wrap h4.quote", {
      filter: "blur(80px)",
      opacity:0,
      rotation: 0,
      scrollTrigger: {
        trigger: ".inspiration-inner",
        start: "bottom+=450px bottom-=100px",
        end: "bottom+=1000px bottom-=400px",
        scrub: true,
        //markers: true,
        id: "quote"
      }
    });

    gsap.to(".quote-wrap h6.attribution", {
      scrollTrigger: {
        trigger: ".inspiration-inner",
        start: "top bottom-=100px",
        end: "top+=800px bottom-=400px",
        scrub: true,
        //markers: true,
        id: "quote"
      }
    });

    gsap.to(".quote-wrap h6.attribution", {
      filter: "blur(80px)",
      scrollTrigger: {
        trigger: ".inspiration-inner",
        start: "bottom+=450px bottom-=100px",
        end: "bottom+=1000px bottom-=400px",
        scrub: true,
        //markers: true,
        id: "quote"
      }
    });

  });

  // Revert the context when the component unmounts
  return () => ctx.revert();
}, []); // Empty dependency array so it runs only once on mount


  return (
          <>
        <div className="quote-wrap flex-col h-full absolute flex justify-center items-center top-0 bottom-0 left-0 right-0">
          <h4 className="relative quote md:text-5xl xl:text-7xl xxl:text-9xl text-white w-4/5 font-bold pt-[400px] lg:leading-[8em] xl:leading-[6em] xxl:leading-[3em]"><span className="text-primary">“Great</span> things in a business are never done by one person but instead by a <span className="text-primary">team</span> of people.”</h4>
          <h6 className="attribution w-[70%] pt-24 md:text-2xl xl:text-4xl xxl:text-6xl text-right text-white">- Steve Jobs</h6>
        </div>
      </>
  );
};
