import WhatWeDoText from './section/whatwedo-text'
import HomepageBackground from './section/homepagebackground'
import "../../styles/HomepageAnim.css";
import { gsap } from "gsap";
import React, {useLayoutEffect} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {

    useLayoutEffect(() => {
  
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
    
                gsap.to(".whatwedo", {
                    scrollTrigger: {
                trigger: ".whatwedo",
                pin: ".whatwedo",
                start: "top top",
                end: "+=900",
                pinSpacing: "margin", // Disable automatic spacing adjustment
                scrub:true,
                //markers:true,
                id: "Pin",
                    }
        });
    },); // <- IMPORTANT! Scopes selector text
        
    return () => ctx.revert(); // cleanup
    }, []); // <- empty dependency Array so it doesn't re-run on every render

    return (
        <>
        <section className="whatwedo relative w-full min-h-full overflow-hidden flex justify-center items-center">
        <HomepageBackground />
            <WhatWeDoText />
        </section>
        </>
    )
};