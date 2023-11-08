"use client";
import React, { useEffect } from 'react';
import './loading.css';

export default function Loading() {
  useEffect(() => {
    const boxes = document.querySelectorAll(".box");
    
    console.log(boxes);

    const interval = 100;
    
    function loading() {
      boxes.forEach((item, index) => {
        setTimeout(() => {
          const htmlItem = item as HTMLElement;
          htmlItem.style.animation = "loading_anim 1s ease-in-out forwards";
          // Remove the animation after it's done
          setTimeout(() => {
            htmlItem.style.animation = "";
          }, 1000); // This 1000 should match the duration of the animation
        }, index * interval);
      });
    }
    
    const intervalId = setInterval(loading, 1750);
    
    // Start the loading animation immediately
    loading();

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };

    // Empty dependency array means this effect will only run once (like componentDidMount)
  }, []);

  return (
    <>
    <section className="absolute top-0 left-0 bottom-0 right-0">
      <section className="justify-center items-center h-full flex gap-4">
        <div className="box"><span className="txt">L</span></div>
        <div className="box"><span className="txt">o</span></div>
        <div className="box"><span className="txt">a</span></div>
        <div className="box"><span className="txt">d</span></div>
        <div className="box"><span className="txt">i</span></div>
        <div className="box"><span className="txt">n</span></div>
        <div className="box"><span className="txt">g</span></div>
      </section>
    </section>
    </>
  );
}