import React from "react";
import style from "./About.module.css";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className={style.aboutwrap}>
      <article>
        <h1 className="display-1 fw-bold mx-3">About Me</h1>
        <p className="w-75">
          I am a self-taught full Stack web Developer who is passionate about
          creating beautiful, interactive, and user-friendly websites. With my
          skills, I have designed and developed some user-friendly and
          responsive web applications. I bring designs to life with clean,
          responsive and documented code. I am very collaborative and dedicated
          to delivering exceptional user experiences, I stay updated with
          industry trends to create visually stunning websites that makes a
          lasting impact.While I'm dedicated to the world of web development, I
          am also studying as a penetration tester where I'm gaining valuable
          insights in cybersecurity. When I'm not at the computer, I play video
          games. I also read books and articles on web development and
          cybersecurity.
        </p>
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
      </article>
      <article>
        <h1 className={style.stackhead}>Tech Stack</h1>
        <div className={style.stack}>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="100"
              height="90"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="tailwindcss"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
              alt="react"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
              alt="redux"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg"
              alt="mongoDB"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
              alt="git"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg"
              alt="nodejs"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
              alt="php"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
              alt="express"
              width="100"
              height="100"
            />
          </div>
          <div className={style.stackitems}>
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width="100"
              height="100"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default About;
