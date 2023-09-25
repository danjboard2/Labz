import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex bg-homepage bg-cover min-h-screen flex-col items-center justify-center p-24">
     <div className="slide-unlock contents">
      <div className="pulsing-rectangle relative contents">
        <Image className="absolute block" src="/media/images/labz-rectangle-slide.png" width={59} height={61} alt={'Welcome to Labz'}/>
        <Image className="pulse absolute" src="/media/images/labz-rectangle-slide-outer1.png" width={82} height={84} alt={'Welcome to Labz'}/>
        <Image className="pulse absolute" src="/media/images/labz-rectangle-slide-outer2.png" width={107} height={110} alt={'Welcome to Labz'}/>
        <Image className="pulse absolute" src="/media/images/labz-rectangle-slide-outer3.png" width={147} height={152} alt={'Welcome to Labz'}/>
      </div>
     </div>
    </main>
  )
}