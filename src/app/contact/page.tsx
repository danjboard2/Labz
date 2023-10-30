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
const FORM_ENDPOINT = "https://public.herotofu.com/v1/ff912cc0-7774-11ee-8bcd-4fcc9e7e7286"; // TODO - update to the correct endpoint

const Contact: React.FC<{}> = () => {

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e:any) => {
    e.preventDefault();

    type DataType = {
      [key: string]: any;
    };

    const inputs = e.target.elements;
    let data: DataType = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

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
        <div className="contact-bg bg-cover min-h-screen p-0 opacity-1 w-full h-screen overflow-hidden absolute"></div>
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
            <Link className="navlink px-[30px] py-[20px] text-[#fff] text-xl select-none" href="/services" title="Services &amp; Projects">Services &amp; projects</Link>
            <Link className="navlink px-[30px] py-[20px] text-[#fff] text-xl select-none" href="#" title="Contact us">Contact us</Link>
          </Drawer.Body>
        </Drawer>
        </nav>
  
        <div className="w-2/5 h-screen flex flex-col justify-center ml-[93px] relative z-10">
        {submitted ? (
            <>
   <h1 className="text-white text-[120px] mb-8 font-bold">Thank you.</h1>
        <h2 className="text-primary text-[50px] font-bold">We will be in touch soon.</h2>
            </>
          ) : (
            <>
        <h1 className="text-white text-[120px] mb-8 font-bold">Contact us</h1>
        <h2 className="text-primary text-[50px] font-bold">Ready to make waves?</h2>
        <hr className="w-2/5 my-8"/>
        <p className="text-white text-xl leading-relaxed">Please fill in the contact form and we will get back to you</p>
        <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="pt-0 mb-3 mt-8">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-lg text-gray-600 placeholder-gray-400 bg-[#1d1d1db0] border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3 mt-8">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-lg text-gray-600 placeholder-gray-400 bg-[#1d1d1db0] border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3 mt-8">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-lg text-gray-600 placeholder-gray-400 bg-[#1d1d1db0] border-0 rounded shadow outline-none h-[160px]"
          required
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="hover:shadow-lg focus:outline-none px-20 py-1 mb-1 mr-1 mt-4 text-xl font-normal text-white transition-all duration-150 ease-linear bg-transparent rounded-xl shadow outline-none border-solid border-primary border-2"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
    </>
    )}
      </div>
      </main>
      </>
  )
}
export default Contact;