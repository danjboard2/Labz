"use client"
import React, { Component } from "react";
import Image from 'next/image'
import Script from 'next/script'
import CustomButton from "../components/slider/CustomButton.js";
import "../components/slider/CustomButton.css";
import Logo from "../components/Logo"

interface ParentState {
  count: number;
}

class ParentComponent extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // Define a function to update the count
  updateCount = (newCount: number) => {
    this.setState({ count: newCount });
  };

  render() {
    return (
    <>
     <Script src="/media/scripts/dat.gui.min.js" strategy="afterInteractive" async/>
     <div className="bg-homepage bg-cover z-1 absolute top-0 bottom-0 left-0 right-0"></div>
    <main className="lockedhp flex min-h-screen flex-col items-center justify-center p-24 absolute top-0 bottom-0 left-0 right-0 z-100">
    <CustomButton updateCount={this.updateCount} count={this.state.count} />
    </main>
    <main className="homepage bg-[#000] min-h-screen p-0 opacity-0 relative">

      <nav className="navigation absolute top-0 left-0 w-full flex p-[50px] pointer-events-none">
      <Logo />
      </nav>
      <canvas className="homepage-bg-canvas w-full flex"></canvas>
      <section className="hp-content pointer-events-none flex w-screen h-screen items-center justify-center">
      <h1 className="font-regular text-[40px] text-[#fff] select-none">We are <span className="font-bold text-[#FF3D00]">reshaping the future</span> of the digital world.</h1>
      </section>
    </main>
    <Script src="/media/scripts/script.js" strategy="afterInteractive" async/>
    </>
  )
}
}
export default ParentComponent;