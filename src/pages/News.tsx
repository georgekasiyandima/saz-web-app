import React from 'react';
import { Box, Typography } from '@mui/material';

const News = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        backgroundColor: '#fff',
      }}
    >
      <Box sx={{ maxWidth: '800px', mx: 'auto', px: 2, textAlign: 'center' }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '2.5rem',
            fontFamily: 'Playfair Display, serif',
            color: '#800020', // Approximate text-burgundy-700
            mb: 4,
          }}
        >
          News
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Stay tuned for the latest updates from the Sommeliers Association of Zimbabwe!
        </Typography>
      </Box>
    </Box>
  );
};

export default News;