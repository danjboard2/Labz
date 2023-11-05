import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { addClass } from "rsuite/esm/DOMHelper";

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function ServicesHeroAnim() {
  useLayoutEffect(() => {
    // Create a timeline context
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
            (c) => {
            let { xs, sm, md, lg, xl, xxl } = c.conditions;
            gsap.to(".services-hero h1", {
            lineHeight:"100px",
            rotation: 0,
            scrollTrigger: {
                trigger: ".services-hero h1",
                start: "top+=700 center",
                end: "top+=1200px center",
                scrub: true,
                //markers: true,
                id: "Services Hero"
            }
        });
      });

    // Revert the context when the component unmounts
    return () => mm.revert();
  }, []); // Empty dependency array so it runs only once on mount

  return (
          <>
       <section className="services-hero" id="services-hero">
                <h1 className="text-white text-center text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px] font-bold">Our<br/>
                <span className="text-primary font-bold">Services</span></h1>
      </section>
      </>
  );
};
