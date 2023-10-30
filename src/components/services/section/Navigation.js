import { useState } from 'react';
import Image from 'next/image';
import { gsap} from "gsap";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";

gsap.registerPlugin(ScrollToPlugin);

const navItems = [
  { id: 'innovationData', imgSrc: '/media/images/wwd-icons/icon-bc.svg', imgAlt: 'Blockchain' },
  { id: 'walletData', imgSrc: '/media/images/wwd-icons/icon-wa.svg', imgAlt: 'Wallet' },
  { id: 'whitelabelData', label: 'White Label' },
  { id: 'designData', imgSrc: '/media/images/wwd-icons/icon-cg.svg', imgAlt: 'Cg' },
];

const Navigation = ({ dataPath, endPoints, scrollToScrubEnd }) => {
  const handleButtonClick = (id) => {
    if (typeof scrollToScrubEnd === 'function' && endPoints && endPoints[`#${id}`]) {
      scrollToScrubEnd(`#${id}`, endPoints[`#${id}`]);
    }
  };

  const buttonClass = "services-nav relative mt-6 a w-[70px] h-[72px] md:w-[70px] md:h-[72px] lg:w-[100px] lg:h-[102.67px] xl:w-[126.8px] xl:h-[130.67px] border-[4px] sm:border-[7.88px] border-[#828282] rounded-[5.73px] flex justify-center items-center transition-all duration-500 delay-300";

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