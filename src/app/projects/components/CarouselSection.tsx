'use client';

import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../../home/home.css';
import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { ProjectImages, projectImages } from '../data/data';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Chip } from '@heroui/chip';
import { useModal } from './ModalContext';
import ProjectModal from '../[projectModal]/page';

const CarouselSection = () => {
    
    const [carouselImages] = useState<ProjectImages[]>(projectImages);
    const [isMobile, setIsMobile] = useState(false);
    const { openModal } = useModal();

    // Create refs for navigation buttons
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="py-[40px] gap-5 md:px-4 sm:px-6 bg-gray-50">
            {/* <div className='container grid gap-4 md:mb-[36px] text-center'>
                <span className=' text-stone-700'>Project Section</span>
                <h1 className='text-stone-900 md:text-5xl font-[poppins] font-bold tracking-widest'>EXPLORE MY PROJECTS</h1>
                <p className='text-stone-800 md:leading-8 md:tracking-widest'>私は個人プロジェクトやチームでのコラボレーションなど、さまざまなプロジェクトに取り組んできました。常に直感的で魅力的なユーザーインターフェースを作成し、全体的なユーザーエクスペリエンスを向上させることに重点を置いています。デザインと機能性を次のレベルへと押し上げ、シームレスな操作と印象的なエンゲージメントを実現することを目指しています。</p>
            </div> */}

            <div className="relative md:container">
                {/* Navigation Buttons */}
                <div className="flex w-full md:justify-center gap-8 justify-center absolute md:top-120 md:bottom-[-64px] bottom-[-48px] md:right-0 z-50">
                    <button ref={prevRef} className=" text-black hover:bg-gray-800 hover:text-white md:p-3 rounded-full transition-all duration-300">
                        <MdOutlineKeyboardArrowLeft className="md:w-8 md:h-8 w-8 h-8" />
                    </button>
                    <button ref={nextRef} className=" text-black hover:bg-gray-800 hover:text-white md:p-3 rounded-full transition-all duration-300">
                        <MdOutlineKeyboardArrowRight className="md:w-8 md:h-8 w-8 h-8" />
                    </button>
                </div>

                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    spaceBetween={300}
                    loop={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true 
                    }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: isMobile ? 50 : 150,
                        modifier: isMobile ? 1.5 : 2.5,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        320: { slidesPerView: 1, spaceBetween: 20 },
                        640: { slidesPerView: 1.2, spaceBetween: 30 },
                        768: { slidesPerView: 1.5, spaceBetween: 40 },
                        1024: { slidesPerView: 2, spaceBetween: 100 }
                    }}
                    modules={[Navigation, EffectCoverflow, Pagination]}
                    className='flex justify-center items-center w-full relative'
                    onSwiper={(swiper) => {
                        setTimeout(() => {
                            if (swiper?.params?.navigation && typeof swiper.params.navigation === "object") {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                            
                        });
                    }}
                >
                    {carouselImages.map((item) => (
                        <SwiperSlide key={item.id}>
                           <section className='md:mx-[40px]'>
                                <div className="relative mx-auto w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[300px] transition-transform duration-300 md:max-w-none">
                                    <Image
                                        src={item.mockup || ''}
                                        alt="project-images"
                                        fill
                                        className="object-cover rounded-xl transition-all duration-500 ease-in-out mx-auto"
                                    />
                                </div>

                                <div className='grid md:mt-4 gap-2'>
                                    <h1 className='font-bold text-[35px]'>{item.title}</h1>
                                    <Chip className={`md:text-[12px] text-[10px] text-white ${item.type === '個人制作' ? 'bg-gray-500' : 'bg-stone-900'}`}>{item.type}</Chip>
                                    <p className='md:text-[16px] md:tracking-wider md:leading-8 text-[12px] leading-6'>{item.description}</p>
                                </div>

                                <button
                                    className="bg-stone-900 md:mt-8 hover:bg-stone-700 mt-4 text-[12px] text-white md:px-16 md:py-3 py-2 px-10 md:text-[14px]"
                                    onClick={() => openModal(item.id)}
                                >
                                    詳細
                                </button>
                                <ProjectModal />
                           </section>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CarouselSection;
