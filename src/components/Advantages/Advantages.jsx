import React from 'react'
import './Advantages.scss'
import AdvantagesFirst from './AdvantagesFirst/AdvantagesFirst'
import AdvantageSecond from './AdvantageSecond/AdvantageSecond'

const Advantages = () => {
  return (
    <div className='advantage'>
        <h2>TAKLIF ETAMIZ</h2>
        <p>Bizning afzalliklarimiz</p>
        <AdvantagesFirst />
        <AdvantageSecond />
    </div>
  )
}

export default Advantages
