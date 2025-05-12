// src/components/TopNavBar.jsx

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Container
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const navItems = ['Store', 'iPhone', 'iPad', 'Mac', 'Accessories', 'Support'];

const TopNavBar = () => {
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
          {/* Left Navigation */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            {navItems.slice(0, 3).map((item) => (
              <Button key={item} sx={{ color: 'black', fontWeight: 500 }}>
                {item}
              </Button>
            ))}
          </Box>

          {/* Logo */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.3rem',
              color: '#000',
              cursor: 'pointer',
              fontFamily: 'sans-serif',
            }}
          >
            GadgetDen
          </Typography>

          {/* Right Navigation + Cart */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            {navItems.slice(3).map((item) => (
              <Button key={item} sx={{ color: 'black', fontWeight: 500 }}>
                {item}
              </Button>
            ))}
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNavBar;
