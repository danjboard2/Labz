"use client"
import React, { Component, useState,  useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import CustomButton from "../components/slider/CustomButton.js";
import "../styles/CustomButton.css";
import Logo from "../components/Logo"
import WhatWeDo from '../components/homepage/WhatWeDo'
import Timeline from '../components/homepage/Timeline'
import Inspiration from '../components/homepage/Inspiration'

import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
interface ParentState {
  count: number;
}
const ParentComponent: React.FC<{}> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const h1s = [
    <h1 key={1} className="font-regular leading-tight text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] text-[#fff] select-none">
      We are <span className="font-bold text-[#FF3D00]">reshaping the future</span> of the digital world
    </h1>,
    <h1 key={2} className="font-regular leading-tight text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] text-[#fff] select-none">
      We are leaders in building <span className="font-bold text-[#FF3D00]">deep tech ecosystems</span>
    </h1>,
    <h1 key={3} className="font-regular leading-tight text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] text-[#fff] select-none">
      We specialize in innovative <span className="font-bold text-[#FF3D00]">Web3 technologies</span>
    </h1>,
    <h1 key={4} className="font-regular leading-tight text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] text-[#fff] select-none">
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
     <div className="bg-homepage bg-cover z-1 absolute top-0 bottom-0 left-0 right-0"></div>
    <main className="lockedhp w-full flex min-h-screen flex-col items-center justify-center p-24 absolute top-0 bottom-0 left-0 right-0 z-100">
    <CustomButton/>
    </main>
    <main className="homepage bg-[#000] min-h-screen p-0 opacity-0 relative w-full h-screen overflow-hidden">

      <nav className="navigation absolute top-0 left-0 w-full flex p-[50px] justify-between">
      <Logo />
      <ButtonToolbar>
        <Button style={{ background: 'transparent', overflow: 'visible', zIndex: 10000}} onClick={toggleOpen}>
            <div className="nav-button w-[52.38px] h-[54.76px] border-[transparent] border-[1px] relative rounded-[2px] cursor-pointer">
              <div className="nav-button-outer absolute top-0 left-0 right-0 bottom-0 border-[#FF3D00] border-[0.5px] nav-pulse"></div>
              <div className="nav-button-outer absolute top-0 left-0 right-0 bottom-0 border-[#FF3D00] border-[0.5px] nav-pulse2"></div>
              <div className="nav-button-outer absolute top-0 left-0 right-0 bottom-0 border-[#FF3D00] border-[0.5px] nav-pulse3"></div>
              <div className="nav-square border-[#FF3D00] border-[2px] w-[13.95px] h-[14.48px] absolute top-[9.52px] left-[8.33px] rounded-[2px]"></div>
              <div className="nav-square border-[#FF3D00] border-[2px] w-[13.95px] h-[14.48px] absolute top-[9.52px] right-[8.33px] rounded-[2px]"></div>
              <div className="nav-square border-[#FF3D00] border-[2px] w-[13.95px] h-[14.48px] absolute bottom-[9.52px] left-[8.33px] rounded-[2px]"></div>
              <div className="nav-square"></div>
            </div>
      </Button>
      </ButtonToolbar>
      <Drawer backdropClassName={'backdrop'} backdrop={false} size={'xs'} open={open} onClose={() => setOpen(false)}>
        <div className="absolute top-0 bottom-0 left-0 right-0 blur-lg"></div>
        <Drawer.Body style={{ background: 'transparent'}}>
          <Link className="navlink px-[30px] py-[20px] text-[#fff] text-xl select-none" href="#" title="About us">About us</Link>
          <Link className="navlink px-[30px] py-[20px] text-[#fff] text-xl select-none" href="#" title="Services &amp; Projects">Services &amp; projects</Link>
          <Link className="navlink px-[30px] py-[20px] text-[#fff] text-xl select-none" href="#" title="Contact us">Contact us</Link>
        </Drawer.Body>
      </Drawer>
      </nav>
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
      <WhatWeDo />
      <Timeline />
      <Inspiration />
    </main>
    <Script src="/media/scripts/script.js" strategy="afterInteractive" async/>
    </>
  )
}
export default ParentComponent;