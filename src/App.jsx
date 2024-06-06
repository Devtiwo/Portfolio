import React from "react";
import "./App.css";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
