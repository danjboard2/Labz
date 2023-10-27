import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import '../../../styles/Services.css'

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

  return (
    <>
      <h1 className="text-white text-[120px]">{data.sectionTitle}</h1>
      <h2 className="text-primary text-[50px] mt-10">{data.subtitle}</h2>
      <div className="flex flex-row w-full">
          <div className="flex w-1/2 flex-col pr-8">
          <hr className="  border-[#828282] w-3/5"/>
          <h1 className="text-white text-[30px]">{data.title}</h1>
          <p className="text-white text-xl mb-6">{data.paragraph}</p>
          <div className="text-white text-xl ml-[30px]" dangerouslySetInnerHTML={{ __html: data.list }} />
          </div>
          <div className="flex w-1/2 justify-center items-center">
          <img src={additionalContent} alt={data.title} />
          </div>
      </div>
      {/* projects list */}
      <div className="flex flex-row w-full justify-around mt-10 mb-10">
      {data.additionalData && Object.keys(data.additionalData).map((buttonKey, index) => (
        <button className="h-[90px] mt-6 rounded-[5px] border-[1px] border-[#828282] w-full mr-6 mb-6 text-white text-xl hover:scale-125 transition-all bg-black duration-300 max-w-[235px]" key={index} onClick={() => handleAdditionalClick(buttonKey)}>
          Project {index + 1}
        </button>
      ))}
    </div>
      {/* projects list */}

      <h2 className="text-primary text-[30px]">{data.title2}</h2>
      <div className="text-white text-xl" dangerouslySetInnerHTML={{ __html: data.content }} />
      <Carousel serviceName={dataPath} carouselData={data?.carouselData} />
      </>
  );
};

export default ContentTemplate;