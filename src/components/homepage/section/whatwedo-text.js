"use client"
import React, {useLayoutEffect, useEffect,  useRef, useState} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

  export default function WhatWeDoText() {
    const [activeElement, setActiveElement] = useState(null);
    const [dataOneValue, setDataOneValue] = useState("");
    const [dataTwoValue, setDataTwoValue] = useState("");
    const [isFading, setIsFading] = useState(false);
  
// Function to animate child elements
function animateChildElements() {
  const parentElement = document.querySelector('.wwd-buttons');
    const childElements = parentElement.querySelectorAll('.icon-wrap');
    childElements.forEach((child) => {
      // Function to set a random position with a delay
      function setRandomPositionWithDelay() {
        // Generate random coordinates within a 100px circle
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 50;
        const xOffset = Math.cos(angle) * radius;
        const yOffset = Math.sin(angle) * radius;

        // Apply the new position as a CSS transform
        child.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
      }

      // Set a random position with a delay (e.g., 1 second)
      setTimeout(setRandomPositionWithDelay, Math.random() * 4000);
    });
}
let intervalId; // Declare intervalId here
useEffect(() => {
  // Check if we are in a browser environment before using document
  if (typeof window !== 'undefined') {
    const intervalId = setInterval(() => {
      const parentElement = document.querySelector('.wwd-buttons');
      if (parentElement && parentElement.classList.contains('completed')) {
        animateChildElements();
      }
    }, 4000);
  }
  return () => clearInterval(intervalId);
}, []); // Empty dependency array to run this effect once on component mount


    useEffect(() => {
      let fadeOutTimer;
  
      if (isFading) {
        fadeOutTimer = setTimeout(() => {
          setIsFading(false);
        }, 500);
      }
  
      return () => clearTimeout(fadeOutTimer);
    }, [isFading]);
  
    // Modify handleClick to update data values with a delay
    function handleClick(elementClassName) {
      const element = document.querySelector(`.icon.${elementClassName}`);
  
      if (element) {
        // Remove the 'active' class from the previously active element (if any)
        const prevActiveElement = document.querySelector(".icon.active");
        if (prevActiveElement) {
          prevActiveElement.classList.remove("active");
        }
  
        // Add the 'active' class to the clicked element
        element.classList.add("active");
  
        setActiveElement(elementClassName);
        setIsFading(true); // Trigger the fade-out animation
  
        // Add an event listener to the fading element to detect the end of the fade-out animation
        element.addEventListener("transitionend", handleFadeOutEnd, { once: true });
  
        // Delay the update of data values until after the fade-out animation
        setTimeout(() => {
          const dataOneValue = element.getAttribute("data-one");
          const dataTwoValue = element.getAttribute("data-two");
          setDataOneValue(dataOneValue);
          setDataTwoValue(dataTwoValue);
        }, 500); // Adjust the delay as needed to match your fade-out animation duration
      }
    }
  
    // Add a function to handle the end of the fade-out animation
    const handleFadeOutEnd = () => {
      setIsFading(false); // Trigger the fade-in animation
    };

  function iconsInPosition() {
    console.log('All icons are in position');
  }

  function iconsOutOfPosition() {
    console.log('Icons are out of position');
  }

  useLayoutEffect(() => {
  
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {

      gsap.to(".box.a", {
        marginLeft: 93,
        rotation: 0,
        scrollTrigger: {
          trigger: ".box.a",
          start: "top bottom-=100px",
          end: "bottom+=100px bottom-=500px",
          scrub: true,
          //markers: true,
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
          //markers: true,
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
          //markers: true,
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
          //markers: true,
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
          //markers: true,
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
          //markers: true,
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
          //markers: true,
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
          //markers: true,
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
          //markers: true,
          id: "E"
        }
      });
      const firstel = document.querySelector('.icon.a');
      const box = document.querySelector('.wwd-buttons');
      let animationCompleted = false;

      gsap.to(".icon.f", {
        top: 0,
        transition:'0s',
        rotation: 0,
        onUpdate: () => {
          animationCompleted = false;
          box.classList.remove('completed');
          },
        onComplete: () => {
          animationCompleted = true;
          if (animationCompleted) {
              box.classList.add('completed');
              firstel.click();
          }
      },
      onReverseComplete: () => {
          animationCompleted = false;
          box.classList.remove('completed');
      },
        scrollTrigger: {
          trigger: ".labz-wwd-text",
          start: "top bottom-=500px",
          end: "bottom+=100px bottom-=900px",
          scrub: true,
          //markers: true,
          id: "F",
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
            <div className="box a mr-[20px] text-[120px] font-bold text-primary">What</div>
            <div className="box b mr-[20px] text-[120px] font-bold text-[#fff]">we</div>
            <div className="box c mr-[20px] text-[120px] font-bold text-[#fff]">do</div>
          </div>
        <p className="labz-wwd-text xl:ml-[93px] lg:w-4/5 text-3xl text-white z-1 relative pb-16 border-b-2 border-[#828282]">The Labz is a trusted collaborator for Web3 projects seeking to bring their blockchain-based vision to life. Our expert team provides end-to-end support throughout the product development cycle, from ideation to ecosystem launch.</p>
      <div className="ml-[93px] pt-16 relative w-4/5">
        <h3 className={`wwd-changing-text text-white font-bold text-4xl ${isFading ? "fade-out" : "fade-in"}`}>{dataOneValue}</h3>
        <p className={`wwd-changing-text text-white text-xl pt-4 leading-[168.5%] ${isFading ? "fade-out" : "fade-in"}`}>{dataTwoValue}</p>
      </div>
      </div>
      <div className="w-1/2 flex flex-col">
         <div className="wwd-buttons flex flex-row !flex-wrap ml-[93px] pt-[256px] w-3/4">
         <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div data-one="Title" data-two="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dolor lectus. Nullam augue orci, pulvinar et ex eget, maximus volutpat leo. Aenean ac mollis mauris. Aliquam pretium mauris nunc. Morbi in eros feugiat, pretium magna vitae, vulputate tortor. In mollis semper purus. In mollis et urna et ultrices. Sed ut feugiat tellus." className={`icon a w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'a' ? 'active' : '' }`} onClick={() => handleClick('a')}><Image src="/media/images/wwd-icons/icon-ip.svg" width={77} height={58} alt="Network"/></div></div>
         <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div data-one="Title two" data-two="Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla ultrices ex sit amet turpis gravida, sit amet rutrum dui eleifend. Mauris eu eros quis orci laoreet scelerisque. Suspendisse faucibus cursus commodo." className={`icon b w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'b' ? 'active' : '' }`} onClick={() => handleClick('b')}><Image src="/media/images/wwd-icons/icon-wa.svg" width={85} height={72} alt="Wallet"/></div></div>
         <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div data-one="Title three" data-two="Morbi vitae tellus a magna gravida vestibulum. Suspendisse mattis elementum nulla sed consectetur. Praesent consequat tempus est, vel pellentesque magna bibendum a. Sed aliquet velit ut velit rutrum feugiat. Duis non vestibulum felis. Pellentesque ultrices iaculis leo, ac blandit ipsum facilisis at." className={`icon c w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'c' ? 'active' : '' }`} onClick={() => handleClick('c')}><Image src="/media/images/wwd-icons/icon-se.svg" width={66} height={66} alt="Services"/></div></div>
            <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div data-one="Title four" data-two="Donec tincidunt, neque at vestibulum euismod, purus nulla tincidunt nunc, vel mattis nibh ex non sem. Pellentesque eu ex tellus. Duis sit amet libero id ligula volutpat mattis. Maecenas et commodo odio, at consequat dui. Duis placerat enim sed massa efficitur consequat. Cras ac sem erat." className={`icon d w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'd' ? 'active' : '' }`} onClick={() => handleClick('d')}><Image src="/media/images/wwd-icons/icon-cg.svg" width={64} height={64} alt="Cg"/></div></div>
            <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div data-one="Title five" data-two="Ut eget ligula eleifend, tempus dui vitae, euismod libero. Cras eget nisl felis. Aenean maximus fringilla lorem non sagittis. Curabitur congue rhoncus arcu, id semper nulla pharetra sit amet. Duis dignissim vestibulum mi eget laoreet." className={`icon e w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'e' ? 'active' : '' }`} onClick={() => handleClick('e')}><Image src="/media/images/wwd-icons/icon-bc.svg" width={62} height={72} alt="Blockchain"/></div></div>
            <div className={`icon-wrap rounded-[5.73px] w-[126.8px] h-[130.67px] mb-[103px] mr-[103px] flex relative`}><div data-one="Title six" data-two="Suspendisse eleifend est lacus, quis venenatis eros dapibus sit amet. Aenean lorem massa, facilisis eget urna eu, vestibulum porttitor mi. Nam enim augue, tempus a mollis in, interdum vel augue." className={`icon f w-[126.8px] h-[130.67px] border-[7.88px] border-[#FF3D00] rounded-[5.73px] absolute z-10 flex justify-center ${activeElement === 'f' ? 'active' : '' }`} onClick={() => handleClick('f')}><Image src="/media/images/wwd-icons/icon-co.svg" width={86} height={46} alt="Co"/></div></div>
         </div>
      </div>
    </div>
    </>
  );
};