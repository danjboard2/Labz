"use client"
import React, {useState, useEffect} from "react";
import Link from 'next/link'
import SetContainerCursor from '../../partials/layout'; 
import { utils, getIndexPage } from '../../../public/media/scripts/utils';
import { Cursor1 } from '../../../public/media/scripts/cursors/cursor1';
import dynamic from "next/dynamic";
import Navigation from "../../components/Navigation";
import ScrollDown from "../../components/ScrollDown";

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
      <main className="relative flex h-screen lg:h-full w-full" id="about">
        <div className="contact-bg bg-cover min-h-screen p-0 opacity-1 w-full h-screen overflow-hidden absolute"></div>
        <Navigation page="contact"/>
  
        <div className="w-full lg:w-2/5 h-screen flex flex-col justify-center mx-[20px] lg:ml-[93px] relative z-10">
        {submitted ? (
            <>
   <h1 className="text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px] mb-0 md:mb-8 mt-8 font-bold">Thank you.</h1>
        <h2 className="text-primary text-[24px] sm:text-[26px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold">We will be in touch soon.</h2>
            </>
          ) : (
            <>
        <h1 className="text-white text-[40px] sm:text-[50px] md:text-[60px] lg:text-[90px] xl:text-[120px] mb-0 md:mb-8 mt-[100px] md:mt-0 font-bold">Contact us</h1>
        <h2 className="text-primary text-xl sm:text-[26px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold">Ready to make waves?</h2>
        <hr className="w-2/5 my-2 md:my-8"/>
        <p className="text-white text-base sm:text-xl leading-relaxed">Please fill in the contact form and we will get back to you</p>
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
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-lg text-gray-400 placeholder-gray-400 bg-[#1d1d1db0] border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3 mt-8">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-lg text-gray-400 placeholder-gray-400 bg-[#1d1d1db0] border-0 rounded shadow outline-none"
          required
        />
      </div>
      <div className="pt-0 mb-3 mt-8">
        <textarea
          placeholder="Your message"
          name="message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-lg text-gray-400 placeholder-gray-400 bg-[#1d1d1db0] border-0 rounded shadow outline-none h-[160px]"
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