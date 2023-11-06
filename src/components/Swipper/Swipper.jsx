import React from 'react'
import "./Swiper.css"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

import image from "../../assets/images/swiper.png"
function Swipper() {
    return (
        <Swiper
            className='mt-8'
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
            loop={true}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction:false
            }}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{ clickable: true }}
        >
            <SwiperSlide>
                <img className='w-full' src={image} />
            </SwiperSlide>

            <SwiperSlide>
                <img className='w-full' src={image} />
            </SwiperSlide>

            <SwiperSlide>
                <img className='w-full' src={image} />
            </SwiperSlide>
        </Swiper>
    )
}

export default Swipper