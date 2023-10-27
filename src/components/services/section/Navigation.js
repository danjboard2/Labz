import Image from 'next/image';

const Navigation = ({ setDataPath }) => {
  return (
       <>
      <button className="mt-6 icon a w-[70px] h-[72px] md:w-[70px] md:h-[72px] lg:w-[100px] lg:h-[102.67px]  xl:w-[126.8px] xl:h-[130.67px] border-[4px] sm:border-[7.88px] border-[#FF3D00] rounded-[5.73px] flex justify-center items-center" onClick={() => setDataPath('innovationData')}><Image src="/media/images/wwd-icons/icon-bc.svg" width={62} height={72} alt="Blockchain" className="w-3/4"/></button>
      <button className="mt-6 icon a w-[70px] h-[72px] md:w-[70px] md:h-[72px] lg:w-[100px] lg:h-[102.67px]  xl:w-[126.8px] xl:h-[130.67px] border-[4px] sm:border-[7.88px] border-[#FF3D00] rounded-[5.73px] flex justify-center items-center" onClick={() => setDataPath('walletData')}><Image src="/media/images/wwd-icons/icon-wa.svg" width={85} height={72} alt="Wallet" className="w-3/4"/></button>
      <button className="mt-6 icon a w-[70px] h-[72px] md:w-[70px] md:h-[72px] lg:w-[100px] lg:h-[102.67px]  xl:w-[126.8px] xl:h-[130.67px] border-[4px] sm:border-[7.88px] border-[#FF3D00] rounded-[5.73px] flex justify-center items-center" onClick={() => setDataPath('whitelabelData')}>White Label</button>
      <button className="mt-6 icon a w-[70px] h-[72px] md:w-[70px] md:h-[72px] lg:w-[100px] lg:h-[102.67px]  xl:w-[126.8px] xl:h-[130.67px] border-[4px] sm:border-[7.88px] border-[#FF3D00] rounded-[5.73px] flex justify-center items-center" onClick={() => setDataPath('designData')}><Image src="/media/images/wwd-icons/icon-cg.svg" width={64} height={64} alt="Cg" className="w-3/4"/></button>
      </>
  );
};

export default Navigation;