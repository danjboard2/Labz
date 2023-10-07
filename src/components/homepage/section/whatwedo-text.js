import React, {useLayoutEffect, useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function WhatWeDoText() {

  const [activeElement, setActiveElement] = useState(null);

  const handleClick = (elementClassName) => {
    setActiveElement(elementClassName);
  };

  useLayoutEffect(() => {
  
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {

      gsap.to(".box.a", {
        marginLeft: 50,
        rotation: 0,
        scrollTrigger: {
          trigger: ".box.a",
          start: "top bottom-=300px",
          end: "bottom+=100px bottom-=500px",
          scrub: true,
          markers: true,
          id: "A"
        }
      });
      
      gsap.to(".box.b", {
        marginLeft: 0,
        rotation: 0,
        scrollTrigger: {
          trigger: ".box.b",
          start: "top bottom-=400px",
          end: "bottom+=100px bottom-=600px",
          scrub: true,
          markers: true,
          id: "B"
        }
      });

      gsap.to(".box.c", {
        marginLeft: 0,
        rotation: 0,
        scrollTrigger: {
          trigger: ".box.c",
          start: "top bottom-=500px",
          end: "bottom+=100px bottom-=700px",
          scrub: true,
          markers: true,
          id: "C"
        }
      });

      gsap.fromTo(".labz-wwd-text", {
        lineHeight:'378.5%'},{
        lineHeight:'159%',
        scrollTrigger: {
          trigger: ".labz-wwd-text",
          start: "top bottom-=500px",
          end: "bottom+=100px bottom-=700px",
          scrub: true,
          markers: true,
          id: "Labz intro text"
        }
      });

      //bring in the icons one by one
      gsap.to(".icon.a", {
       top: 0,
       transition:'0s',
        rotation: 0,
        scrollTrigger: {
          trigger: ".labz-wwd-text",
          start: "top bottom-=300px",
          end: "bottom+=100px bottom-=500px",
          scrub: true,
          markers: true,
          id: "A"
        }
      });
      
      gsap.to(".icon.b", {
        top: 0,
        transition:'0s',
        rotation: 0,
        scrollTrigger: {
          trigger: ".labz-wwd-text",
          start: "top bottom-=400px",
          end: "bottom+=100px bottom-=600px",
          scrub: true,
          markers: true,
          id: "B"
        }
      });

      gsap.to(".icon.c", {
        top: 0,
        transition:'0s',
        rotation: 0,
        scrollTrigger: {
          trigger: ".labz-wwd-text",
          start: "top bottom-=500px",
          end: "bottom+=100px bottom-=700px",
          scrub: true,
          markers: true,
          id: "C"
        }
      });

      gsap.to(".icon.d", {
        top: 0,
        transition:'0s',
        rotation: 0,
        scrollTrigger: {
          trigger: ".labz-wwd-text",
          start: "top bottom-=300px",
          end: "bottom+=100px bottom-=700px",
          scrub: true,
          markers: true,
          id: "D"
        }
      });
      gsap.to(".icon.e", {
        top: 0,
        transition:'0s',
        rotation: 0,
        scrollTrigger: {
          trigger: ".labz-wwd-text",
          start: "top bottom-=400px",
          end: "bottom+=100px bottom-=800px",
          scrub: true,
          markers: true,
          id: "E"
        }
      });
      gsap.to(".icon.f", {
        top: 0,
        transition:'0s',
        rotation: 0,
        scrollTrigger: {
          trigger: ".labz-wwd-text",
          start: "top bottom-=500px",
          end: "bottom+=100px bottom-=900px",
          scrub: true,
          markers: true,
          id: "F"
        }
      });

    },); // <- IMPORTANT! Scopes selector text
    
    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render

  return (
   <>
   <div className="wwd-content w-full h-full flex overflow-hidden">
      <div className="w-1/2 flex flex-col">
          <div className="wwd-container min-w-[5000px] pb-[20px] pt-44 overflow-hidden">
            <div class="box a mr-[20px] text-[120px] font-bold text-primary">What</div>
            <div class="box b mr-[20px] text-[120px] font-bold text-[#fff]">we</div>
            <div class="box c mr-[20px] text-[120px] font-bold text-[#fff]">do</div>
          </div>
        <p className="labz-wwd-text ml-[50px] lg:w-4/5 text-3xl text-white z-1 relative pb-16 border-b-2 border-[#828282]">The Labz is a trusted collaborator for Web3 projects seeking to bring their blockchain-based vision to life. Our expert team provides end-to-end support throughout the product development cycle, from ideation to ecosystem launch.</p>
      </div>
      <div className="w-1/2 flex flex-col">
         <div className="wwd-buttons flex flex-row !flex-wrap pt-[256px] w-3/4">
            <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div className={`icon a w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'a' ? 'active' : '' }`} onClick={() => handleClick('a')}><Image src="/media/images/wwd-icons/icon-dollar.svg" width={86} height={46} alt="Dollar"/></div></div>
            <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div className={`icon b w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'b' ? 'active' : '' }`} onClick={() => handleClick('b')}><Image src="/media/images/wwd-icons/icon-ch.svg" width={64} height={64} alt="Chart"/></div></div>
            <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div className={`icon c w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'c' ? 'active' : '' }`} onClick={() => handleClick('c')}><Image src="/media/images/wwd-icons/icon-bc.svg" width={62} height={72} alt="Blockchain"/></div></div>
            <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div className={`icon d w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'd' ? 'active' : '' }`} onClick={() => handleClick('d')}><Image src="/media/images/wwd-icons/icon-se.svg" width={66} height={66} alt="Services"/></div></div>
            <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div className={`icon e w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'e' ? 'active' : '' }`} onClick={() => handleClick('e')}><Image src="/media/images/wwd-icons/icon-wa.svg" width={85} height={72} alt="Wallet"/></div></div>
            <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div className={`icon f w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'f' ? 'active' : '' }`} onClick={() => handleClick('f')}><Image src="/media/images/wwd-icons/icon-ip.svg" width={77} height={58} alt="Network"/></div></div>
         </div>
      </div>
    </div>
    </>
  );
};