import React, { useState, FormEvent } from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setMessage('Please enter your name.');
      setMessageType('error');
      return;
    }
    if (!validateEmail(formData.email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }
    if (!formData.message.trim()) {
      setMessage('Please enter a message.');
      setMessageType('error');
      return;
    }

    setTimeout(() => {
      setMessage('Message sent successfully!');
      setMessageType('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 3000);
    }, 1000);
  };

  return (
    <Box
      component="section"
      sx={{
        py: 6,
        background: 'linear-gradient(to bottom, #fff, #f0f0f5)', // Approximate bg-gradient-to-b
      }}
    >
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: '2.5rem',
            fontFamily: 'Playfair Display, serif',
            color: '#800020', // Approximate text-burgundy-700
            textAlign: 'center',
            mb: 4,
          }}
        >
          Contact Us
        </Typography>
        <Grid container spacing={4} alignItems="stretch">
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 3,
                backgroundColor: '#fff',
                borderRadius: 1,
                boxShadow: 2,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.25rem',
                  fontFamily: 'Poppins, sans-serif',
                  color: '#800000', // Approximate text-burgundy-600
                  mb: 2,
                }}
              >
                Get in Touch
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                <span style={{ fontWeight: 'bold' }}>Phone:</span> +263 78 601 5396
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <span style={{ fontWeight: 'bold' }}>Email:</span> info@zimsomms.com
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <TextField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                label="Your Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variant="outlined"
              />
              <TextField
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={5}
                variant="outlined"
              />
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Send Message
              </Button>
              {message && (
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    textAlign: 'center',
                    color: messageType === 'success' ? '#27ae60' : '#e74c3c', // Approximate green-600 and red-600
                  }}
                >
                  {message}
                </Typography>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;