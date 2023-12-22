"use client";
import React, {useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image'
import { FreeMode, Navigation, Thumbs,Pagination } from 'swiper/modules';
const importAll = (r) => r.keys().map(r);
const testiImages = importAll(require.context('./../../../public/images/testimonial', false, /\.(png|jpe?g|svg)$/));
export default function Testimonial() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    return (
      <>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          pagination={false}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs,Pagination]}
          className="testi-swiper1"
        >
            {testiImages.map((image, index) => (
            <SwiperSlide  key={index}>
               <p className='testi-para'>“The simple workflow and the ability to generate content in multiple languages have helped us deliver learning faster in various languages while reducing costs and enabling us to make last-minute changes and script adjustments.”</p>
            </SwiperSlide>
             ))}
        </Swiper>
        <div className='test-img'>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs,Pagination]}
          className="testi-swiper"
        >
          {testiImages.map((image, index) => (
            <SwiperSlide className='testi-image' key={index}>
                <Image src={image.default} />
                <p className='test-p-head'>Jerry Lopez</p>
                <p className='test-p-para'>CEO. Martinaze Co.</p>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </>
    );
  }