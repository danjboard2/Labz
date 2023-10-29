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

export default function Project() {
    const [dataPath, setDataPath] = useState('innovationData'); // Default data

  return (
    <section className="flex w-full h-full justify-center items-start pt-10">
      <div className="flex flex-col w-1/12 min-w-[180px] items-start">
        <Navigation setDataPath={setDataPath} />
      </div>
      <div className="flex flex-col w-9/12">
      <ProjectTemplate dataPath={dataPath} />
      </div>
    </section>
  );
}
