import React from 'react'
import './About.scss'
import girl from './assets/happy-girl.jpg'
import experience from './assets/experince_img.png'
import unique from './assets/unique_img.png'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
        <div className='girl_image'>
            <img src={girl} alt="girl" />
        </div>
        <div className='about_info'>
            <h1>OLTIN KALITCHA</h1>
            <h2>Biz haqimizda</h2>
            <p>Biz barcha yoshdagi bolalarga g'amxo'rlik qilib, taklif etilayotgan xizmatlar turlarini doimiy ravishda kengaytiramiz. Bizning maqsadimiz bolalarni qiziqarli tarzda diqqat bilan o'qitish va rivojlantirishdir. Biz bolalar zavq bilan o'qishlari uchun o'quv jarayonini yorqin voqeaga aylantirishga intilamiz.</p>
            <div className='experience'>
                <section className='experience_img'>
                    <img src={experience} alt="experience" />
                </section>
                <div className='teachers_info'>
                    <h2>Tajribali o'qituvchilar</h2>
                    <p>Libero, sagittis pretium vel ipsum luctus amet et quam sit. Semper aenean enim, in enim, ut venenatis, purus. Id in enim nam eget in. Facilisi faucibus dictumst platea etiam. Augue donec leo diam pulvinar quam cursus.</p>
                </div>
            </div>
            <div className='unique'>
                <section className='unique_img'>
                    <img src={unique} alt="unique" />
                </section>
                <div className='unique_approach'>
                    <h2>O'ziga xos yondashuv</h2>
                    <p>Unique approach Justo proin amet faucibus sed eu. Nisi mauris, vulputate ut ut habitant id diam, accumsan. Convallis neque, pretium ac malesuada sit at amet aliquam. Scelerisque vivamus amet sed vitae ac amet.</p>
                </div>
            </div>
            <button className='button' type='button'>
                <NavLink className={"button"} to="/about">
                    Batafsil
                </NavLink>
            </button>
        </div>
    </div>
  )
}

export default About