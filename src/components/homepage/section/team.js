import React, { useEffect, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { addClass } from "rsuite/esm/DOMHelper";
import Image from 'next/image'

const teamMembers = [
  {
    name: "Name Surname",
    jobTitle: "CEO/Founder",
    linkedinURL: "https://www.linkedin.com/in/member1",
    bio: "A distinguished entrepreneur with over a decade of expertise in blockchain technology and a relentless drive to advance the adoption of digital assets. Specialising in innovative ideas and creative solutions propelling the industry forward with a visionary approach, leveraging a global network of esteemed web3 and deep tech professionals.",
    imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
  },
  {
    name: "Team Member 2 Name",
    jobTitle: "Job Title 2",
    linkedinURL: "https://www.linkedin.com/in/member2",
    bio: "Bio for Team Member 2",
    imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
  },
  {
    name: "Team Member 3 Name",
    jobTitle: "Job Title 3",
    linkedinURL: "https://www.linkedin.com/in/member3",
    bio: "Bio for Team Member 3",
    imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
  },
  {
    name: "Team Member 4 Name",
    jobTitle: "Job Title 4",
    linkedinURL: "https://www.linkedin.com/in/member4",
    bio: "Bio for Team Member 4",
    imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
  },
  {
    name: "Team Member 5 Name",
    jobTitle: "Job Title 5",
    linkedinURL: "https://www.linkedin.com/in/member5",
    bio: "Bio for Team Member 5",
    imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
  },
  {
    name: "Team Member 6 Name",
    jobTitle: "Job Title 6",
    linkedinURL: "https://www.linkedin.com/in/member6",
    bio: "Bio for Team Member 6",
    imageUrl: "/media/images/team/team-member-1.png", // Replace with the actual image URL
  },
];

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

export default function TeamAnims() {

  const [selectedMemberIndex, setSelectedMemberIndex] = useState(-1);

  const handleMemberClick = (index) => {
    setSelectedMemberIndex(index);
  };


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
            <article className="flex flex-row w-full mx-[93px] items-center">
            <div className="team-inner-left flex w-3/5 flex-col pr-10">
          <h2 className="relative quote text-9xl text-white font-bold">We are <span className="text-primary">Labz</span></h2>
          <hr className=" w-5/12 border-[#828282] mt-12 mb-24"/>
          <div className="member-wrap flex flex-row items-center">
            <div className="profile-photo w-2/5 max-w-[250px] flex justify-center items-center border-4 border-primary rounded-lg mr-10  bg-[linear-gradient(180deg,_#FF3D00_0%,_rgba(255,61,0,0.00)_100%)]">
            <Image
                src={teamMembers[selectedMemberIndex]?.imageUrl}
                alt={`Picture of ${teamMembers[selectedMemberIndex]?.name}`}
                width={200}
                height={200}
                className="-mt-10 pb-4"
              />
            </div>
            <div className="member-info w-3/5">
              <div className="member-names flex flex-row pb-8 items-center">
                <div className="names mr-10">
                  <h3 className="text-3xl font-bold text-white"> {teamMembers[selectedMemberIndex]?.name}</h3>
                  <h4 className="text-3xl font-bold text-primary">{teamMembers[selectedMemberIndex]?.jobTitle}</h4>
                </div>
                <div className="linkedin">
                  <a href={teamMembers[selectedMemberIndex]?.linkedinURL}><Image src="/media/images/linkedin.svg" width={60} height={60} alt="LinkedIn"/></a>
                </div>
              </div>
              <div className="member-desc text-xl text-white">
                <p>{teamMembers[selectedMemberIndex]?.bio}</p>
                </div>
          </div>
          </div>
          </div>  
          <div className="team-inner-right flex w-2/5 flex-wrap">

            {/* team member */}
            {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`member-wrap w-[30%] mr-[3%] max-w-[200px] my-4 ${
                selectedMemberIndex === index ? "active" : ""
              }`}
              onClick={() => handleMemberClick(index)}
            >
              <div className="member-thumb border-4 border-primary rounded-lg mb-2 bg-[linear-gradient(180deg,_#FF3D00_0%,_rgba(255,61,0,0.00)_100%)]">
                <Image
                  src={member.imageUrl}
                  alt={`Picture of ${member.name}`}
                  width={200}
                  height={200}
                  className="-mt-10 pb-4"
                />
              </div>
              <div className="member-details flex flex-row justify-between pb-8 items-center">
                <div className="names-small mr-10">
                  <h3 className="text-base font-bold text-white">
                    {member.name}
                  </h3>
                  <h4 className="text-base font-bold text-primary">
                    {member.jobTitle}
                  </h4>
                </div>
                <div className="linkedin-small">
                  <a href={member.linkedinURL}>
                    <Image
                      src="/media/images/linkedin.svg"
                      width={30}
                      height={30}
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* end team member */}

          </div>
          </article>
          </section>
      </>
  );
};
