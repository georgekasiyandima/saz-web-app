import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemButton, Button, Box } from '@mui/material'; // Added Box
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Logo from '../assets/logo.svg';

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { to: '/', label: 'Home', end: true },
    { to: '/contact', label: 'Contact' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/membership', label: 'Membership' },
    { to: '/news', label: 'News' },
    { to: '/contests', label: 'Contests' },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isScrolled ? '#333' : 'transparent',
        boxShadow: isScrolled ? 3 : 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Toolbar sx={{ maxWidth: '1200px', mx: 'auto', px: 2, width: '100%' }}>
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={Logo} alt="SAZ Logo" style={{ height: '40px' }} />
        </NavLink>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileMenu}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setIsMobileMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#fff' : '#ccc',
                textDecoration: 'none',
                padding: '8px 16px',
                '&:hover': { color: '#fff' },
              })}
            >
              {item.label}
            </NavLink>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              navigate('/registration');
              setIsMobileMenuOpen(false);
            }}
            sx={{ ml: 2 }}
          >
            Join Now
          </Button>
        </Box>

        <Drawer
          anchor="right"
          open={isMobileMenuOpen}
          onClose={toggleMobileMenu}
          sx={{ display: { md: 'none' } }}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton
                  component={NavLink}
                  to={item.to}
                  end={item.end}
                  onClick={toggleMobileMenu}
                  sx={{
                    color: '#333',
                    '&.active': { color: '#800020', fontWeight: 'bold' },
                  }}
                >
                  {item.label}
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                component={Button}
                onClick={() => {
                  navigate('/registration');
                  toggleMobileMenu();
                }}
                sx={{ color: '#333', justifyContent: 'center' }}
              >
                Join Now
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;