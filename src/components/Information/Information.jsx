import React from 'react'
import './Information.scss'
import animal from './assets/animal.png'
import cactus from './assets/cactus.png'

const Information = () => {
  return (
    <div className='information'>
      <img src={animal} alt="animal" className='animal' />
      <img src={cactus} alt="cactus" className='cactus'/>
      <div className='happy-children'>
          <h1>350+</h1>
          <h2>Bolalar soni</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quasi beatae totam maiores libero illo nobis praesentium. </p>
      </div>
      <div className='hours-worked'>
          <h1>32K</h1>
          <h2>Ishlagan soatlar</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quasi beatae totam maiores libero illo nobis praesentium. </p>
      </div>
      <div className='awards-received'>
          <h1>184</h1>
          <h2>Qabul qilingan mukofotlar</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam quasi beatae totam maiores libero illo nobis praesentium. </p>
      </div>
    </div>
  )
}

export default Information