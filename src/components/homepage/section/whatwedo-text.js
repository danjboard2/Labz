import React, {useLayoutEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function WhatWeDoText() {

  useLayoutEffect(() => {
  
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {

      gsap.to(".a", {
        marginLeft: 50,
        rotation: 0,
        scrollTrigger: {
          trigger: ".a",
          start: "top bottom-=300px",
          end: "bottom+=100px bottom-=500px",
          scrub: true,
          markers: true,
          id: "A"
        }
      });
      
      gsap.to(".b", {
        marginLeft: 0,
        rotation: 0,
        scrollTrigger: {
          trigger: ".b",
          start: "top bottom-=400px",
          end: "bottom+=100px bottom-=600px",
          scrub: true,
          markers: true,
          id: "B"
        }
      });

      gsap.to(".c", {
        marginLeft: 0,
        rotation: 0,
        scrollTrigger: {
          trigger: ".c",
          start: "top bottom-=500px",
          end: "bottom+=100px bottom-=700px",
          scrub: true,
          markers: true,
          id: "C"
        }
      });


    },); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
   <>
   <div className="wwd-content w-full overflow-hidden">
   <div className="wwd-container min-w-[5000px] pb-[500px] overflow-hidden">
    <div class="box a mr-[20px] text-[120px] font-bold text-primary">What</div>
    <div class="box b mr-[20px] text-[120px] font-bold text-[#fff]">we</div>
    <div class="box c mr-[20px] text-[120px] font-bold text-[#fff]">do</div>
    </div>
    </div>
    </>
  );
};