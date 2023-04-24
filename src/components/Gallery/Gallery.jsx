import React from 'react'
import './Gallery.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper'

import photos1 from './assets/photos1.jpg'
import photos2 from './assets/photos2.jpg'
import photos3 from './assets/photos3.jpg'
import photos4 from './assets/photos4.jpg'
import photos5 from './assets/photos5.jpg'
import photos6 from './assets/photos6.jpg'
import photos7 from './assets/photos7.jpg'
import photos8 from './assets/photos8.jpg'
import photos9 from './assets/photos9.jpg'
import photos10 from './assets/photos10.jpg'
import photos11 from './assets/photos11.jpg'
import photos12 from './assets/photos12.jpg'

const Gallery = () => {
  return (
    <div className='gallery'>
        <p>Galereya</p>
        <h1 className='heading'>Rasmlarimiz</h1>
        <Swiper
            effect={ 'coverflow' }
            grabCursor={ true }
            centeredSlides={ true }
            loop={ true }
            slidesPerView={ 'auto' }
            coverflowEffect={
                {
                    rotate: 0,
                    scretch: 0,
                    depth: 100,
                    modifier: 2.5
                }
            }
            pagination={{el:'.swiper-pagination', clickable:true}}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true
            }}
            modules={[EffectCoverflow,Pagination,Navigation]}
            className='swiper_container'
        >
            <SwiperSlide className='swiper'>
                <img src={photos1} alt="photos1" />
            </SwiperSlide>
            <SwiperSlide className='swiper2'>
                <img src={photos2} alt="photos2" />
            </SwiperSlide>
            <SwiperSlide className='swiper3'>
                <img src={photos3} alt="photos3" />
            </SwiperSlide>
            <SwiperSlide className='swiper4'>
                <img src={photos4} alt="photos4" />
            </SwiperSlide>
            <SwiperSlide className='swiper5'>
                <img src={photos5} alt="photos5" />
            </SwiperSlide>
            <SwiperSlide className='swiper6'>
                <img src={photos6} alt="photos6" />
            </SwiperSlide>
            <SwiperSlide className='swiper7'>
                <img src={photos7} alt="photos7" />
            </SwiperSlide>
            <SwiperSlide className='swiper8'>
                <img src={photos8} alt="photos8" />
            </SwiperSlide>
            <SwiperSlide className='swiper9'>
                <img src={photos9} alt="photos9" />
            </SwiperSlide>
            <SwiperSlide className='swiper10'>
                <img src={photos10} alt="photos10" />
            </SwiperSlide>
            <SwiperSlide className='swiper11'>
                <img src={photos11} alt="photos11" />
            </SwiperSlide>
            <SwiperSlide className='swiper'>
                <img src={photos12} alt="photos12" />
            </SwiperSlide>

            <div className="slider_controler">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name='arrow-back-outline'></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name='arrow-forward-outline'></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
            </div>

        </Swiper>
    </div>
  )
}

export default Gallery
