import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import SAZ1 from '../assets/SAZ1.jpg';
import SAZ2 from '../assets/SAZ2.jpg';
import SAZ3 from '../assets/SAZ3.jpg';

const Contests = () => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const targetDate = new Date('2024-12-09T00:00:00Z').getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        setTimeLeft(`${days}d ${hours}h remaining`);
      } else {
        setTimeLeft('Event has started!');
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ py: 6, backgroundColor: '#f5f5f5' }}>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', mb: 6 }}>
        <CardMedia
          component="img"
          image={SAZ2}
          alt="Contests Hero Banner"
          sx={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>

      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        {/* Best Sommelier of Zimbabwe */}
        <Card sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow: 1 }}>
          <CardMedia
            component="img"
            image={SAZ3}
            alt="Best Sommelier of Zimbabwe"
            sx={{
              width: { xs: '100%', md: '33.33%' },
              height: 'auto',
              objectFit: 'contain',
            }}
          />
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Best Sommelier of Zimbabwe
            </Typography>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
              <li>2020 - Tawanda Marume</li>
              <li>2021 - Job Jovo</li>
              <li>2023 - Tadiswa Chikwanha</li>
            </ul>
          </CardContent>
        </Card>

        {/* Ubuntu Trophy */}
        <Card sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, boxShadow: 1 }}>
          <CardMedia
            component="img"
            image={SAZ1}
            alt="Ubuntu Trophy"
            sx={{
              width: { xs: '100%', md: '33.33%' },
              height: 'auto',
              objectFit: 'contain', // Ensure full image is visible
              minHeight: 200, // Minimum height to maintain layout
              maxHeight: 400, // Cap height to avoid excessive stretching
            }}
          />
          <CardContent sx={{ flexGrow: 1, p: 3 }}>
            <Typography variant="h4" color="text.primary" gutterBottom>
              Ubuntu Trophy
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              In partnership with SASA and Stellenbosch Wine Routes. This annual event sees Team Zimbabwe compete with Team South Africa for the trophy. The 2024 Ubuntu Trophy will take place on Monday 9th December 2024. It is open to all our members.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Time left: {timeLeft}
            </Typography>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#555' }}>
              <li>Winner 2020 - Zimbabwe</li>
              <li>Winner 2021 - South Africa</li>
              <li>Winner 2022 - South Africa</li>
              <li>Winner 2023 - South Africa</li>
              <li>Winner 2024 - Mauritius</li>
            </ul>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/membership"
              sx={{ mt: 2 }}
            >
              BECOME A MEMBER NOW!
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Contests;