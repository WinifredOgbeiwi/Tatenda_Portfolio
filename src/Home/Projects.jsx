
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { image } from '../data';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  
  return (
    <section className='pt-20'>
      <div className='w-[80%] m-auto mb-10'>
        <h2 className=' text-5xl font-bold text-center '>Some of My Work</h2>
        <p className='mt-5 mb-6 text-center '>My portfolio showcases my experience in creating stunning 3D models that accurately represent products and conceps in a realistic and visually stunning manner. From product renders to architectural visualizations, my 3D models bring ideas to life</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper grid"
      >
        <SwiperSlide><img src={image.Project9} alt="" /></SwiperSlide>
        <SwiperSlide ><img src={image.Project1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image.Project2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image.Project3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image.Project4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image.Project5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image.Project6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image.Project7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image.Project8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image.Project9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image.Project10} alt="" /></SwiperSlide>
        <SwiperSlide><img src={image.Project7} alt="" /></SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Projects;