import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import SAZChair from '../assets/SAZChair.jpg';
import SAZBM2 from '../assets/SAZBM2.jpg';
import SAZBM3 from '../assets/SAZBM3.jpg';
import SAZBM4 from '../assets/Lillian-SAZBM.jpg';

const BoardSection = () => {
  const boardMembers = [
    { name: 'Carey-Ann Brown', title: 'Current Board Chair', image: SAZChair },
    { name: 'JV Ridon', title: 'Vice Chair', image: SAZBM2 },
    { name: 'Takura Makadzange', title: 'Board Member', image: SAZBM3 },
    { name: 'Lillian Mugwagwa', title: 'Board Member', image: SAZBM4 },
  ];

  return (
    <Box
      component="section"
      id="board"
      sx={{
        py: 6,
        backgroundColor: '#fff',
      }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Board Members
        </Typography>
        <Grid container spacing={4}>
          {boardMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  image={member.image}
                  alt={`${member.name}`}
                  sx={{ height: 200, width: '100%', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default BoardSection;