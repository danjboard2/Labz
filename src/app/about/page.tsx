"use client"
import React, { Component, useState,  useEffect, useRef } from "react";
import "../../styles/Flashlight.css";
import Navigation from "../../components/Navigation";
import ScrollDown from "../../components/ScrollDown";

const About: React.FC<{}> = () => {
  const update = (e:any) => {
    let x = e.clientX || (e.touches && e.touches[0].clientX);
    let y = e.clientY || (e.touches && e.touches[0].clientY);
// Check if y is undefined or less than 0
// Check if y is null (undefined) or less than 0
// Get the homepage element by its class name
const homepage = document.querySelector('.about-bg') as HTMLElement;

  // Check if homepage is not null before setting styles
  if (homepage) {
    if (y === undefined || isNaN(y) || y < 0) {
      homepage.style.setProperty('--cursorY', '0px');
    }
    else {
      homepage.style.setProperty('--cursorY', y + 'px');
  }
  
    if (x === undefined || isNaN(x) || x < 0) {
      homepage.style.setProperty('--cursorX', '0px');
    }
    else {
      homepage.style.setProperty('--cursorX', x + 'px');
    }
  }
}

const mainRef = useRef<HTMLDivElement>(null);  // Specify the type here

useEffect(() => {
  const mainElement = mainRef.current;

  // Attach the event listener to mainElement instead of document
  if (mainElement) {
    mainElement.addEventListener('mousemove', update);
    mainElement.addEventListener('touchmove', update);

    // Cleanup
    return () => {
      mainElement.removeEventListener('mousemove', update);
      mainElement.removeEventListener('touchmove', update);
    };
  }
}, []); 

    return (
    <>
    <main  ref={mainRef}  className="relative flex h-screen lg:h-full w-full" id="about">
      <div className="about-bg bg-[url(/media/images/about-bg1.jpg)] bg-cover min-h-screen p-0 opacity-1 w-full h-screen overflow-hidden absolute"></div>
      <Navigation page="about"/>

      <div className="w-full px-[20px] lg:px-0 lg:w-2/5 h-screen flex flex-col justify-center lg:ml-[93px] relative z-10">
      <h1 className="text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px] mb-0 md:mb-8  font-bold">About us</h1>
      <h2 className="text-primary text-xl sm:text-[26px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold">The Big Bang</h2>
      <hr className="w-2/5 my-2 md:my-8"/>
      <p className="text-white text-base sm:text-xl leading-relaxed">The Labs began as a Lorem ipsum dolor sit amet. Hic numquam corrupti ut quibusdam temporibus sed placeat doloremque At voluptatibus dolores aut esse quia hic omnis pariatur. Ex incidunt velit quo perferendis nihil in aperiam dolor id ullam veritatis. In that time The Labz Et aspernatur doloremque ex labore odio ut dignissimos nisi sed saepe iste sit consequatur temporibus est quibusdam doloribus.</p>
      <p className="text-white text-base sm:text-xl mt-4 leading-relaxed">In that time The Labz Et aspernatur doloremque ex labore odio ut dignissimos nisi sed saepe iste sit consequatur temporibus est quibusdam doloribus.</p>
    </div>
    </main>
    </>
  )
}
export default About;