import React from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
