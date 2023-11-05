"use client"
import React, { Component, useState,  useEffect } from "react";
import Script from 'next/script'
import WhatWeDo from '../../components/homepage/WhatWeDo'
import Timeline from '../../components/homepage/Timeline'
import Inspiration from '../../components/homepage/Inspiration'
import Navigation from "../../components/Navigation";
import ScrollDown from "../../components/ScrollDown";

const ParentComponent: React.FC<{}> = () => {
  const h1s = [
    <h1 key={1} className="font-regular leading-tight px-4 text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] text-[#fff] select-none">
      We are <span className="font-bold text-[#FF3D00]">reshaping the future</span> of the digital world
    </h1>,
    <h1 key={2} className="font-regular leading-tight px-4 text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] text-[#fff] select-none">
      We are leaders in building <span className="font-bold text-[#FF3D00]">deep tech ecosystems</span>
    </h1>,
    <h1 key={3} className="font-regular leading-tight px-4 text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] text-[#fff] select-none">
      We specialize in innovative <span className="font-bold text-[#FF3D00]">Web3 technologies</span>
    </h1>,
    <h1 key={4} className="font-regular leading-tight px-4 text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] text-[#fff] select-none">
      We create <span className="font-bold text-[#FF3D00]">blockchain-focused</span> architecture
    </h1>,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % h1s.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

    return (
    <>
     <Script src="/media/scripts/dat.gui.min.js" strategy="afterInteractive" async/>
    <main className="lockedhp w-full min-h-screen flex-col items-center justify-center p-24 absolute top-0 bottom-0 left-0 right-0 z-100 hidden">
    </main>
    <main className="homepage bg-[#000] min-h-screen p-0 relative w-full h-screen overflow-visible opacity-100">
      <Navigation />
      <canvas className="homepage-bg-canvas flex !w-full"></canvas>
      <section className="hp-content pointer-events-none flex w-full h-screen items-center justify-center flex-col">
      <div className="h1-container relative w-full">
      {h1s.map((h1, index) => (
        <div
          key={index}
          className={`h1-fade text-center ${
            index === currentIndex ? "h1-fade-inout" : ""
          }`}
        >
          {h1}
        </div>
      ))}
    </div>
      </section>
      <ScrollDown />
      <WhatWeDo />
      <Timeline />
      <Inspiration />
    </main>
    <Script src="/media/scripts/script.js" strategy="afterInteractive" async/>
    </>
  )
}
export default ParentComponent;