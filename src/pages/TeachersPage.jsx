import React from "react";
import MainLayout from "../Layout/MainLayout";
import teacher1 from "./assets/teacher1.jpg";
import teacher2 from "./assets/teacher2.jpg";
import teacher3 from "./assets/teacher4.jpg";

import "./TeachersPage.scss";

const TeachersPage = () => {
  return (
    <MainLayout>
      <div className='header_classes'>
        <div className='classes_info'>
          <h1>O'qituvchilarimiz</h1>
          <p>Bosh sahifa/O'qituvchilarimiz</p>
        </div>
      </div>
      <div className="teachers_photo">
        <div className="teacher1">
          <img src={teacher1} alt="teacher1" />
        </div>
        <div className="teacher2">
          <img src={teacher2} alt="teacher2" />
        </div>
        <div className="teacher3">
          <img src={teacher3} alt="teacher3" />
        </div>
      </div>
      <div className="teachers_info">
        <div className="teacher_name">
          <h2>STELA ROBSON</h2>
          <h3>Music Teacher</h3>
        </div>
        <div className="teacher_info">
          <div className="teacher_img">
            <img src={teacher1} alt="teacher1" />
          </div>
          <div className="teacher_about">
            <h4>About</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque lada tum, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
              error sit vluptatem accusantium doloremque lada tum, totam rem
              aperam, eaque ipsa quae ab illo inventore verttis et quasi
              architecto beatae vitae dicta sunt excabo. accusantium doloremque
              lada tum, totam rem aperam.
            </p>
          </div>
          <div className="teacher_skills">
            <h4>My skills</h4>
            <div className="graphic">
              <div className="graphic2">
                <h2>GRAPHIC - 85%</h2>
              </div>
            </div>
            <div className="drawing">
              <div className="drawing2">
                <h2>DRAWING - 75%</h2>
              </div>
            </div>
            <div className="paint">
              <div className="paint2">
                <h2>PAINT - 65%</h2>
              </div>
            </div>
            <div className="music">
              <div className="music2">
                <h2>MUSIC - 99%</h2>
              </div>
            </div>
            <div className="sport">
              <div className="sport2">
                <h2>SPORT - 75%</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TeachersPage;
