import React, { useState, useEffect, useLayoutEffect } from 'react';
import debounce from 'lodash.debounce';
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
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const dynamicData = await import(`../../../app/data/${dataPath}`);
      setData(dynamicData.default);
    };

    fetchData();
  }, [dataPath]);

  const handleAdditionalClick = (button) => {
    const newAdditionalData = data.additionalData[button];
    if (additionalContent !== newAdditionalData.image) { // Check for new content
      setData({
        ...data,
        ...newAdditionalData,
      });
      setAdditionalContent(newAdditionalData.image);
      setFadeIn(false);  // Reset fade-in only if new content is set
    }
  };
  
  useEffect(() => {
    if (additionalContent && !fadeIn) {
      setTimeout(() => {
        setFadeIn(true);  // Then "fade in"
      }, 300);
    }
  }, [additionalContent, fadeIn]);


  useLayoutEffect(() => {
    const debouncedHandleResize = debounce(() => {
      // Your resize code here
    }, 100);

    window.addEventListener('resize', debouncedHandleResize);
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
        marginTop: xs ? 20 : sm ? 40 : 40,
        rotation: 0,
        scrollTrigger: {
          trigger: `#${dataPath}`,
          start: "top-=500px bottom-=100px",
          end: "bottom+=100px bottom-=500px",
          scrub: true,
          //markers: true,
          id: "Project"
        }
      });
      gsap.to(`#${dataPath} .inner-data`, {
       lineHeight: xs ? "1.5em" : sm ? "1.5em" : "1.5em",
        rotation: 0,
        scrollTrigger: {
          trigger: `#${dataPath}`,
          start: "top-=500px bottom-=100px",
          end: "bottom+=100px bottom-=500px",
          scrub: true,
          //markers: true,
          id: "List items"
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
          trigger: `#${dataPath}`,
          start: "top+=1200px bottom-=100px",
          end: "top+=1900px bottom-=500px",
          scrub: true,
          //markers: true,
          id: "buttons"
        }
      });
    }
    };
    gsap.to(`#${dataPath} .benefits-content`, {
      lineHeight: xs ? "1.5em" : sm ? "1.5em" : "1.5em",
       rotation: 0,
       scrollTrigger: {
         trigger: `#${dataPath}`,
         start: "top+=1200px bottom-=100px",
         end: "top+=1800px bottom-=500px",
         scrub: true,
         //markers: true,
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
      <h2 className="text-primary text-[50px] mt-6 font-bold">{data.subtitle}</h2>
      <div className="flex flex-row w-full">
          <div className="flex w-1/2 flex-col pr-8">
          <hr className="  border-[#828282] w-3/5 my-4"/>
          <h1  key={`${data.title}-${dataPath}-title`}  className={`text-white text-[30px] font-bold ${fadeIn ? 'fade-in' : 'fade-out'}`}>{data.title}</h1>
          <p  key={`${data.title}-${dataPath}-paragraph`} className={`text-white text-xl mb-6 ${fadeIn ? 'fade-in' : 'fade-out'}`}>{data.paragraph}</p>
          <div  key={`${data.title}-${dataPath}-list`}  className={`inner-data text-white text-xl ml-[30px] ${fadeIn ? 'fade-in' : 'fade-out'}`} dangerouslySetInnerHTML={{ __html: data.list }} />
          </div>
          <div className="flex w-1/2 justify-center items-center h-[400px]">
          <img src={additionalContent}  key={`${data.title}-${dataPath}`}    alt={data.title} className={`max-h-[400px] ${fadeIn ? 'fade-in' : 'fade-out'}`}/>
          </div>
      </div>
      {/* projects list */}
      <div className="project-buttons flex flex-row w-full justify-around mt-4 mb-4">
      {data.additionalData && Object.keys(data.additionalData).map((buttonKey, index) => (
        <button className={`h-[90px] mt-6 project-${index+1} rounded-[5px] border-[1px] border-[#828282] w-full mr-6 text-white text-xl hover:scale-125 bg-black max-w-[235px]`} key={index} onClick={() => handleAdditionalClick(buttonKey)}>
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