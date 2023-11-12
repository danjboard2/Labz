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

  const buttonClass = "services-nav relative md:mt-6 a w-[60px] h-[62px] md:w-[70px] md:h-[72px] lg:w-[90px] lg:h-[92.67px] border-[4px] lg:border-[5.5px] border-[#828282] rounded-[10px] flex justify-center items-center transition-all duration-500 hover:border-primary";

  return (
    <>
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`${buttonClass} ${dataPath === item.id ? 'active' : ''}`}
          onClick={() => handleButtonClick(item.id)}
        >
          {item.imgSrc ? (
            <Image src={item.imgSrc} width={62} height={72} alt={item.imgAlt} className="w-3/5" />
          ) : (
            item.label
          )}
        </button>
      ))}
    </>
  );
};

export default Navigation;