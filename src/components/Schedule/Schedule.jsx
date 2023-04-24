import React from 'react'
import './Schedule.scss'
import menuImg from './assets/meal.png'
import breakfast from './assets/breakfast.jpg'
import lunch from './assets/lunch.jpg'
import snack from './assets/snack.png'
import dinner from './assets/dinner.jpg'


const Schedule = () => {
  return (
      <div className="schedule_section">
        <div className="schedule_info">
          <h5>Menu</h5>
          <p>Nimalar bilan ovqatlantiramiz</p>
        </div>
        <div className="schedule_menu">
          <div className="menu1">
              <div className="breakfast">
                <div className="title">
                  <img src={breakfast} alt="breakfast"/>
                  <span>Breakfast</span>
                </div>
                <ul>
                  <li>Toasted ravioli with meat sauce</li>
                  <li>Mozzarella sticks (marinara dipping sauce )</li>
                  <li>Chocolate pudding</li>
                  <li>Milk / chocolate milk / fresh lemonade</li>
                </ul>
              </div>

              <div className="lunch">
                <div className="title">
                    <img src={lunch} alt="breakfast"/>
                    <span>Lunch</span>
                </div>
                <ul>
                  <li>Toasted ravioli with meat sauce</li>
                  <li>Mozzarella sticks (marinara dipping sauce )</li>
                  <li>Chocolate pudding</li>
                  <li>Milk / chocolate milk / fresh lemonade</li>
                </ul>
              </div>
          </div>
          <div className="menu_img">
            <img src={menuImg} alt="menuImg" />
          </div>
          <div className="menu2">
            <div className="snack">
              <div className="title">
                    <img src={snack} alt="breakfast"/>
                    <span>Snack</span>
              </div>
              <ul>
                <li>Toasted ravioli with meat sauce</li>
                <li>Mozzarella sticks (marinara dipping sauce )</li>
                <li>Chocolate pudding</li>
                <li>Milk / chocolate milk / fresh lemonade</li>
              </ul>
            </div>
            <div className="dinner">
              <div className="title">
                    <img src={dinner} alt="breakfast"/>
                    <span>Dinner</span>
              </div>
              <ul>
                  <li>Toasted ravioli with meat sauce</li>
                  <li>Mozzarella sticks (marinara dipping sauce )</li>
                  <li>Chocolate pudding</li>
                  <li>Milk / chocolate milk / fresh lemonade</li>
                </ul>
            </div>
              
          </div>
        </div>
    </div>
    )
}

export default Schedule