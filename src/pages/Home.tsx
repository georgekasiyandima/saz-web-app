import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import BoardSection from '../components/BoardSection';
import RegistrationSection from '../components/RegistrationSection';
import ContactSection from '../components/ContactSection';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{ '& > *': { mb: 12 }, '& > *:last-child': { mb: 0 } }}>
      <HeroSection />
      <AboutSection />
      <BoardSection />
      <RegistrationSection />
      <ContactSection />
    </Box>
  );
};

export default Home;