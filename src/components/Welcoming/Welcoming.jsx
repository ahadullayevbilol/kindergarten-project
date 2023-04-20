import React from 'react'
import './Welcoming.scss'
import boy from './assets/boy.jpg'
import girl from './assets/girl.jpg'
import child from './assets/child.jpg'
import children from './assets/children.jpg'

const Welcoming = () => {
  return (
    <div className='wrapper'>
        <h1>Bolalar bog'chasiga xush kelibsiz</h1>
        <p>Farzandingiz bolaligini izlanish zavqi bilan to'ldiring!</p>
        <div className='info'>
            <section className='card'>
                <img src={boy} alt="boy" />
                <p>Mantiqiy fikrlash va yaratish</p>
            </section>
            <section className='card'>
                <img src={girl} alt="girl" />
                <p>O'zini erkin his qilish va hissiyotlarni tushunish</p>
            </section>
            <section className='card'>
                <img src={child} alt="child" />
                <p>Mustaqil va harkatda bo'lish</p>
            </section>
            <section className='card'>
                <img src={children} alt="children" />
                <p>Bilimni hayotga tatbiq etish</p>
            </section>
        </div>
    </div>
  )
}

export default Welcoming