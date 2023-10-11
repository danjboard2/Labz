import TimelineAnims from './section/timeline'
import { gsap } from "gsap";
import React, {useLayoutEffect} from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles/TimelineAnims.css";

gsap.registerPlugin(ScrollTrigger);

export default function Timeline() {
    return (
        <>
        <section className="timeline bg-black w-full pb-[5000px] block">
        <TimelineAnims/>
        </section>
        </>
    )
};