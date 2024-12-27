'use client'
import PlanCard from '@/components/cards/plan'
import Slider from 'react-slick'
import './styles.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { plans } from '@/siteComponentsData'
import { useEffect, useState } from 'react'

export default function CarouselOffer() {
  const [centerPadding, setCenterPadding] = useState('0px')

  const updatePadding = () => {
    const windowWidth = window.innerWidth
    if (windowWidth >= 1280) {
      setCenterPadding(`${(1280 - 176) * 0.46}px`)
    } else if (windowWidth > 767) {
      setCenterPadding(`${(windowWidth - 176) * 0.45}px`)
    } else {
      setCenterPadding(`${(windowWidth - 211) / 2}px`)
    }
  }

  useEffect(() => {
    updatePadding()
    window.addEventListener('resize', updatePadding)
    return () => window.removeEventListener('resize', updatePadding)
  }, [])

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding,
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
    dots: false,
    draggable: true,
  }

  return (
    <div className="slider-container mt-4 mb-4">
      <Slider {...settings}>
        {plans.map(
          (
            { isEmphasis, PlanName, advantagesList, impulsePhrase, price },
            index,
          ) => (
            <PlanCard
              isEmphasis={isEmphasis}
              PlanName={PlanName}
              advantagesList={advantagesList}
              impulsePhrase={impulsePhrase}
              price={price}
              key={index}
            />
          ),
        )}
      </Slider>
    </div>
  )
}
