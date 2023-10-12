import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { addClass } from "rsuite/esm/DOMHelper";

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function TimelineAnimsThree() {
  useLayoutEffect(() => {
    // Create a timeline context


  // Create a timeline context
  let ctx = gsap.context(() => {

    gsap.to(".year-2023", {
      marginLeft: 220,
      rotation: 0,
      scrollTrigger: {
        trigger: ".company-timeline.three",
        start: "top bottom-=100px",
        end: "top+=600px bottom-=400px",
        scrub: true,
        //markers: true,
        id: "2023"
      }
    });

    const blocks = gsap.utils.toArray(".company-timeline.three .company-timeline-block");
    const firstBlockIndex = 0;
    const firstBlock = blocks[firstBlockIndex]; // Accessing the first block
    const lastIndex = blocks.length - 1; // Get the index of the last block
        // Set the opacity of the first block to 1

    blocks.forEach((block, index) => {
        gsap.to(block, {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: block,
            start: "top 80%",
            end: "bottom 30%",
            scrub: true,
            id: `timeline-block-${index}`,
          },
        });

        const dateElement = document.querySelector(
          `.company-timeline.three .timeline-date:nth-child(${index + 1}) .date span.date .date2`
        );

        if (dateElement) {
          gsap.to(dateElement, {
            opacity: 1,
            display:"none",
            duration: 0.5,
            //onStart: function(){ console.log('play') },
            //onComplete: function(){  $(this).addClass('mainAnimatedClass');},
            zIndex:10,
            onComplete: () => {
               // Check if it's the last iteration and prevent onComplete
                  if (index === lastIndex) {
                    gsap.set(dateElement, { display: "inline" });
                      console.log(`.company-timeline.three .timeline-date:nth-child(${index+1}) span.circle`)
                      console.log(`Removed onComplete for last iteration (index ${index})`);
                   }
              console.log(`Play animation for index ${index}`);
              // Hide the circle element when the animation is complete
              if (index !== lastIndex) {
                gsap.set(`.company-timeline.three .timeline-date:nth-child(${index + 1}) span.circle`, { display: "none" });
               }
            },
            onReverseComplete: () => {
              console.log("reverse");
              // Hide the circle element when the animation is complete
              gsap.set(`.company-timeline.three .timeline-date:nth-child(${index+1}) span.circle`, { display: "block" });
            },
            scrollTrigger: {
              trigger: block,
              start: "top 51.8%",
              end: "bottom 51.8%",
              scrub: true,
              //markers:true,
              id: `nth-child-${index}`,
              toggleActions: "play none none none",
            },
          });
        }
  });


      });

    // Revert the context when the component unmounts
    return () => ctx.revert();
  }, []); // Empty dependency array so it runs only once on mount

  return (
          <>
      <section className="company-timeline three" id="company-timeline">
          <div className="contain">
            <div className="company-timeline-wrapper">
            <div className="timeline-heading overflow-x-clip">
                  <h2 className="year-2023 text-[674px] leading-[1] ml-[1000px] text-[#FF3D00] -mb-[450px] font-extrabold">2023</h2>
                  <h4 className="roadmap">Roadmap</h4>
                 </div>
              <div className="company-timeline-list">
            <div className="company-timeline-year">
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-4xl leading-[4rem]">January</span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div><span className="circle"></span>
                </span>
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-4xl leading-[4rem]">March</span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div><span className="circle"></span>
                </span>
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-4xl leading-[4rem]">June</span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div><span className="circle"></span>
                 </span>
                 <span className="timeline-date">
                     <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-4xl leading-[4rem]">August</span><div className="absolute top-0 bottom-0 left-0 right z-0"></div></span></div><span className="circle"></span>
                 </span>
                 <span className="timeline-date">
                     <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-4xl leading-[4rem]">December</span><div className="absolute top-0 bottom-0 left-0 right-0z-0"></div></span></div><span className="circle"></span>
                </span>
             </div>
    </div>
      <div className="company-timeline-slider">
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">January</span><span className="circle"></span><h4 className="text-white text-4xl">The Labz team formed.</h4><p className="text-white text-xl">Although small we used our 10+ yrs blockchain experience to navigate this promising landscape with opportunity and knowledge to gain at each turn.</p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">March</span><span className="circle"></span><h4 className="text-white text-4xl">Lorem Ipsum Dolor 3</h4><p className="text-white text-xl">pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua.  At verlorem </p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">June</span><span className="circle"></span><h4 className="text-white text-4xl">Lorem Ipsum Dolor 3</h4><p className="text-white text-xl">Lorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam nonumy eirmorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam nonumy eirmod.d.</p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">August</span><span className="circle"></span><h4 className="text-white text-4xl">Lorem Ipsum Dolor 3</h4><p className="text-white text-xl">pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua.  At verlorem </p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">December</span><span className="circle"></span><h4 className="text-white text-4xl">Lorem Ipsum Dolor 3</h4><p className="text-white text-xl">pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua.  At verlorem </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </>
  );
};
