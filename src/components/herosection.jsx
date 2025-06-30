import React from 'react';
import { Box, Typography, AppBar, Toolbar, Button, Grid } from '@mui/material';

const gadgets = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    description: '256GB, Deep Blue Titanium, A17 Pro chip',
    price: 220000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=400&hei=300&fmt=jpeg&qlt=80&.v=1692923781366',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    description: '512GB, Titanium Gray, 200MP Camera',
    price: 195000,
    image: 'https://th.bing.com/th/id/OIP.k3aSxo70zN45JFHDBPVl4gHaHa?w=199&h=199&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7',},
  {
    id: 3,
    name: 'MacBook Air M2',
    description: '13", 8GB RAM, 512GB SSD, Midnight',
    price: 185000,
    image: 'https://th.bing.com/th/id/OIP.MAybacQXYYSgZK4tJvP7fwHaEK?w=282&h=180&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7',
  },
  {
    id: 4,
    name: 'HP Spectre x360',
    description: '14", Intel Evo, 16GB RAM, 1TB SSD',
    price: 175000,
    image: 'https://th.bing.com/th/id/OIP.5-dPn22msQqZH5CFxhobCwHaEu?w=285&h=181&c=7&r=0&o=5&cb=iwc2&dpr=1.5&pid=1.7',
  },
];

const TopNavBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(0, 0, 0, 0.2)',
        backdropFilter: 'blur(10px)', // Glassmorphism
        boxShadow: 'none',
        py: 1,
        zIndex: 3,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mr: 4, color: '#fff', fontWeight: 'bold' }}>
            Λ
          </Typography>
          <Button color="inherit" sx={{ color: '#fff', mx: 1 }} href="#projects">
            Projects
          </Button>
          <Button color="inherit" sx={{ color: '#fff', mx: 1 }} href="#about">
            About
          </Button>
          <Button color="inherit" sx={{ color: '#fff', mx: 1 }} href="#services">
            Services
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const GadgetCard = ({ gadget }) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '250px' },
        height: '180px',
        borderRadius: '12px',
        background: 'rgba(255, 255, 255, 0.1)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        overflow: 'hidden',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(255, 255, 255, 0.3)',
        },
      }}
      onClick={() => console.log('Clicked gadget:', gadget.name)}
    >
      <Box sx={{ width: '80%', height: '100%' }}>
        <img
          src={gadget.image}
          alt={gadget.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '12px 0 0 12px',
          }}
        />
      </Box>
      <Box sx={{ width: '60%', p: 1, color: '#fff', textAlign: 'left' }}>
        <Typography variant="h6" sx={{ fontSize: '0.85rem', mb: 0.5 }}>
          {gadget.name}
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '0.85rem' }}>
          KSh {gadget.price.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
};


const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #1a1a1a, #2c3e50)',
        animation: 'gradientShift 15s ease-in-out infinite',
        boxSizing: 'border-box',
        '@keyframes gradientShift': {
          '0%': { background: 'linear-gradient(45deg, #1a1a1a, #2c3e50)' },
          '50%': { background: 'linear-gradient(45deg, #2c3e50, #1a1a1a)' },
          '100%': { background: 'linear-gradient(45deg, #1a1a1a, #2c3e50)' },
        },
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(https://sdmntprwestus.oaiusercontent.com/files/00000000-7994-6230-8859-7983aa96c692/raw?se=2025-05-22T17%3A04%3A33Z&sp=r&sv=2024-08-04&sr=b&scid=e7f40c21-5a32-5097-abb8-c65b32b997cb&skoid=ea1de0bc-0467-43d6-873a-9a5cf0a9f835&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-21T20%3A40%3A20Z&ske=2025-05-22T20%3A40%3A20Z&sks=b&skv=2024-08-04&sig=g2a50yAGL1TkOa1wgGb0HWzYnSjO1E4DbQXuV6zeDQI%3D)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          opacity: 0.3,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          },
        }}
      />
      <TopNavBar />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          px: { xs: 2, md: 4 },
          py: { xs: 8, md: 4 }, // Extra padding-top on mobile for navbar
          maxWidth: '1200px',
          width: '100%',
        }}
      >
        <Box
          sx={{
            animation: 'fadeIn 2s ease-out',
            '@keyframes fadeIn': {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3.5rem' },
              letterSpacing: '0.1em',
              lineHeight: 1.2,
              textTransform: 'uppercase',
              fontFamily: 'Georgia, serif',
              color: '#fff',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
            }}
          >
            Experience the Future in Your Palm
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 400,
              fontSize: { xs: '1rem', md: '1.25rem' },
              letterSpacing: '0.05em',
              lineHeight: 1.5,
              fontFamily: 'Arial, sans-serif',
              color: '#fff',
              opacity: 0.9,
              mt: 2,
            }}
          >
            🛍️ Shop now — your next upgrade awaits.
          </Typography>
        </Box>
        <Grid
          container
          spacing={1} // Minimal spacing
          sx={{ mt: 4, justifyContent: 'center' }}
        >
          {gadgets.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <GadgetCard gadget={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HeroSection;
