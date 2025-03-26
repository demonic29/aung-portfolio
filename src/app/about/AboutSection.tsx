'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { aboutMe } from '../projects/data/data'
import StoryPage from '../home/StoryPage'

const AboutSection = () => {
  return (
    <div>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          type: 'fraction',
        }}
        navigation={{
          nextEl: '#next-button',
          prevEl: '#prev-button',
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {aboutMe.map((page, index) => (
          <SwiperSlide key={index}>
            <StoryPage {...page} />
          </SwiperSlide>
          
        ))}
        <div className="flex gap-2 mt-8 justify-center">
          <button id="prev-button" className="text-gray-600 hover:text-gray-900">
            <MdOutlineKeyboardArrowLeft size={35} />
          </button>
          <button id="next-button" className="text-gray-600 hover:text-gray-900">
            <MdOutlineKeyboardArrowRight size={35} />
          </button>
        </div>
      </Swiper>
    </div>
  )
}

export default AboutSection