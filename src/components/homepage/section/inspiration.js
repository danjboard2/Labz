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

    gsap.to(".quote-wrap h1.quote", {
      lineHeight: "130px",
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

    gsap.to(".quote-wrap h1.quote", {
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

  });

  // Revert the context when the component unmounts
  return () => ctx.revert();
}, []); // Empty dependency array so it runs only once on mount


  return (
          <>
        <div className="quote-wrap h-full absolute flex justify-center items-center top-0 bottom-0 left-0 right-0">
          <h1 className="relative quote text-9xl text-white w-4/5 font-bold pt-[400px]"><span className="text-primary">“Great</span> things in a business are never done by one person but instead by a <span className="text-primary">team</span> of people.”</h1>
        </div>
      </>
  );
};