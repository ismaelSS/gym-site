import CarouselOffer from '../carousel/offers'
import BarslLine from '../decorativeElemente/barsLine'
import XLine from '../decorativeElemente/xLine'

export default function OffertSection() {
  return (
    <section className="bg-gray-950">
      <BarslLine />
      <CarouselOffer />
      <XLine />
    </section>
  )
}
