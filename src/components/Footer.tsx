import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Grid, Typography, TextField, Button, IconButton, Link } from '@mui/material';
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage('Please enter your email address.');
      setMessageType('error');
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    setMessage('Subscribed successfully!');
    setMessageType('success');
    setEmail('');

    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  return (
    <Box component="footer" sx={{ py: 4, backgroundColor: '#333', color: '#fff' }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 }}>
        <Grid container spacing={4}>
          {/* Logo and Contact */}
          <Grid item xs={12} md={4}>
            <RouterLink to="/">
              <img src="/assets/images/SAZLogo.png" alt="SAZ Logo" style={{ maxWidth: '100%' }} />
            </RouterLink>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaEnvelope /> contact@saz.org
              </Typography>
              <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <FaPhone /> +263 77 123 4567
              </Typography>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff' }}>
              Get Updates
            </Typography>
            <Box component="form" onSubmit={handleNewsletterSubmit} sx={{ mt: 1 }}>
              <TextField
                fullWidth
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                variant="outlined"
                sx={{ mb: 2, backgroundColor: '#fff', borderRadius: 1 }}
                inputProps={{ 'aria-label': 'Enter your email address to subscribe to our newsletter' }}
              />
              <Button type="submit" variant="contained" sx={{ mt: 1 }}>
                Subscribe
              </Button>
            </Box>
            {message && (
              <Typography
                variant="body2"
                sx={{ mt: 1, color: messageType === 'success' ? 'green' : 'red' }}
              >
                {message}
              </Typography>
            )}
          </Grid>

          {/* Social and Legal Links */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item>
                  <IconButton
                    component="a"
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our LinkedIn page"
                    sx={{ color: '#fff' }}
                  >
                    <FaLinkedin />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    component="a"
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Twitter page"
                    sx={{ color: '#fff' }}
                  >
                    <FaTwitter />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    component="a"
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our Facebook page"
                    sx={{ color: '#fff' }}
                  >
                    <FaFacebook />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                    component="a"
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit our YouTube page"
                    sx={{ color: '#fff' }}
                  >
                    <FaYoutube />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              <Link
                component={RouterLink}
                to="/terms-privacy"
                color="inherit"
                underline="hover"
              >
                Terms & Privacy
              </Link>
            </Typography>
            <Typography variant="body2">© 2025 Sommeliers Association of Zimbabwe</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
export {};