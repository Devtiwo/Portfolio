import React, { useState } from "react";
import style from "./Header.module.css";
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const toggle = () => setIsClicked(!isClicked);
  return (
    <header>
      <nav>
        <div>
          <FaCode className={style.code} />
        </div>
        <div
          className={isClicked ? `${style.navlinksmob}` : `${style.navlinks}`}
          onClick={() => setIsClicked(false)}
        >
          <ul className={style.navwrap}>
            <li>
              <a href="#about" className={style.navitems}>
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className={style.navitems}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className={style.navitems}>
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div className={style.mobile} onClick={toggle}>
          {isClicked ? (
            <FaTimes className={style.icons} />
          ) : (
            <FaBars className={style.icons} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
