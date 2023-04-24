import React from 'react'
import './JuniorGroup.scss'
import juniorGroupImg from '../assets/junior_group_img.png'
import {TiTick} from 'react-icons/ti'

const JuniorGroup = () => {
  return (
    <div className='junior_group'>
        <h2>Yosh bolalar guruhi</h2>
        <p>3-4 yosh</p>
        <div className='junior_group_info'>
            <ul>
                <li><span><TiTick/></span> Nutqni rivojlantirish</li>
                <li><span><TiTick/></span>Ijtimoiy muloqot qobiliyatlari</li>
                <li><span><TiTick/></span>Jismoniy rivojlanish</li>
                <li><span><TiTick/></span>Ijodkorlikni rivojlantirish</li>
                <li><span><TiTick/></span>Qobiliyatlarni rivojlantirish</li>
            </ul>
        </div>
        <div className="group_img">
            <img src={juniorGroupImg} alt="" />
        </div>
    </div>
  )
}

export default JuniorGroup