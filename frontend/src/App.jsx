import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import Expertise from './components/Expertise';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Achievements from './components/Achievements';


function App() {
  return (
    <Router>
       <div id="home"><Header /></div>
      
      <Banner />
      <div id="about">
        <About />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="expertise">
        <Expertise />
      </div>

  

      <div id="services">
        <Services />
      </div>
      
      <div id="achievements">
        <Achievements />
      </div>

      <div id="contact">
        <Contact />
      </div>
  

<Footer />

     


    </Router>

  );
}

export default App;
