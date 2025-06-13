import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const Membership = () => {
  return (
    <Box
      component="section"
      sx={{
        py: 6,
        backgroundColor: '#ebe9f7', // Equivalent to bg-purple-100
      }}
    >
      <Box sx={{ maxWidth: '800px', mx: 'auto', px: 2, textAlign: 'center' }}>
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 3 }}>
          Membership
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Become a member of the Sommeliers Association of Zimbabwe (SAZ) and join a community dedicated to the art and science of wine appreciation. Our membership offers access to exclusive events, discounted courses, and opportunities to connect with global sommelier networks.
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Membership is open to all wine enthusiasts, professionals, and students looking to deepen their knowledge and career in the wine industry.
        </Typography>
        <Button
          component={RouterLink}
          to="/registration"
          variant="contained"
          color="primary"
          sx={{ textTransform: 'none', padding: '8px 24px' }}
        >
          Join SAZ Today
        </Button>
      </Box>
    </Box>
  );
};

export default Membership;