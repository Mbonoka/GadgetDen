import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Avatar,
  Divider,
  Card,
  CardContent,
  Fade,
} from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import GroupsIcon from '@mui/icons-material/Groups';
import PublicIcon from '@mui/icons-material/Public';

const AboutUs = () => {
  return (
    <Fade in timeout={1000}>
      <Box sx={{ backgroundColor: '#fafafa', py: 8 }}>
        <Container maxWidth="lg">
          {/* Heading */}
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: '#2d2d2d',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            Discover who we are, what drives us, and how we make your digital life better.
          </Typography>

          {/* Mission, Vision, Values */}
          <Grid container spacing={4}>
            {/* Mission */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={3}
                sx={{ borderRadius: 4, height: '100%', transition: '0.3s', '&:hover': { transform: 'scale(1.03)' } }}
              >
                <CardContent>
                  <Avatar sx={{ bgcolor: '#4caf50', mb: 2 }}>
                    <EmojiObjectsIcon />
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold">
                    Our Mission
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    To provide high-quality, innovative gadgets that enhance lifestyle and productivity, while ensuring customer satisfaction and affordability.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Vision */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={3}
                sx={{ borderRadius: 4, height: '100%', transition: '0.3s', '&:hover': { transform: 'scale(1.03)' } }}
              >
                <CardContent>
                  <Avatar sx={{ bgcolor: '#2196f3', mb: 2 }}>
                    <PublicIcon />
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold">
                    Our Vision
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    To be the leading tech destination in Africa, inspiring innovation and transforming the digital consumer experience.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Values */}
            <Grid item xs={12} md={4}>
              <Card
                elevation={3}
                sx={{ borderRadius: 4, height: '100%', transition: '0.3s', '&:hover': { transform: 'scale(1.03)' } }}
              >
                <CardContent>
                  <Avatar sx={{ bgcolor: '#ff9800', mb: 2 }}>
                    <GroupsIcon />
                  </Avatar>
                  <Typography variant="h6" fontWeight="bold">
                    Our Values
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    Integrity, innovation, customer-first mindset, and a deep passion for technology drive our daily mission.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          {/* Divider */}
          <Divider sx={{ my: 6 }} />

          {/* Our Story */}
          <Box>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" color="text.secondary">
              GadgetDen was founded with a single idea – making the latest tech accessible to every household in Kenya and beyond.
              From humble beginnings to becoming a trusted name in gadgets, our journey has always been driven by people, passion, and performance.
              We collaborate with top brands globally and offer unparalleled support and quality to our users. Join us as we shape the future of smart living.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Fade>
  );
};

export default AboutUs;
