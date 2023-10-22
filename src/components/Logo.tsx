import Image from 'next/image'
import Link from 'next/link'

export default function Logo(){
    return (
        <div className="logo relative select-none z-10">
            <Link href="/" title="Labz">
            <Image src="/media/images/labz-logo.svg" width={94.3} height={58} alt="Labz Logo"/>
            </Link>
       {/* <div className="pulsing-rectangle relative flex w-[61px] h-[62.5px] float-right">
              <div className=" w-[61px] h-[62.5px]] -z-[1] pointer-events-none"><p className="counter absolute left-[6.4px] top-[5px] text-[6.4px] font-bold text-[#fff] !opacity-100">57</p>
                 <div className="logo-rect absolute block -z-[1] pointer-events-none w-[61px] h-[62.5px] !border-[4.73px]">
                    <div className="right-top !w-[4.73px] !rounded-tr-[2px]"></div>
                    <div className="right-bottom !w-[4.73px] !rounded-br-[2px]"></div>
                 </div>
              </div>
              </div>
        <div className="rsbcText !top-[0.5px] !opacity-100 !text-[39.96px] !ml-[9.8px]">Labz</div> */}
        </div>
    )
}
