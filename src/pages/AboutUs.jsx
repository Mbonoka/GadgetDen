import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Fade,
} from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';

const items = [
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: 40, color: '#000' }} />,
    title: 'Our Mission',
    description:
      'We deliver cutting-edge gadgets that enhance lives, blending quality, affordability, and innovation — with customer satisfaction at the core.',
  },
  {
    icon: <PublicIcon sx={{ fontSize: 40, color: '#000' }} />,
    title: 'Our Vision',
    description:
      'To become Africa’s most trusted tech destination — inspiring digital transformation and elevating everyday experiences.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: '#000' }} />,
    title: 'Our Values',
    description:
      'We are driven by integrity, a passion for tech, and a deep commitment to putting our customers first — always.',
  },
];

const AboutUs = () => {
  return (
    <Fade in timeout={800}>
      <Box sx={{ backgroundColor: '#f9f9f9', py: 8 }}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Box textAlign="center" mb={6}>
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#111' }}>
              About Us
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="sm" mx="auto">
              Get to know our purpose, principles, and story.
            </Typography>
          </Box>

          {/* Three Columns Layout (No Cards) */}
          <Grid container spacing={6}>
            {items.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box sx={{ px: 1 }}>
                  <Box mb={2}>{item.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Story Section */}
          <Box mt={8} maxWidth="md" mx="auto">
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#111' }}>
              Our Story
            </Typography>
            <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
              GadgetDen began as a vision to bridge people with technology. From a tiny store to a growing digital platform, our mission remains the same: to offer premium tech that empowers lives. We’ve partnered with leading brands, served thousands, and continue evolving — one gadget at a time.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
};

export default AboutUs;
