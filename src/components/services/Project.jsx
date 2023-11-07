import Project from './section/Project.js'
import "../../styles/HomepageAnim.css";
import { gsap } from "gsap";
import React, {useLayoutEffect, useState, useEffect} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
    const [endPoints, setEndPoints] = useState({});

    function scrollToScrubEnd(id) {
        const endPoint = endPoints[id];
        if (endPoint != null) {
          gsap.to(window, {
            scrollTo: { y: endPoint, autoKill: false },
            duration: 1
          });
        }
      }
    useLayoutEffect(() => {
        const updateEndPoint = (id, endPoint) => {
            setEndPoints(prevState => {
              const newState = { ...prevState, [id]: endPoint };
              //fakeScroll(id, endPoint);  // Trigger fakeScroll right after updating the endpoint
              return newState;
            });
        };
        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {
    
                gsap.to(".project-outer-innovationData", {
                    scrollTrigger: {
                trigger: ".project-outer-innovationData",
                pin: ".project-outer-innovationData",
                start: "top top",
                end: "+=2200px",
                pinSpacing: "padding", // Disable automatic spacing adjustment
                scrub:true,
                //markers:true,
                id: "innovationData",
                onUpdate: self => {
                    if (self.progress === 1) {
                        updateEndPoint("#innovationData", self.end);
                      //console.log('InnovationData completed....');
                    }
                  }
                    }
                });
                gsap.to(".project-outer-walletData", {
                    scrollTrigger: {
                trigger: ".project-outer-walletData",
                pin: ".project-outer-walletData",
                start: "top top",
                end: "+=2200px",
                pinSpacing: "padding", // Disable automatic spacing adjustment
                scrub:true,
                //markers:true,
                id: "walletData",
                onUpdate: self => {
                    if (self.progress === 1) {
                        updateEndPoint("#walletData", self.end);
                      //console.log('walletData completed....');
                    }
                  }
                    }
                });
                gsap.to(".project-outer-whitelabelData", {
                    scrollTrigger: {
                trigger: ".project-outer-whitelabelData",
                pin: ".project-outer-whitelabelData",
                start: "top top",
                end: "+=2200px",
                pinSpacing: "padding", // Disable automatic spacing adjustment
                scrub:true,
                //markers:true,
                id: "whitelabelData",
                onUpdate: self => {
                    if (self.progress === 1) {
                        updateEndPoint("#whitelabelData", self.end);
                     // console.log('whitelabelData completed....');
                    }
                  }
                    }
                });
                gsap.to(".project-outer-designData", {
                  
                    scrollTrigger: {
                trigger: ".project-outer-designData",
                pin: ".project-outer-designData",
                start: "top top",
                end: "+=2200px",
                pinSpacing: "padding", // Disable automatic spacing adjustment
                scrub:true,
                //markers:true,
                id: "designData",
                onUpdate: self => {
                    if (self.progress === 1) {
                        updateEndPoint("#designData", self.end);
                     // console.log('designData completed....');
                    }
                  }
                    }
                });
                gsap.to(".project-outer-decentralisationData", {
                  scrollTrigger: {
              trigger: ".project-outer-decentralisationData",
              pin: ".project-outer-decentralisationData",
              start: "top top",
              end: "+=2200px",
              pinSpacing: "padding", // Disable automatic spacing adjustment
              scrub:true,
              //markers:true,
              id: "decentralisationData",
              onUpdate: self => {
                  if (self.progress === 1) {
                      updateEndPoint("#decentralisationData", self.end);
                   // console.log('decentralisationData completed....');
                  }
                }
                  }
              });
              gsap.to(".project-outer-consultancyData", {
                scrollTrigger: {
            trigger: ".project-outer-consultancyData",
            pin: ".project-outer-consultancyData",
            start: "top top",
            end: "+=4500px",
            pinSpacing: "padding", // Disable automatic spacing adjustment
            scrub:true,
            //markers:true,
            id: "consultancyData",
            onUpdate: self => {
                if (self.progress === 1) {
                    updateEndPoint("#consultancyData", self.end);
                 // console.log('decentralisationData completed....');
                }
              }
                }
            });
    },); // <- IMPORTANT! Scopes selector text
        
    return () => ctx.revert(); // cleanup
    }, []); // <- empty dependency Array so it doesn't re-run on every render
  useEffect(() => {
    const ids = ["#innovationData", "#walletData", "#whitelabelData", "#designData", "#decentralisationData", "#consultancyData"];
    const tl = gsap.timeline({ onComplete: resetScroll });
  
    // Check that elements are available
    ids.forEach(id => {
      const el = document.querySelector(id);
      if (el) {
       // console.log(`Element ${id} exists`);
      } else {
        //console.log(`Element ${id} does not exist`);
      }
    });
  
    // Fake scroll to each section endpoint to trigger ScrollTrigger's onUpdate
    ids.forEach((id, index) => {
      const el = document.querySelector(id);
      if (el) {
        let endPoint = el.getBoundingClientRect().bottom + window.scrollY;
        if (id === "#consultancyData") { /* always set this to the last project block id */
            endPoint += 5000;  // add 1 pixel to the endpoint
        }
        tl.to(window, {
          scrollTo: { y: endPoint, autoKill: false },
          duration: 0.01, // Very fast scroll
        })
      }
    });
  
    // Function to reset scroll position to top
    function resetScroll() {
      gsap.to(window, {
        scrollTo: { y: 0, autoKill: false },
        duration: 0.01,  // Very fast scroll back to top
      });
    }
  }, []);  // Empty dependency array to ensure this runs only once after initial render


    return (
        <>
        <section className="project-outer-innovationData relative w-full h-full flex justify-center items-center z-10 bg-[url(/media/images/projects-bg.jpg)] bg-cover !overflow-visible pb-[700px]">
            <Project id="innovationData" scrollToScrubEnd={scrollToScrubEnd} endPoints={endPoints}/>
        </section>
        <section className="project-outer-walletData relative w-full h-screen flex justify-center items-center z-10 bg-[url(/media/images/projects-bg.jpg)] bg-cover !overflow-visible pb-[700px]">
            <Project id="walletData" scrollToScrubEnd={scrollToScrubEnd} endPoints={endPoints} />
        </section>
        <section className="project-outer-whitelabelData relative w-full h-screen flex justify-center items-center z-10 bg-[url(/media/images/projects-bg.jpg)] bg-cover !overflow-visible pb-[700px]">
            <Project id="whitelabelData" scrollToScrubEnd={scrollToScrubEnd} endPoints={endPoints}/>
        </section>
                <section className="project-outer-designData relative w-full h-screen flex justify-center items-center z-10 bg-[url(/media/images/projects-bg.jpg)] bg-cover !overflow-visible  pb-[700px]">
            <Project id="designData" scrollToScrubEnd={scrollToScrubEnd} endPoints={endPoints}/>
        </section>
        <section className="project-outer-decentralisationData relative w-full h-screen flex justify-center items-center z-10 bg-[url(/media/images/projects-bg.jpg)] bg-cover !overflow-visible pb-[700px]">
            <Project id="decentralisationData" scrollToScrubEnd={scrollToScrubEnd} endPoints={endPoints}/>
        </section>
        <section className="project-outer-consultancyData relative w-full h-screen flex justify-center items-center z-10 bg-[url(/media/images/projects-bg.jpg)] bg-cover !overflow-visible mb-[6500px]">
            <Project id="consultancyData" scrollToScrubEnd={scrollToScrubEnd} endPoints={endPoints}/>
        </section>
        </>
    )
};