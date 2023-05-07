import React from 'react'
import MainLayout from '../Layout/MainLayout'
import Sign from './../components/Sign/Sign'
import "./Contact.scss"
const Contact = () => {
  return (
    <MainLayout>
      <div className='header_classes'>
        <div className='classes_info'>
          <h1>Bog'lanish</h1>
          <p>Bosh sahifa/Bog'lanish</p>
        </div>
      </div>
      <Sign></Sign>
    </MainLayout>
  )
}

export default Contact