import React from 'react'
import './Footer.scss'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
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
          <div className='footer_container'>
            <div className="footer_info">
                <h1>Oltin Kalitcha</h1>
                <div className='connection'>
                    <div>
                        <AiOutlineInstagram className='insta'/>
                        <FiFacebook className='facebook'/>
                        <FaTelegramPlane className='telegram'/>
                    </div>
                    <p>+99899-777-77-77</p>
                </div>
            </div>
          </div>
    </footer>
  )
}

export default Footer
