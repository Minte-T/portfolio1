
import './App.css';

import {Router,Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/features/Features';
import Resume from './components/resume/Resume';
import Testimonials from './components/Testimonial/Testimonials';
import Contact from './components/contact/Contact';
import Projects from './components/Projects/Projects';



function App() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Features />
      <Resume />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;
