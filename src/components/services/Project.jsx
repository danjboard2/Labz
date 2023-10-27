import Project from './section/Project.js'
import "../../styles/HomepageAnim.css";
import { gsap } from "gsap";
import React, {useLayoutEffect} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {

    useLayoutEffect(() => {
  
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
    
                gsap.to(".project-outer", {
                    scrollTrigger: {
                trigger: ".project-outer",
                pin: ".project-outer",
                start: "top top",
                end: "+=1200",
                pinSpacing: "margin", // Disable automatic spacing adjustment
                scrub:true,
                //markers:true,
                id: "Project",
                    }
        });
    },); // <- IMPORTANT! Scopes selector text
        
    return () => ctx.revert(); // cleanup
    }, []); // <- empty dependency Array so it doesn't re-run on every render

    return (
        <>
        <section className="project-outer relative w-full h-screen overflow-hidden flex justify-center items-center z-10 bg-[url(/media/images/projects-bg.jpg)] bg-cover ">
            <Project />
        </section>
        </>
    )
};