"use client";
import React from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/grid';
import "swiper/css/pagination";
import Image from 'next/image'
import {Autoplay,Grid, Pagination } from "swiper/modules";

const Video = () => {
    return(
        <Swiper 
        slidesPerView={1}
        grid={{rows: 1}}
        spaceBetween={30}
        autoplay={{delay: 2500,disableOnInteraction: false}}
        pagination={true}
        loop={true}
        modules={[Autoplay,Grid,Pagination]}
        className="mySwiper">
       
        <SwiperSlide>
            <div className='work-content'>
              <div className="row align-items-center">
                <div className='col-md-6'>
                  <div className='work-inner-content'>
                    <Image src={`/images/work/work-sm-1.png`} width={72} height={72} />
                    <h3 className='work-heading'>Create your script</h3>
                    <p className='work-para'>Use your own script or generate it with the help of AI with Chat GPT-like prompts.</p>
                    <button className='work-btn'>Try to free</button>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='work-inner-image'>
                    <Image src={`/images/work/work1.png`}  width={500} height={500}/>
                  </div>
                </div>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='work-content'>
              <div className="row align-items-center">
                <div className='col-md-6'>
                  <div className='work-inner-content'>
                    <Image src={`/images/work/work-sm-1.png`} width={72} height={72} />
                    <h3 className='work-heading'>Create your script</h3>
                    <p className='work-para'>Use your own script or generate it with the help of AI with Chat GPT-like prompts.</p>
                    <button className='work-btn'>Try to free</button>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='work-inner-image'>
                    <Image src={`/images/work/work1.png`}  width={500} height={500}/>
                  </div>
                </div>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    )
}
export default Video;