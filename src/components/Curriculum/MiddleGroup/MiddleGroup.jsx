import React from 'react'
import './MiddleGroup.scss'
import middleGroupImg from '../assets/middle_group_img.png'
import {TiTick} from 'react-icons/ti'

const MiddleGroup = () => {
  return (
    <div className='middle_group'>
        <h2>Katta bolalar guruhi</h2>
        <p>5-6 yosh</p>
        <div className='middle_group_info'>
            <ul>
                <li><span><TiTick /></span>Individual yondashuv</li>
                <li><span><TiTick /></span>Birinchi sinfga tayyorgarlik</li>
                <li><span><TiTick /></span>Maxsus dastur</li>
                <li><span><TiTick /></span>O'qish darslari</li>
                <li><span><TiTick /></span>Yangi tillarni o'rganish</li>
            </ul>
        </div>
        <div className='group_img'>
            <img src={middleGroupImg} alt="middleGroup" />
        </div>
    </div>
  )
}

export default MiddleGroup
