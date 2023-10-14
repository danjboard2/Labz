import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { addClass } from "rsuite/esm/DOMHelper";
import Image from 'next/image'

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function TeamAnims() {
  useLayoutEffect(() => {
    // Create a timeline context


  // Create a timeline context
  let ctx = gsap.context(() => {

    gsap.to(".team-inner-left", {
      filter: "blur(0px)",
      opacity:1,
      rotation: 0,
      scrollTrigger: {
        trigger: ".inspiration-inner",
        start: "bottom+=450px bottom-=100px",
        end: "bottom+=1000px bottom-=400px",
        scrub: true,
        //markers: true,
        id: "quote"
      }
    });
    gsap.to(".team-inner-right", {
      filter: "blur(0px)",
      opacity:1,
      rotation: 0,
      scrollTrigger: {
        trigger: ".inspiration-inner",
        start: "bottom+=450px bottom-=100px",
        end: "bottom+=1000px bottom-=400px",
        scrub: true,
        //markers: true,
        id: "quote"
      }
    });
  });

  // Revert the context when the component unmounts
  return () => ctx.revert();
}, []); // Empty dependency array so it runs only once on mount


  return (
          <>
        <section className="teams-wrap w-full h-full absolute flex justify-center items-center">
            <article className="flex flex-row w-full mx-[93px]">
            <div className="team-inner-left flex w-2/3 flex-col pr-10">
          <h2 className="relative quote text-9xl text-white font-bold">We are <span className="text-primary">Labz</span></h2>
          <hr className=" w-5/12 border-[#828282] mt-12 mb-24"/>
          <div className="member-wrap flex flex-row items-center">
            <div className="profile-photo w-2/5 max-w-[350px] flex justify-center items-center border-4 border-primary rounded-lg mr-10  bg-[linear-gradient(180deg,_#FF3D00_0%,_rgba(255,61,0,0.00)_100%)]">
              <Image
                src="/media/images/team/team-member-1.png"
                alt="Picture of the team member"
                width={300}
                height={300}
                className="-mt-20 pb-8"
              />
            </div>
            <div className="member-info w-3/5">
              <div className="member-names flex flex-row pb-8 items-center">
                <div className="names mr-10">
                  <h3 className="text-3xl font-bold text-white">Name Surname</h3>
                  <h4 className="text-3xl font-bold text-primary">CEO/Founder</h4>
                </div>
                <div className="linkedin">
                  <a href="https://www.linkedin.com/in/"><Image src="/media/images/linkedin.svg" width={60} height={60} alt="LinkedIn"/></a>
                </div>
              </div>
              <div className="member-desc text-xl text-white">
                <p>A distinguished entrepreneur with over a decade of expertise in blockchain technology and a relentless drive to advance the adoption of digital assets. Specialising in innovative ideas and creative solutions propelling the industry forward with a visionary approach, leveraging a global network of esteemed web3 and deep tech professionals.</p>
                </div>
          </div>
          </div>
          </div>  
          <div className="team-inner-right flex w-[1/3]">
            {/* team member */}
          <div class="member-wrap w-[30%] mr-[3%]">
              <div class="member-thumb border-4 border-primary rounded-lg mb-2 bg-[linear-gradient(180deg,_#FF3D00_0%,_rgba(255,61,0,0.00)_100%)]">
                  <Image
                    src="/media/images/team/team-member-1.png"
                    alt="Picture of the team member"
                    width={200}
                    height={200}
                    className="-mt-10 pb-4"/>
                </div>
                <div className="member-details flex flex-row justify-between pb-8 items-center">
                <div className="names-small mr-10">
                  <h3 className="text-base font-bold text-white">Name Surname</h3>
                  <h4 className="text-base font-bold text-primary">CEO/Founder</h4>
                </div>
                <div className="linkedin-small">
                  <a href="https://www.linkedin.com/in/"><Image src="/media/images/linkedin.svg" width={30} height={30} alt="LinkedIn"/></a>
                </div>
              </div>
              </div>
          {/* end team member */}

          {/* team member */}
           <div class="member-wrap w-[30%] mr-[3%]">
              <div class="member-thumb border-4 border-primary rounded-lg mb-2 bg-[linear-gradient(180deg,_#FF3D00_0%,_rgba(255,61,0,0.00)_100%)]">
                  <Image
                    src="/media/images/team/team-member-1.png"
                    alt="Picture of the team member"
                    width={200}
                    height={200}
                    className="-mt-10 pb-4"/>
                </div>
                <div className="member-details flex flex-row justify-between pb-8 items-center">
                <div className="names-small mr-10">
                  <h3 className="text-base font-bold text-white">Name Surname</h3>
                  <h4 className="text-base font-bold text-primary">CEO/Founder</h4>
                </div>
                <div className="linkedin-small">
                  <a href="https://www.linkedin.com/in/"><Image src="/media/images/linkedin.svg" width={30} height={30} alt="LinkedIn"/></a>
                </div>
              </div>
              </div>
          {/* end team member */}

          {/* team member */}
          <div class="member-wrap w-[30%] mr-[3%]">
              <div class="member-thumb border-4 border-primary rounded-lg mb-2 bg-[linear-gradient(180deg,_#FF3D00_0%,_rgba(255,61,0,0.00)_100%)]">
                  <Image
                    src="/media/images/team/team-member-1.png"
                    alt="Picture of the team member"
                    width={200}
                    height={200}
                    className="-mt-10 pb-4"/>
                </div>
                <div className="member-details flex flex-row justify-between pb-8 items-center">
                <div className="names-small mr-10">
                  <h3 className="text-base font-bold text-white">Name Surname</h3>
                  <h4 className="text-base font-bold text-primary">CEO/Founder</h4>
                </div>
                <div className="linkedin-small">
                  <a href="https://www.linkedin.com/in/"><Image src="/media/images/linkedin.svg" width={30} height={30} alt="LinkedIn"/></a>
                </div>
              </div>
              </div>
          {/* end team member */}

          </div>
          </article>
          </section>
      </>
  );
};
