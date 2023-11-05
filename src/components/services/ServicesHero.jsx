import ServicesHeroAnim from './section/Hero.js'
import Project from '../../components/services/section/Project.js'
import ServicesHeroBackground from './section/servicesherobackground.js'
import "../../styles/HomepageAnim.css";
import { gsap } from "gsap";
import React, {useLayoutEffect} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollDown from "../../components/ScrollDown";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesHero() {

    useLayoutEffect(() => {
  
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
    
                gsap.to(".services-hero-outer", {
                    scrollTrigger: {
                trigger: ".services-hero-outer",
                pin: ".services-hero-outer",
                start: "top top",
                end: "+=1200",
                pinSpacing: "margin", // Disable automatic spacing adjustment
                scrub:true,
                markers:true,
                id: "Services",
                    }
        });
    },); // <- IMPORTANT! Scopes selector text
        
    return () => ctx.revert(); // cleanup
    }, []); // <- empty dependency Array so it doesn't re-run on every render

    return (
        <>
        <section className="services-hero-outer relative w-full h-screen overflow-hidden flex justify-center items-center">
        <ServicesHeroBackground />
            <ServicesHeroAnim />
            <ScrollDown />
        </section>
        </>
    )
};