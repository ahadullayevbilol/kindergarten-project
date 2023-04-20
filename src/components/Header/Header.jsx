import "./Header.scss";
import logo from "./../../img/logo.png";
import {useState} from "react";

const Header = () => {

  const [toggle, setToggle] = useState(false);

  const openModal = () => {
    setToggle(!toggle)
    toggle ? document.body.style.overflow = "scroll" : document.body.style.overflow = "hidden"
  }

  return (
    <>
      {toggle ? (
        <div className="toggle_header">
          <nav>
            <div className="logo">
              <img src={logo} alt="Logo" />
              Oltin Kalitcha
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <h4>Bosh sahifa</h4>
                </li>
                <li>
                  <h4>Biz haqimizda</h4>
                </li>
                <li>
                  <h4>Guruhlar</h4>
                </li>
                <li>
                  <h4>O'qituvchilar</h4>
                </li>
                <li>
                  <h4>Rasmlar</h4>
                </li>
                <li>
                  <h4>Bog'lanish</h4>
                </li>
              </ul>
            </div>
          </nav>
          <span onClick={openModal}>╳</span>
        </div>
      ) : null}
      <header className="header">
        <div className="header_content">
          <div className="logo">
            <img src={logo} alt="Logo" />
            Oltin Kalitcha
          </div>
          <nav>
            <ul>
              <li className="active">
                Bosh sahifa
              </li>
              <li>
                Biz haqimizda
              </li>
              <li>
                Guruhlar
              </li>
              <li>
                O'qituvchilar
              </li>
              <li>
               Rasmlar
              </li>
              <li>Bog'lanish</li>
            </ul>
          </nav>
          <div className="toggle" onClick={openModal}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
