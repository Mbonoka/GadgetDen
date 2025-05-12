import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#111',
        color: '#fff',
        py: 5,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              GadgetDen
            </Typography>
            <Typography variant="body2">
              Your premium source for tech—phones, laptops, and accessories all in one place.
            </Typography>
          </Grid>

          {/* Navigation */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link href="/" color="inherit" underline="hover" display="block">Home</Link>
              <Link href="/about" color="inherit" underline="hover" display="block">About Us</Link>
              <Link href="/contact" color="inherit" underline="hover" display="block">Contact</Link>
              <Link href="/shop" color="inherit" underline="hover" display="block">Shop</Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email: support@gadgetden.co.ke</Typography>
            <Typography variant="body2">Phone: +254 712 345 678</Typography>
            <Typography variant="body2">Nairobi, Kenya</Typography>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#fff' }}>
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" sx={{ color: '#fff' }}>
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#fff' }}>
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" sx={{ color: '#fff' }}>
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Line */}
        <Box textAlign="center" mt={4} pt={3} borderTop="1px solid #333">
          <Typography variant="body2" color="gray">
            &copy; {new Date().getFullYear()} GadgetDen. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
