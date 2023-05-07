import React from 'react'
import MainLayout from '../Layout/MainLayout'
import './Group.scss'
import firstClassImg from './assets/class-1-1.jpg'
import thirdClassImg from './assets/class-3-1.jpg'
import teacherImg from './assets/author-1.jpg'
import teacherImg2 from './assets/author-2.jpg'
import teacherImg3 from './assets/author-3.jpg'
import secondClassImg from './assets//class-2-1.jpg'
import CallToEnrolChild from '../components/CallToEnrolChild/CallToEnrolChild'

const Groups = () => {
  return (
    <MainLayout>
      <div className='header_classes'>
        <div className='classes_info'>
          <h1>Classes</h1>
          <p>Home/Classes</p>
        </div>
      </div>
      <div className="classes">
          <article className='language_classes'>
            <div className='first_class_img'>
              <img src={firstClassImg} alt="firstClassImg" />
            </div>
            <div className='class_content'>
              <h4>Language Class</h4>
              <p>Interactively brand client center through is customized value good ideas.</p>
              <div className="line"></div>
              <div className="teacher_info">
                <div className="teacher_name">
                  <img src={teacherImg} alt="teacherImg" /> 
                  <h5>Romeza Xara Teacher</h5>
                </div>
                <button className='price'>$32.00</button>
              </div>
              <div className="line"></div>
              <div className="age_time_capacity">
                <div className="age">
                  <h5>Age: 3-5 Years</h5>
                </div>
                <div className="time">
                  <h5>Time: 8-10 am</h5>
                </div>
                <div className="capacity">
                  <h5>Capacity: 30 Kids</h5>
                </div>
              </div>
            </div>
          </article>
          <article className='mathematics_classes'>
            <div className='first_class_img'>
                <img src={secondClassImg} alt="firstClassImg" />
              </div>
              <div className='class_content'>
                <h4>Mathematics Class</h4>
                <p>Interactively brand client center through is customized value good ideas.</p>
                <div className="line"></div>
                <div className="teacher_info">
                  <div className="teacher_name">
                    <img src={teacherImg2} alt="teacherImg2" /> 
                    <h5>Redwan Loft Teacher</h5>
                  </div>
                  <button className='price'>$40.00</button>
                </div>
                <div className="line"></div>
                <div className="age_time_capacity">
                  <div className="age">
                    <h5>Age: 3-6 Years</h5>
                  </div>
                  <div className="time">
                    <h5>Time: 9-11 am</h5>
                  </div>
                  <div className="capacity">
                    <h5>Capacity: 20 Kids</h5>
                  </div>
                </div>
              </div>
          </article>
          <article className='kids_online_classes'>
          <div className='first_class_img'>
                <img src={thirdClassImg} alt="thirdClassImg" />
              </div>
              <div className='class_content'>
                <h4>Kids Online Class</h4>
                <p>Interactively brand client center through is customized value good ideas.</p>
                <div className="line"></div>
                <div className="teacher_info">
                  <div className="teacher_name">
                    <img src={teacherImg3} alt="teacherImg3" /> 
                    <h5>Juniatur Shawon Teacher</h5>
                  </div>
                  <button className='price'>$30.00</button>
                </div>
                <div className="line"></div>
                <div className="age_time_capacity">
                  <div className="age">
                    <h5>Age: 2-6 Years</h5>
                  </div>
                  <div className="time">
                    <h5>Time: 8-11 am</h5>
                  </div>
                  <div className="capacity">
                    <h5>Capacity: 40 Kids</h5>
                  </div>
                </div>
              </div>
          </article>
      </div>
      <CallToEnrolChild />
    </MainLayout>
  )
}

export default Groups