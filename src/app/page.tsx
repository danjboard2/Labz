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
    <CustomButton updateCount={this.updateCount} count={this.state.count} />
    </main>
    
    </>
  )
}
}
export default ParentComponent;