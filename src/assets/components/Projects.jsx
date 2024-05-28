import React from "react";
import style from "./Projects.module.css";
import { FaLink, FaCode } from "react-icons/fa";

const Projects = () => {
  const project = [
    {
      name: "Conference Website",
      image: "images/conference.png",
      live: "https://devtiwo.github.io/Capstone-1/index.html",
      source: "https://github.com/Devtiwo/Capstone-1",
    },
    {
      name: "Jamming Playlist App",
      image: "images/jam1.PNG",
      live: "https://jammingplaylist.netlify.app",
      source: "https://github.com/Devtiwo/jamming",
    },
    {
      name: "Personal Portfolio",
      image: "images/port1.PNG",
      live: "https://jammingplaylist.netlify.app",
      source: "https://github.com/Devtiwo/jamming",
    },
  ];
  return (
    <section id="projects" className={style.projectcon}>
      <h2 className="mb-5">Projects I've worked on</h2>
      <article className={style.projectcard}>
        {project.map((work, index) => (
          <div className={style.workcard} key={index}>
            <img src={work.image} />
            <div className={style.workbtn}>
              <a href={work.live} target="_blank">
                <FaLink />
              </a>
              <a href={work.source} target="_blank">
                <FaCode />
              </a>
            </div>
            <p>{work.name}</p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Projects;
