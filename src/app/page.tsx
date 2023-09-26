"use client"
import React, { Component } from "react";
import Image from 'next/image'
import CustomButton from "../components/slider/CustomButton.js";
import "../components/slider/CustomButton.css";

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
    <main className="flex bg-homepage bg-cover min-h-screen flex-col items-center justify-center p-24">
     <div className="slide-unlock flex relative">
      <div className="pulsing-rectangle relative flex w-[59px] h-[62px]">
        <div className="counter absolute left-[12px] top-[10px] text-[8.9px] font-bold text-[#fff]">{this.state.count}</div>
        <Image className="absolute block" src="/media/images/labz-rectangle-slide.png" width={59} height={61} alt={'Welcome to Labz'}/>
        <Image className="pulse absolute" src="/media/images/labz-rectangle-slide-outer1.png" width={82} height={84} alt={'Welcome to Labz'}/>
        <Image className="pulse2 absolute" src="/media/images/labz-rectangle-slide-outer2.png" width={107} height={110} alt={'Welcome to Labz'}/>
        <Image className="pulse3 absolute" src="/media/images/labz-rectangle-slide-outer3.png" width={147} height={152} alt={'Welcome to Labz'}/>
      </div>
      <div className="arrow-right absolute left-[150px] top-[20px] w-[46px]">
        <Image src="/media/images/arrow-right.png" width={46} height={20} alt={'Swipe right'}/>
      </div>
     </div>
    </main>
    <CustomButton updateCount={this.updateCount} count={this.state.count} />
    </>
  )
}
}
export default ParentComponent;