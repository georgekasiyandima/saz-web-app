import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const Certifications = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        backgroundColor: '#f9f5ff', // Equivalent to bg-purple-50
      }}
    >
      <Box sx={{ maxWidth: '800px', mx: 'auto', px: 2, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 3 }}>
          Certifications
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          The Sommeliers Association of Zimbabwe (SAZ) offers internationally recognized certifications through our partnership with the Association de la Sommellerie Internationale (ASI). Our programs are designed to empower local talent and elevate the Zimbabwean wine industry.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          From beginner courses to advanced sommelier certifications, SAZ provides access to discounted training and global competitions like the Best Sommelier of the World.
        </Typography>
        <Button
          component={RouterLink}
          to="/registration"
          variant="contained"
          color="primary"
          sx={{ textTransform: 'none', padding: '8px 24px' }}
        >
          Get Certified
        </Button>
      </Box>
    </Box>
  );
};

export default Certifications;