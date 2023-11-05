import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { addClass } from "rsuite/esm/DOMHelper";

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function TimelineAnims() {
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
      console.log("md:", md); // Debug output to check the value of md
    gsap.to(".company-timeline.one .year-2021", {
      marginLeft: xs ? 20 : sm ? 40 : md ? 120 : 220,
      rotation: 0,
      scrollTrigger: {
        trigger: ".timeline",
        start: "top bottom",
        end: "top+=650px bottom",
        scrub: true,
        //markers: true,
        id: "2021"
      }
    });

    const blocks = gsap.utils.toArray(".company-timeline.one .company-timeline-block");
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
          `.company-timeline.one .timeline-date:nth-child(${index + 1}) .date span.date .date2`
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
                      console.log(`.company-timeline.one .timeline-date:nth-child(${index+1}) span.circle`)
                      console.log(`Removed onComplete for last iteration (index ${index})`);
                   }
              console.log(`Play animation for index ${index}`);
              // Hide the circle element when the animation is complete
              if (index !== lastIndex) {
                gsap.set(`.company-timeline.one .timeline-date:nth-child(${index + 1}) span.circle`, { display: "none" });
               }
            },
            onReverseComplete: () => {
              console.log("reverse");
              // Hide the circle element when the animation is complete
              gsap.set(`.company-timeline.one .timeline-date:nth-child(${index+1}) span.circle`, { display: "block" });
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
    return () => mm.revert();
  }, []); // Empty dependency array so it runs only once on mount

  return (
          <>
      <section className="company-timeline one pt-[100px]" id="company-timeline">
          <div className="contain">
            <div className="company-timeline-wrapper">
            <div className="timeline-heading overflow-x-clip">
                  <h2 className="year-2021 text-[140px] sm:text-[190px] md:text-[280px] lg:text-[350px] xl:text-[550px] xxl:text-[674px] leading-[1] ml-[1000px] text-white -mt-[110px] sm:-mt-[130px] md:-mt-[130px] lg:-mt-[140px] xl:-mt-[170px] xxl:-mt-[184px] -mb-[450px] font-extrabold">2021</h2>
                  <h4 className="roadmap left-[32px] -bottom-[18px] sm:left-[68px] sm:-bottom-[36px] md:left-[180px] md:-bottom-[110px] lg:left-[310px] lg:-bottom-[155px] xl:left-[330px] xl:-bottom-[280px] xxl:left-[360px] xxl:-bottom-[324px] text-[14px] sm:text-[16px] md:text-[20px] lg:xl:text-[24px] xl:text-[40px] xxl:text-[50px]">Roadmap</h4>
                 </div>
              <div className="company-timeline-list">
            <div className="company-timeline-year">
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Jan<span className="hidden lg:inline">uary</span></span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div><span className="circle !top-[61%] lg:!top-[63.5%]"></span>
                </span>
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Mar<span className="hidden lg:inline">ch</span></span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div><span className="circle !top-[61%] lg:!top-[63.5%]"></span>
                </span>
                <span className="timeline-date">
                    <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Jun<span className="hidden lg:inline">e</span></span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div><span className="circle !top-[61%] lg:!top-[63.5%]"></span>
                 </span>
                 <span className="timeline-date">
                     <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Aug<span className="hidden lg:inline">ust</span></span><div className="absolute top-0 bottom-0 left-0 right z-0"></div></span></div><span className="circle !top-[61%] lg:!top-[63.5%]"></span>
                 </span>
                 <span className="timeline-date">
                     <div className="date"><span className="date relative"><span className="date2 z-10 relative font-semibold text-white text-base sm:text-2xl md:text-2xl xl:text-4xl !leading-[4rem]">Dec<span className="hidden lg:inline">ember</span></span><div className="absolute top-0 bottom-0 left-0 right-0 z-0"></div></span></div><span className="circle !top-[61%] lg:!top-[63.5%]"></span>
                </span>
             </div>
    </div>
      <div className="company-timeline-slider pl-[30px] sm:pl-[40px] md:pl-[60px] lg:pt-[60px] xl:pt-[220px] xxl:pt-[260px] lg:pl-[160px] xl:pl-[170px] xxl:pl-[180px]">
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">January</span><span className="circle"></span><h4 className="text-white xl:text-3xl xxl:text-4xl font-bold">The Labz team formed.</h4><p className="text-white md:text-base lg:text-xl">Although small we used our 10+ yrs blockchain experience to navigate this promising landscape with opportunity and knowledge to gain at each turn.</p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">March</span><span className="circle"></span><h4 className="text-white xl:text-3xl xxl:text-4xl font-bold">Lorem Ipsum Dolor 3</h4><p className="text-white  md:text-base lg:text-xl">pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua.  At verlorem </p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">June</span><span className="circle"></span><h4 className="text-white xl:text-3xl xxl:text-4xl font-bold">Lorem Ipsum Dolor 3</h4><p className="text-white  md:text-base lg:text-xl">Lorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam nonumy eirmorem ipsum dolor sit amet, consetetur lorem ips sadipscing elitr, sed diam nonumy eirmod.d.</p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">August</span><span className="circle"></span><h4 className="text-white xl:text-3xl xxl:text-4xl font-bold">Lorem Ipsum Dolor 3</h4><p className="text-white  md:text-base lg:text-xl">pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua.  At verlorem </p></div></div>
        <div className="company-timeline-block active"><div className="block-inner"><span className="timeline-date">December</span><span className="circle"></span><h4 className="text-white xl:text-3xl xxl:text-4xl font-bold">Lorem Ipsum Dolor 3</h4><p className="text-white  md:text-base lg:text-xl">pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed pscing elitr, sed pscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verpscing elitr, sed diam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua. At verdiam voluptua. At verdiam nonumy eirmod tempor invidunt ut labore gna aliquyam erat, sed diam voluptua.  At verlorem </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      </>
  );
};
