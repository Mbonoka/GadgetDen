import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = [
  { name: 'Apple', logo: '/Apple-Logo.png' },
  { name: 'Samsung', logo: '/Samsung-Logo.png' },
  { name: 'Google', logo: '/Google-logo.png' },
  { name: 'Microsoft', logo: '/Microsoft-logo.png' },
  { name: 'Dell', logo: '/Dell-logo.jpg' },
  { name: 'HP', logo: '/hp.png' },
  { name: 'Lenovo', logo: '/Lenovo-Logo.png' },
  { name: 'Sony', logo: '/sony.png' },
  { name: 'Nvidia', logo: '/nvidia.png' },
  { name: 'Qualcomm', logo: '/qualcomm.png' },
  { name: 'Huawei', logo: '/Huawei.jpeg' },
];

const PartnersSection = () => {
  return (
    <Box
      sx={{
        py: 4, // Reduced from 6
        backgroundColor: '#f9f9f9',
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
        Our Trusted Partners
      </Typography>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5} // Reduced from 20
        slidesPerView={2.5} // Slightly increased for compactness
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 4.5 },
          1024: { slidesPerView: 6.5 },
        }}
        sx={{ px: 2 }} // Minimal padding for Swiper container
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: 80, // Reduced from 100
                height: 80, // Reduced from 100
                borderRadius: '8px', // Smaller radius for sleek look
                overflow: 'hidden',
                border: '1px solid #ddd', // Thinner border
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.05)', // Reduced from 1.1
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{ width: '90%', height: '90%', objectFit: 'contain' }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PartnersSection;