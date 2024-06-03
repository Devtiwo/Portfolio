import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { TypeAnimation } from "react-type-animation";
import style from "./Hero.module.css";

const Hero = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <section className={style.container}>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffd070",
              },
              links: {
                color: "#ffd070",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <article>
        <h1 className="mb-3 fw-bold display-1">
          Hi there!👋, I am <span>Taiwo Adetunji.</span>
        </h1>
        <h3 className="mb-2 mt-4">
          <TypeAnimation
            sequence={[
              "I am a Full stack software developer.",
              1000,
              "I work with the MERN stack.",
              1000,
              "I ❤️ javascript.",
              1000,
              "I also work with other technologies.",
              1000,
            ]}
            speed={30}
            repeat={Infinity}
          />
        </h3>
        <p>
          I can build a product,feature or website.Look through some of my
          recent works and experience.If you like what you see and you need any
          project coded,feel free to contact me.
        </p>
        <a href='' target='_blank'>See my Resume</a>
      </article>
    </section>
  );
};

export default Hero;
