"use client";
import React from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/grid';
import "swiper/css/pagination";
import Image from 'next/image'
import {Autoplay,Grid, Pagination } from "swiper/modules";
const importAll = (r) => r.keys().map(r);
const toolsImages = importAll(require.context('./../../../public/images/tools', false, /\.(png|jpe?g|svg)$/));
const Tools = () => {
    return(
        <Swiper 
        slidesPerView={8}
        grid={{rows: 1}}
        spaceBetween={30}
        autoplay={{delay: 2500,disableOnInteraction: false}}
        pagination={false}
        loop={true}
        modules={[Autoplay,Grid,Pagination]}
        className="mySwiper">
       
        {toolsImages.map((image, index) => (
                <SwiperSlide className='tools-image' key={index}>
                  <Image src={image.default} />
                </SwiperSlide>
              ))}
      </Swiper>
    )
}
export default Tools;