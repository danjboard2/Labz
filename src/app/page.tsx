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
    <main className="lockedhp flex bg-homepage bg-cover min-h-screen flex-col items-center justify-center p-24 absolute top-0 bottom-0 left-0 right-0 z-100">
    <CustomButton updateCount={this.updateCount} count={this.state.count} />
    </main>
    <main className="homepage bg-[#000] min-h-screen flex-col items-center justify-center p-24 flex opacity-0">
      <section className="hp-content">
      <h1 className="font-bold text-6xl text-[#fff]">Homepage shizzle.</h1>
      </section>
    </main>
    </>
  )
}
}
export default ParentComponent;