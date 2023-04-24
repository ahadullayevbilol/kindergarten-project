import React from 'react'
import './AdvantageSecond.scss'
import { FaCampground } from 'react-icons/fa'
import { CiApple } from 'react-icons/ci'
import { BsSignStop } from 'react-icons/bs'

const AdvantageSecond = () => {
  return (
    <div className='advantageSecond'>
        <div className="sport">
            <div className="ground">
                <FaCampground />
            </div>
            <div className="sports_info">
                <h3>O'yin va sport maydonchasi</h3>
                <p>Odio nibh nullam leo a tincidunt. Egestas leo, tortor mattis tincidunt nam consectetur nibh. Vitae feugiat nascetur ultrices velit.</p>
            </div>
        </div>
        <div className="food">
        <div className="apple">
                <CiApple />
            </div>
            <div className="food_info">
                <h3>Mazali va foydali taom</h3>
                <p>Odio nibh nullam leo a tincidunt. Egestas leo, tortor mattis tincidunt nam consectetur nibh. Vitae feugiat nascetur ultrices velit.</p>
            </div>
        </div>
        <div className="area">
        <div className="stop">
                <BsSignStop />
            </div>
            <div className="area_info">
                <h3>O'ralgan maydon</h3>
                <p>Odio nibh nullam leo a tincidunt. Egestas leo, tortor mattis tincidunt nam consectetur nibh. Vitae feugiat nascetur ultrices velit.</p>
            </div>
        </div>
    </div>
  )
}

export default AdvantageSecond