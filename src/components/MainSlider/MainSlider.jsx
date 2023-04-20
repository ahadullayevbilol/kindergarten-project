import React, { useState } from 'react'
import './MainSlider.scss'
import slider1 from './assets/slider1.jpg'
import slider2 from './assets/slider2.jpg'
import slider3 from './assets/slider3.jpg'
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'

const MainSlider = () => {

  const [currentSlide, setCurrentSlide] = useState(1);

  const rightClick = () => {
    if (currentSlide === 3) {
        setCurrentSlide(1)
    }else {
        setCurrentSlide(currentSlide + 1)
    } 
  }

  const leftClick = () => {
    if (currentSlide === 1) {
        setCurrentSlide(3)
    }else {
        setCurrentSlide(currentSlide - 1)
    }
}

  return (
    <div className='slider'>
        <span className='left' onClick={leftClick}>
            <AiOutlineArrowLeft />
        </span>

        {
            currentSlide === 1 ? (<article style={{backgroundImage: `url(${slider1})`}} className='slider1'>

            </article>) : currentSlide === 2 ? (<article style={{backgroundImage: `url(${slider2})`}} className='slider1'>

            </article>) : currentSlide === 3 ? (<article style={{backgroundImage: `url(${slider3})`}} className='slider1'>

            </article>) : (null)
        }

        <span className='right' onClick={rightClick}>
            <AiOutlineArrowRight/>
        </span>
    </div>
  )
}

export default MainSlider