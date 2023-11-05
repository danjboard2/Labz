import React, { useState, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { addClass } from "rsuite/esm/DOMHelper";
import Navigation from './Navigation';
import ProjectTemplate from './ProjectTemplate';

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function Project({ id, scrollToScrubEnd, endPoints  }) {
    //const [dataPath, setDataPath] = useState('innovationData'); // Default data
//console.log(id)
  return (
    <section className="flex w-full h-full justify-center items-start pt-4 ">
      <div className="flex flex-col w-1/12 min-w-[180px] items-start self-center">
        <Navigation dataPath={id}  endPoints={endPoints} scrollToScrubEnd={scrollToScrubEnd} />
      </div>
      <div className="flex flex-col w-9/12" id={id}>
      <ProjectTemplate dataPath={id} />
      </div>
    </section>
  );
}
