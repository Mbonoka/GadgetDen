import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
  Fade,
} from '@mui/material';

const ContactUs = () => {
  return (
    <Fade in timeout={1000}>
      <Box sx={{ backgroundColor: '#f9f9f9', py: 8 }}>
        <Container maxWidth="lg">
          {/* Page Title */}
          <Typography
            variant="h3"
            align="center"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: 'Poppins, sans-serif', color: '#2d2d2d' }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            sx={{ mb: 6 }}
          >
            We'd love to hear from you. Reach out with your questions, feedback, or just to say hi!
          </Typography>

          {/* Grid: Form + Map */}
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Send us a message
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <form>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      mt: 2,
                      backgroundColor: '#000',
                      '&:hover': {
                        backgroundColor: '#333',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Grid>

            {/* Map & Locations */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Our Global Presence
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Find us in Kenya, USA, UK, and Dubai. We serve globally through our e-commerce platform.
              </Typography>

              <Box
                sx={{
                  borderRadius: 2,
                  overflow: 'hidden',
                  height: '320px',
                  mb: 2,
                  boxShadow: 2,
                }}
              >
                {/* Dummy World Map via iframe */}
                <iframe
                  title="world-map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-150.0,-50.0,150.0,80.0&amp;layer=mapnik"
                  style={{ border: 0 }}
                />
              </Box>

              {/* Office Locations */}
              <Box>
                <Typography variant="body1" fontWeight="bold">
                  Nairobi, Kenya
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  ABC Towers, Westlands
                </Typography>

                <Typography variant="body1" fontWeight="bold">
                  London, UK
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  TechCity Hub, Shoreditch
                </Typography>

                <Typography variant="body1" fontWeight="bold">
                  New York, USA
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Manhattan Downtown Office
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fade>
  );
};

export default ContactUs;
