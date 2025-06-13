import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AboutUsImage from '../assets/Aboutus.jpeg';

const AboutSection = () => {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 6,
        backgroundColor: '#f9f5ff', // Equivalent to bg-purple-50
      }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={AboutUsImage}
              alt="Sommeliers Association of Zimbabwe"
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ fontSize: '2.5rem', mb: 3, fontWeight: 'bold' }}>
              About Us
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Established in 2020 by passionate Zimbabwean sommeliers, the Sommeliers Association of Zimbabwe (SAZ) is headquartered in Harare. Our mission is to promote the art and science of wine appreciation while fostering inclusivity and integrating our members into the global sommelier community. As a proud member of the Association de la Sommellerie Internationale (ASI), we offer discounted courses, international certifications, and access to global competitions like Best Sommelier of the World.
            </Typography>
            <Typography variant="body1">
              Our vision is to empower local talent, support the Zimbabwean wine industry, and make wine culture accessible to all. Join us to unlock a world of opportunities in the wine industry.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutSection;