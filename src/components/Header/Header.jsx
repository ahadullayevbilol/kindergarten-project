import "./Header.scss";
import logo from "./../../img/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  const openModal = () => {
    setToggle(!toggle);
    toggle
      ? (document.body.style.overflow = "scroll")
      : (document.body.style.overflow = "hidden");
  };

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
                <li className="a">
                  <NavLink className={"a"} to="/">
                    Bosh sahifa
                  </NavLink>
                </li>
                <li className="a">
                  <NavLink className={"a"} to="/about">
                    Biz haqimizda
                  </NavLink>
                </li>
                <li className="a">
                  <NavLink className={"a"} to="/groups">
                    Guruhlar
                  </NavLink>
                </li>
                <li className="a">
                  <NavLink className={"a"} to="/teachers">
                    O'qituvchilar
                  </NavLink>
                </li>
                <li className="a">
                  <NavLink className={"a"} to="/images">
                    Rasmlar
                  </NavLink>
                </li>
                <li className="a">
                  <NavLink className={"a"} to="/contact">
                    Bog'lanish
                  </NavLink>
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
              <li className="a">
                <NavLink className={"a"} to="/">
                  Bosh sahifa
                </NavLink>
              </li>
              <li className="a">
                <NavLink className={"a"} to="/about">
                  Biz haqimizda
                </NavLink>
              </li>
              <li className="a">
                <NavLink className={"a"} to="/groups">
                  Guruhlar
                </NavLink>
              </li>
              <li className="a">
                <NavLink className={"a"} to="/teachers">
                  O'qituvchilar
                </NavLink>
              </li>
              <li className="a">
                <NavLink className={"a"} to="/images">
                  Rasmlar
                </NavLink>
              </li>
              <li className="a">
                <NavLink className={"a"} to="/contact">
                  Bog'lanish
                </NavLink>
              </li>
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
