import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import ExploreSection from '../components/ExploreSection';
import Footer from '../components/Footer';


const HomePage = () => {
    return (
      <div className='home'>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <FeaturesSection />
          <ExploreSection />
          <Footer />   
      </div>
    );
  };
  
  export default HomePage;