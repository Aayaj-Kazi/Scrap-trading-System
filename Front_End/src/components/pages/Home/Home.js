import React from 'react';
import '../../../App.css';
import HeroSection from './HeroSection';
import Cards from './SampleCards/Cards';
import Footer from './../Footer/Footer';
import Navbar from '../NavBar/Navbar';





function Home() {
  return (
    <div> 
      
      <HeroSection />
      <Cards/>
      <Footer/>
    </div>
  );
}

export default Home;
