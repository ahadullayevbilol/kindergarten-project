import React from 'react'
import './Curriculum.scss'
import jumiorGroupImg from './assets/junior_group_img.png'

const Curriculum = () => {
  return (
    <div className='curriculum'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6480 68" preserveAspectRatio="none">
            <path class="elementor-shape-fill" d="M3599.8,0h-1920v68c0,0,70.8-38,120-38s70.8,38,120,38s70.8-38,120-38c49.2,0,70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
              s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
              s70.8-38,120-38s120,38,120,38V0z" fill="#fff"></path>
            <path class="elementor-shape-fill" d="M3599.8,0h-1920v68c0,0,70.8-38,120-38s70.8,38,120,38s70.8-38,120-38c49.2,0,70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
              s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
              s70.8-38,120-38s120,38,120,38V0z" fill="#fff"></path>
            <path class="elementor-shape-fill" d="M5280.3,0h-1920v68c0,0,70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
              c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38
              c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38c49.2,0,120,38,120,38V0z" fill="#fff"></path>
            <path class="elementor-shape-fill" d="M6480.3-0.4h-1920v68c0,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38
              c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38c49.2,0,70.8,38,120,38c49.2,0,70.8-38,120-38
              c49.2,0,70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s120,38,120,38V-0.4z" fill="#fff"></path>
            <path class="elementor-shape-fill" d="M1920,0H0v68c0,0,70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
              s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38s70.8-38,120-38s70.8,38,120,38
              s70.8-38,120-38s120,38,120,38V0z" fill="#fff"></path>  
          </svg>
          <h1>O'QUV REJASI</h1>
          <p>Bizning dasturlarimiz</p>
          <div className="groups">
            <div className='junior_group'>
              <h2>Yoshlar guruhi</h2>
              <p>3-4 yosh</p>
              <div className='junior_group_info'>
                <div className='group'>
                  <ul>
                    <li>Nutqni rivojlantirish</li>
                    <li>Ijtimoiy muloqot qobiliyatlari</li>
                    <li>Jismoniy rivojlanish</li>
                    <li>Ijodkorlikni rivojlantirish</li>
                    <li>Qobiliyatlarni rivojlantirish</li>
                  </ul>
                </div>
                  <div className="group_img">
                    <img src={jumiorGroupImg} alt="jumiorGroupImg" />
                  </div>
              </div>
            </div>
            <div className='middle_group'>
              <h2>Kattalar guruhi</h2>
              <p>5-6 yosh</p>
            </div>
          </div>
    </div>
  )
}

export default Curriculum
