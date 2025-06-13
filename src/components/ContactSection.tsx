import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call)
    setMessage('Message sent successfully!');
    setMessageType('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: 6,
        backgroundColor: '#fff',
      }}
    >
      <Box sx={{ maxWidth: '600px', mx: 'auto', px: 2 }}>
        <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
          Contact Us
        </Typography>
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
            rows={4}
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
                color: messageType === 'success' ? 'green' : 'red',
              }}
            >
              {message}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;