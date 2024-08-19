import React from 'react';
import NavBar from './components/NavBar/Navbar';
import './App.css'

import Section1 from './components/pages/Home/section1';
import Estadistica from './components/pages/Home/estadistica'
import Section2 from './components/pages/Home/section2';
// import Section3 from './components/pages/Home/section3';
import Section4 from './components/pages/Home/section4';

import Contact from './components/Contact_Us/contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Section1/>
      <Estadistica/>
      <Section2/>
      {/* <Section3/> */}
      <Section4/>
      <Contact/>
      <Footer/>
      {/* Otros componentes */}
    </div>
  );
};

export default App;
