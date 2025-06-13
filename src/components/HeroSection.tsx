import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import HeroImage from '../assets/HeroSection.jpg';

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '400px',
        overflow: 'hidden',
        '& .hero-image': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      }}
    >
      <Box className="hero-image-container">
        <img src={HeroImage} alt="Hero Section" className="hero-image" />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay effect
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          padding: 2,
        }}
      >
        <Typography variant="h1" sx={{ fontSize: '3rem', fontWeight: 'bold', mb: 2 }}>
          Welcome to SAZ
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '1.5rem', mb: 4 }}>
          Join the Sommeliers Association of Zimbabwe
        </Typography>
        <Button
          component={RouterLink}
          to="#join"
          variant="contained"
          color="primary"
          sx={{ textTransform: 'none', padding: '8px 24px' }}
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;