import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Container,
  Badge,
} from '@mui/material';
import { ShoppingCart, AdminPanelSettings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about' },
  { label: 'Contact us', path: '/contact' },
];

const TopNavBar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      setCartItemCount(cart.length);
    };

    updateCartCount();
    window.addEventListener('storage', updateCartCount);
    return () => window.removeEventListener('storage', updateCartCount);
  }, []);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#f8f8f8',
        color: 'black',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: '64px',
          }}
        >
          {/* Left Nav */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{ color: 'black', fontWeight: 500 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.3rem',
              color: '#000',
              fontFamily: 'sans-serif',
              textDecoration: 'none',
            }}
          >
            GadgetDen
          </Typography>

          {/* Right Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Cart Icon with badge */}
            <IconButton component={Link} to="/cart" sx={{ color: 'black' }}>
              <Badge badgeContent={cartItemCount} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>

            {/* Admin Login Button */}
            <Button
              component={Link}
              to="/admin-login"
              sx={{
                color: 'black',
                textTransform: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
              }}
              startIcon={<AdminPanelSettings />}
            >
              Admin Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNavBar;
