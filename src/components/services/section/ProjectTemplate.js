import React, { useState, useEffect, useLayoutEffect } from 'react';
import Carousel from './Carousel';
import '../../../styles/Services.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register the GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);

const ContentTemplate = ({ dataPath }) => {
  const [data, setData] = useState({ title: '', subtitle: '', paragraph: '', list: '', additionalData: {}, carouselData: {} });

  const [additionalContent, setAdditionalContent] = useState({ text: [], images: [] });

  useEffect(() => {
    const fetchData = async () => {
      const dynamicData = await import(`../../../app/data/${dataPath}`);
      setData(dynamicData.default);
    };

    fetchData();
  }, [dataPath]);

  const handleAdditionalClick = (button) => {
    setData(prevData => ({
      ...prevData,
      title: prevData.additionalData[button].title,
      paragraph: prevData.additionalData[button].paragraph,
      list: prevData.additionalData[button].list,
    }));
    setAdditionalContent(data.additionalData[button].image);
  };
  useLayoutEffect(() => {
    // Create a timeline context
  const mm = gsap.matchMedia();
  mm.add(
    {
      xs: '(min-width: 0px) and (max-width: 479px)',
      sm: '(min-width: 480px) and (max-width: 767px)',
      md: '(min-width: 768px) and (max-width: 1023px)',
      lg: '(min-width: 1024px) and (max-width: 1439px)',
      xl: '(min-width: 1440px) and (max-width: 1919px)',
      xxl: '(min-width: 1920px) and (max-width: 5000px)',
    },
    (c) => {
      let { xs, sm, md, lg, xl, xxl } = c.conditions;
      gsap.to(`#${dataPath} h1.services-title`, {
        marginBottom: xs ? 20 : sm ? 40 : 20,
        rotation: 0,
        scrollTrigger: {
          trigger: `.project-outer-${dataPath}`,
          start: "top-=500px bottom-=100px",
          end: "bottom+=100px bottom-=500px",
          scrub: true,
         // markers: true,
          id: "First project"
        }
      });
      gsap.to(`#${dataPath} .inner-data`, {
       lineHeight: xs ? "1.5em" : sm ? "1.5em" : "1.5em",
        rotation: 0,
        scrollTrigger: {
          trigger: `.project-outer-${dataPath}`,
          start: "top-=500px bottom-=100px",
          end: "bottom+=100px bottom-=500px",
          scrub: true,
          //markers: true,
          id: "UL"
        }
      });
        for (let i = 1; i <= Object.keys(data.additionalData).length; i++) {
          let button = document.querySelector(`button.project-${i}`);
          if (button) { // Check if the button exists in the DOM
          //console.log(`running inside number is: ${i}`)
        gsap.to(`#${dataPath} button.project-${i}`, {
        marginTop: 0,
        transitionDuration: 0,
        scrollTrigger: {
          trigger: `.project-outer-${dataPath}`,
          start: "top+=1200px bottom-=100px",
          end: "top+=1900px bottom-=500px",
          scrub: true,
          //markers: true,
          id: "button1"
        }
      });
    }
    };
    gsap.to(`#${dataPath} .benefits-content`, {
      lineHeight: xs ? "1.5em" : sm ? "1.5em" : "1.5em",
       rotation: 0,
       scrollTrigger: {
         trigger: `.project-outer-${dataPath}`,
         start: "top+=1200px bottom-=100px",
         end: "top+=1800px bottom-=500px",
         scrub: true,
         markers: true,
         id: "benefit content"
       }
     });
    });
    // Revert the context when the component unmounts
    return () => mm.revert();
  }, [data.additionalData]); // Empty dependency array so it runs only once on mount
  return (
    <>
      <h1 className="services-title text-white text-[120px] font-bold">{data.sectionTitle}</h1>
      <h2 className="text-primary text-[50px] mt-10 font-bold">{data.subtitle}</h2>
      <div className="flex flex-row w-full">
          <div className="flex w-1/2 flex-col pr-8">
          <hr className="  border-[#828282] w-3/5 my-10"/>
          <h1 className="text-white text-[30px] font-bold">{data.title}</h1>
          <p className="text-white text-xl mb-6">{data.paragraph}</p>
          <div className="inner-data text-white text-xl ml-[30px]" dangerouslySetInnerHTML={{ __html: data.list }} />
          </div>
          <div className="flex w-1/2 justify-center items-center h-[400px]">
          <img src={additionalContent} alt={data.title} className="max-h-[400px]"/>
          </div>
      </div>
      {/* projects list */}
      <div className="project-buttons flex flex-row w-full justify-around mt-10 mb-10">
      {data.additionalData && Object.keys(data.additionalData).map((buttonKey, index) => (
        <button className={`h-[90px] mt-6 project-${index+1} rounded-[5px] border-[1px] border-[#828282] w-full mr-6 mb-6 text-white text-xl hover:scale-125 bg-black max-w-[235px]`} key={index} onClick={() => handleAdditionalClick(buttonKey)}>
          Project {index + 1}
        </button>
      ))}
    </div>
      {/* projects list */}

      <h2 className="text-primary text-[30px] font-bold" id="keybenefits">{data.title2}</h2>
      <div className="benefits-content text-white text-xl" dangerouslySetInnerHTML={{ __html: data.content }} />
      <Carousel serviceName={dataPath} carouselData={data?.carouselData} />
      <div id={'end-' + dataPath}></div>
      </>
  );
};

export default ContentTemplate;