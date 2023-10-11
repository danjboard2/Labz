import TimelineAnims from './section/timeline'
import TimelineAnimsTwo from './section/timelinetwo'
import { gsap } from "gsap";
import React, {useLayoutEffect} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/TimelineAnims.css";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
    return (
        <>
        <section className="timeline bg-black w-full block">
        <TimelineAnims/>
        </section>
        <section className="timeline bg-white w-full block pb-[2000px]">
        <TimelineAnimsTwo/>
        </section>
        </>
    )
};