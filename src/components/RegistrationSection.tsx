import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const RegistrationSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        backgroundColor: '#ebe9f7', // Equivalent to bg-purple-100
        textAlign: 'center',
      }}
    >
      <Box sx={{ maxWidth: '600px', mx: 'auto', px: 2 }}>
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 3 }}>
          Registration Drive 2025
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Become an SAZ member for 2025 at only 10 USD. Join us today!
        </Typography>
        <Button
          component={RouterLink}
          to="/registration"
          variant="contained"
          color="primary"
          sx={{ textTransform: 'none', padding: '8px 24px' }}
        >
          Register Now
        </Button>
      </Box>
    </Box>
  );
};

export default RegistrationSection;