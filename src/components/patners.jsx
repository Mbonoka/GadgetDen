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
    <Box sx={{ py: 6, backgroundColor: '#f9f9f9' }}>
      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={4}>
        Our Trusted Partners
      </Typography>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: 100,
                height: 100,
                mx: 'auto',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid #ddd',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: 3,
                },
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{ width: '80%', height: '80%', objectFit: 'contain' }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default PartnersSection;
