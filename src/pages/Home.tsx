import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BoardSection from '../components/BoardSection';
import RegistrationSection from '../components/RegistrationSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
  return (
    <div className="space-y-12">
      <HeroSection />
      <AboutSection />
      <BoardSection />
      <RegistrationSection />
      <ContactSection />
    </div>
  );
};

export default Home;