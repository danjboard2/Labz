import { useState } from 'react';
import Image from 'next/image';
import { gsap} from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { id: 'innovationData', imgSrc: '/media/images/wwd-icons/icon-mo.svg', imgAlt: 'Blockchain' },
  { id: 'walletData', imgSrc: '/media/images/wwd-icons/icon-ch.svg', imgAlt: 'Wallet' },
  { id: 'whitelabelData', imgSrc: '/media/images/wwd-icons/icon-bc2.svg', label: 'White Label' },
  { id: 'designData', imgSrc: '/media/images/wwd-icons/icon-cg.svg', imgAlt: 'Design' },
  { id: 'decentralisationData', imgSrc: '/media/images/wwd-icons/icon-wa.svg', imgAlt: 'Decentralisation' },
  { id: 'consultancyData', imgSrc: '/media/images/wwd-icons/icon-con.svg', imgAlt: 'Consultancy' },
];

const Navigation = ({ dataPath, endPoints, scrollToScrubEnd }) => {
  const handleButtonClick = (id) => {
    if (typeof scrollToScrubEnd === 'function' && endPoints && endPoints[`#${id}`]) {
      scrollToScrubEnd(`#${id}`, endPoints[`#${id}`]);
    }
  };

  const buttonClass = "services-nav relative mt-6 a w-[70px] h-[72px] md:w-[70px] md:h-[72px] lg:w-[100px] lg:h-[102.67px] xl:w-[126.8px] xl:h-[130.67px] border-[4px] sm:border-[7.88px] border-[#828282] rounded-[5.73px] flex justify-center items-center transition-all duration-500 hover:border-primary";

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`${buttonClass} ${dataPath === item.id ? 'active' : ''}`}
          onClick={() => handleButtonClick(item.id)}
        >
          {item.imgSrc ? (
            <Image src={item.imgSrc} width={62} height={72} alt={item.imgAlt} className="w-3/4" />
          ) : (
            item.label
          )}
        </button>
      ))}
    </>
  );
};

export default Navigation;