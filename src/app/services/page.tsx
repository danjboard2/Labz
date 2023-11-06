"use client"
import React, { Component, useState,  useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Logo from "../../components/Logo"
import ServicesHero from '../../components/services/ServicesHero'
import ProjectSection from '../../components/services/Project'
import "../../styles/Services.css";
import Navigation from "../../components/Navigation";


const ParentComponent: React.FC<{}> = () => {

    return (
    <>
    <main className="services bg-[#000] h-screen p-0 opacity-1 relative w-full">
    <Navigation page="services"/>
      <section className="h-screen">
          <ServicesHero />
         <ProjectSection/>
      </section>
    </main>
    </>
  )
}
export default ParentComponent;