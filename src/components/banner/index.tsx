import Image from 'next/image'
import Trapezoids from '../decorativeElemente/trapezoids'
import PlusLine from '../decorativeElemente/plusLine'
import FirstPhrase from '../firstPhrase'
import Modalites from '../modalites'
import OpenAllDays from '../openAllDays'
import LinePlusLine from '../decorativeElemente/linePlusLine'
import CircularLogo from '../logoCircular'

export default function Banner() {
  return (
    <div className="flex flex-col bg-gray-700 h-[100vh] w-full  overflow-hidden">
      <div className="h-1/2 relative overflow-hidden z-20">
        <div className="bg-[#c51313] opacity-15 absolute w-full h-full z-20" />
        <Image
          width={1280}
          height={720}
          alt="homem executando agachamento terra."
          src={'/img/banner.webp'}
          className="saturate-200  hue-rotate-[-30deg] h-full object-cover w-full"
        />
        <Image
          width={1280}
          height={720}
          alt="filtro de imagem, efeito foto antiga."
          src={'/img/filter.png'}
          className="saturate-200 sephia h-full object-cover z-20 absolute "
        />

        <div className="absolute top-1/2 z-20 flex flex-col gap-3 -left-2">
          <Trapezoids />
        </div>
        <div className="absolute top-2 right-2 z-20 text-white">
          <PlusLine />
        </div>
      </div>

      <div className="h-1/2 relative">
        <FirstPhrase />
        <Image
          width={1280}
          height={720}
          alt="homem executando agachamento terra."
          src={'/img/scratched.jpg'}
          className="object-cover absolute w-full h-full"
        />
        <div className="flex flex-col gap-3 rotate-180 top-1/2 -translate-y-1/2 w-fit absolute -right-2">
          <Trapezoids amount={5} />
        </div>
        <div className="flex flex-col gap-4 h-full justify-center mmin:gap-14 pl-1 mmin:pl-4 mmin:pb-10 md:flex-row md:items-center md:justify-start ">
          <Modalites />
          <OpenAllDays />
        </div>
        <LinePlusLine />
        <CircularLogo
          text="WCF academia .WCF academia. WCF academia. "
          size={10}
          isAnimate={true}
          animationTime={250}
          hexadecimalColor="rgba(250,250,250, 0.5)"
          className="absolute -top-2/3 left-[60%] z-10 hidden md:block"
          textClass="font-semibold text-xl"
        />
        <p className="font-light visi hidde"></p>
      </div>
    </div>
  )
}
