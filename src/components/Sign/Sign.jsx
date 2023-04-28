import React from 'react'
import './Sign.scss'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'
import image1 from './assets/newsletter_03-pwhlrsqmnuhlzsel5uu9trsghp7220jdc0lh168m9s.png'
import image2 from './assets/newsletter_04-pwhlrsqn8watqv74ef395a19lrymefj5b7czt84vy0.png'
import image3 from './assets/giraffe.png'

const Sign = () => {
  return (
    <div className="sign_container">
      <img src={image1} alt="" className='image1'/>
      <img src={image2} alt=""  className='image2'/>
      <img src={image3} alt=""  className='image3'/>
      <h1>XABAR</h1>
      <h3>Sign up to our newsletter</h3>
      <p>Har hafta so'nggi yangiliklar, yangilanishlar va boshqa ko'plab yangiliklarni oling.</p>
      <div className="input_container">
        <input type="email" placeholder='Your email...'/>
        <div className="registrate_email">
          <div className='right_btn'>
              <BsArrowRight />
          </div>
        </div>
      </div>
      <div className="follow">
        <h3>Follow us: </h3>
        <div className='instagram'>
          <AiOutlineInstagram />
        </div>
        <div className='telegram'>
          <FaTelegramPlane />
        </div>
        <div className='facebook'>
          <FiFacebook />
        </div>
      </div>
    </div>
  )
}

export default Sign
