import { useState } from 'react';
import Image from 'next/image';

const Navigation = ({ setDataPath }) => {
  const [activeButton, setActiveButton] = useState('innovationData');

  const handleClick = (path) => {
    setDataPath(path);
    setActiveButton(path);
  };

  const buttonClass = "services-nav relative mt-6 a w-[70px] h-[72px] md:w-[70px] md:h-[72px] lg:w-[100px] lg:h-[102.67px] xl:w-[126.8px] xl:h-[130.67px] border-[4px] sm:border-[7.88px] border-[#828282] rounded-[5.73px] flex justify-center items-center";

  return (
    <>
      <button className={`${buttonClass} ${activeButton === 'innovationData' ? 'active' : ''}`} onClick={() => handleClick('innovationData')}>
        <Image src="/media/images/wwd-icons/icon-bc.svg" width={62} height={72} alt="Blockchain" className="w-3/4" />
      </button>
      <button className={`${buttonClass} ${activeButton === 'walletData' ? 'active' : ''}`} onClick={() => handleClick('walletData')}>
        <Image src="/media/images/wwd-icons/icon-wa.svg" width={85} height={72} alt="Wallet" className="w-3/4" />
      </button>
      <button className={`${buttonClass} ${activeButton === 'whitelabelData' ? 'active' : ''}`} onClick={() => handleClick('whitelabelData')}>
        White Label
      </button>
      <button className={`${buttonClass} ${activeButton === 'designData' ? 'active' : ''}`} onClick={() => handleClick('designData')}>
        <Image src="/media/images/wwd-icons/icon-cg.svg" width={64} height={64} alt="Cg" className="w-3/4" />
      </button>
    </>
  );
};

export default Navigation;