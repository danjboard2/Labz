"use client"
import React, { Component, useState,  useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Logo from "../../components/Logo"
import ServicesHero from '../../components/services/ServicesHero'
import ProjectSection from '../../components/services/Project'
import "../../styles/Services.css";

import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
interface ParentState {
  count: number;
}
const ParentComponent: React.FC<{}> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

    return (
    <>
    <main className="services bg-[#000] min-h-screen p-0 opacity-1 relative w-full">

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
          <Link className="navlink px-[30px] py-[20px] text-[#fff] text-xl select-none" href="/about" title="About us">About us</Link>
          <Link className="navlink px-[30px] py-[20px] text-[#fff] text-xl select-none" href="/services" title="Services &amp; Projects">Services &amp; projects</Link>
          <Link className="navlink px-[30px] py-[20px] text-[#fff] text-xl select-none" href="/contact" title="Contact us">Contact us</Link>
        </Drawer.Body>
      </Drawer>
      </nav>
      <section className="h-full">
          <ServicesHero />
         <ProjectSection/>
      </section>
    </main>
    </>
  )
}
export default ParentComponent;