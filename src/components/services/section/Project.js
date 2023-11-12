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
    <section className="flex w-full h-full justify-start md:justify-center items-center md:items-start pt-4 flex-col md:flex-row">
      <div className="flex flex-wrap flex-row md:flex-col w-[95%] justify-center gap-6 md:w-2/12 min-w-[120px] lg:min-w-[180px] pt-28 items-center">
        <Navigation dataPath={id}  endPoints={endPoints} scrollToScrubEnd={scrollToScrubEnd} />
      </div>
      <div className="flex flex-col w-10/12" id={id}>
      <ProjectTemplate dataPath={id} />
      </div>
    </section>
  );
}
