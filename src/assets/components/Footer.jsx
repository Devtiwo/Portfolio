import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={style.footwrap}>
      <div className={style.iconwrapper}>
        <a href="https://github.com/Devtiwo" target="_blank">
          <FaGithub className={style.abouticons} />
        </a>
        <a href="https://x.com/devtiwo" target="_blank">
          <FaTwitter className={style.abouticons} />
        </a>
        <a
          href="https://www.linkedin.com/in/taiwo-adetunji-860666225/"
          target="_blank"
        >
          <FaLinkedin className={style.abouticons} />
        </a>
      </div>
    </section>
  );
};

export default Footer;
