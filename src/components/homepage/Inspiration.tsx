import InspirationAnims from './section/inspiration'
import { gsap } from "gsap";
import React, {useLayoutEffect} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/Inspiration.css";

gsap.registerPlugin(ScrollTrigger);

export default function Inspiration() {

    useLayoutEffect(() => {
  
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
    
                gsap.to(".inspiration", {
                    scrollTrigger: {
                trigger: ".inspiration",
                pin: ".inspiration",
                start: "top top",
                end: "+=1900",
                pinSpacing: "margin", // Disable automatic spacing adjustment
                scrub:true,
                //markers:true,
                id: "inspiration",
                    }
        });
    },); // <- IMPORTANT! Scopes selector text
        
    return () => ctx.revert(); // cleanup
    }, []); // <- empty dependency Array so it doesn't re-run on every render

    return (
        <>
        <section className="inspiration bg-black w-full min-h-full block pb-[5000px]">
            <InspirationAnims/>
        </section>
        </>
    )
};