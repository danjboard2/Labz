"use client"
import React, { Component, useState,  useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import CustomButton from "../components/slider/CustomButton.js";
import "../styles/CustomButton.css";

import { Drawer, ButtonToolbar, Button, Placeholder } from 'rsuite';
interface ParentState {
  count: number;
}
const ParentComponent: React.FC<{}> = () => {

    return (
    <>
     <div className="bg-homepage bg-cover z-1 absolute top-0 bottom-0 left-0 right-0"></div>
    <main className="lockedhp w-full flex min-h-screen flex-col items-center justify-center p-24 absolute top-0 bottom-0 left-0 right-0 z-100">
    <CustomButton/>
    </main>
    <main className="homepage bg-[#000] min-h-screen p-0 opacity-0 relative w-full h-screen overflow-hidden">
    </main>
    </>
  )
}
export default ParentComponent;