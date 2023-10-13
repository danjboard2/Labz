import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { addClass } from "rsuite/esm/DOMHelper";
import Image from 'next/image'

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function TeamAnims() {
  useLayoutEffect(() => {
    // Create a timeline context


  // Create a timeline context
  let ctx = gsap.context(() => {

    gsap.to(".team-inner-left", {
      filter: "blur(0px)",
      opacity:1,
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
    gsap.to(".team-inner-right", {
      filter: "blur(0px)",
      opacity:1,
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
        <section className="teams-wrap w-full h-full absolute flex justify-center items-center">
            <article className="flex flex-row w-3/4">
            <div className="team-inner-left flex w-1/2">
          <h2 className="relative quote text-9xl text-white w-4/5 font-bold">We are <span className="text-primary">Labz</span></h2>
          </div>
          <div className="team-inner-right flex w-1/2">
          <h2>Team information here</h2>
          </div>
          </article>
          </section>
      </>
  );
};
