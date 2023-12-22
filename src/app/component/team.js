"use client";
import React from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/grid';
import "swiper/css/pagination";
import Image from 'next/image'
import {Autoplay,Grid, Pagination } from "swiper/modules";

const Team = () => {
    return(
        <Swiper 
        slidesPerView={2}
        grid={{rows: 1}}
        spaceBetween={30}
        autoplay={{delay: 2500,disableOnInteraction: false}}
        pagination={true}
        loop={true}
        modules={[Autoplay,Grid,Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className='team-inner-content'>
            <Image src={`/images/team/team-sm-2.png`} width={72} height={72} />
            <h3 className='team-heading'>Sales Enablement</h3>
            <p className='team-para'>Company into spaces that you invite and share with colleagues and friends.</p>
            <div className='team-inner-image'>
              <Image src={`/images/team/team2.png`}  width={500} height={500}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-inner-content'>
            <Image src={`/images/team/team-sm-3.png`} width={72} height={72} />
            <h3 className='team-heading'>Customer Service</h3>
            <p className='team-para'>Look at the page and section designs that are created and pick the one.</p>
            <div className='team-inner-image'>
              <Image src={`/images/team/team3.png`}  width={500} height={500}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-inner-content'>
            <Image src={`/images/team/team-sm-2.png`} width={72} height={72} />
            <h3 className='team-heading'>Sales Enablement</h3>
            <p className='team-para'>Company into spaces that you invite and share with colleagues and friends.</p>
            <div className='team-inner-image'>
              <Image src={`/images/team/team2.png`}  width={500} height={500}/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-inner-content'>
            <Image src={`/images/team/team-sm-3.png`} width={72} height={72} />
            <h3 className='team-heading'>Customer Service</h3>
            <p className='team-para'>Look at the page and section designs that are created and pick the one.</p>
            <div className='team-inner-image'>
              <Image src={`/images/team/team3.png`}  width={500} height={500}/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    )
}
export default Team;