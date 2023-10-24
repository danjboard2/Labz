"use client"
import React, {useState, useEffect} from "react";
import Logo from "../../components/Logo"
import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
import Link from 'next/link'
import SetContainerCursor from '../../partials/layout'; 
import { utils, getIndexPage } from '../../../public/media/scripts/utils';
import { Cursor1 } from '../../../public/media/scripts/cursors/cursor1';
import dynamic from "next/dynamic";

const SwupTransitions = dynamic(() => import("../../components/swup"), { ssr: false });

const Contact: React.FC<{}> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const setCursor = () => {
      const index = getIndexPage();
      switch (index) {
        case 1:
          new Cursor1(index);
          break;
        default:
      }
    };

    const initialize = async () => {
      await utils();
      setCursor();
    };

    window.addEventListener('load', initialize);

    return () => {
      window.removeEventListener('load', initialize);
    };
  }, []);
    return (
      <>
       <SwupTransitions />
      <SetContainerCursor />
      <main className="relative flex h-full w-full" id="about">
        <div className="about-bg bg-[url(/media/images/about-bg1.jpg)] bg-cover min-h-screen p-0 opacity-1 w-full h-screen overflow-hidden absolute"></div>
        <nav className="navigation absolute top-0 left-0 w-full flex p-[50px] justify-between z-0">
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
            <Link className="navlink px-[30px] py-[20px] text-[#fff] text-xl select-none" href="#" title="Services &amp; Projects">Services &amp; projects</Link>
            <Link className="navlink px-[30px] py-[20px] text-[#fff] text-xl select-none" href="#" title="Contact us">Contact us</Link>
          </Drawer.Body>
        </Drawer>
        </nav>
  
        <div className="w-2/5 h-screen flex flex-col justify-center ml-[93px] relative z-10">
        <h1 className="text-white text-[120px] mb-8 font-bold">Contact us</h1>
        <h2 className="text-primary text-[50px]">Ready to make waves?</h2>
        <hr className="w-2/5 my-8"/>
        <p className="text-white text-xl leading-relaxed">Form</p>
        <p className="text-white text-xl mt-4 leading-relaxed">Form</p>
      </div>
      </main>
      </>
  )
}
export default Contact;