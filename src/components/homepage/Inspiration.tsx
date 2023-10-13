import InspirationAnims from './section/inspiration'
import Team from './section/team'
import { gsap } from "gsap";
import React, {useLayoutEffect} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/Inspiration.css";
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger);

export default function Inspiration() {

    useLayoutEffect(() => {
  
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
    
                gsap.to(".combined", {
                    scrollTrigger: {
                trigger: ".combined",
                pin: ".combined",
                start: "top top",
                end: "+=6000",
                pinSpacing: "margin", // Disable automatic spacing adjustment
                scrub:true,
                //markers:true,
                id: "combined",
                    }
        });
        gsap.fromTo(
            '.inspo-bg',
            {
              opacity: 0,
            },
            {
              opacity: 1,
              scrollTrigger: {
                trigger: '.inspiration',
                start: 'top+=300px bottom-=700px',
                end: 'top+=500px bottom-=900px',
                scrub: true,
              // markers: true,
                id: 'Inspo background opacity',
              },
            }
          );
      
          gsap.fromTo(
            '.inspo-bg',
            {
              top: '50%',
            },
            {
              top: '0%',
              scrollTrigger: {
                trigger: '.inspiration',
                start: 'top bottom-=500px',
                end: 'top+=500px bottom-=200px',
                scrub: true,
                //markers: true,
                id: 'Inspo background position',
              },
            }
          );
    },); // <- IMPORTANT! Scopes selector text
    
    
    return () => ctx.revert(); // cleanup

    
    }, []); // <- empty dependency Array so it doesn't re-run on every render

    
    return (
        <>
        <section className="combined ">
            <section className="inspiration bg-black w-full min-h-full block relative overflow-hidden pb-[5000px]">
                <section className="inspo-bg absolute z-0 left-0 right-0 top-0 min-h-screen w-full bg-[url('/media/images/homepage-bg.jpg')] bg-cover"></section>
                    <section className="inspiration-inner relative min-h-full h-screen">
                        <InspirationAnims/>
                        <Team/>
                    </section>
            </section>
        </section>
        </>
    )
};