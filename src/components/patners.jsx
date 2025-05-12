import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const partners = [
  { name: 'Apple', logo: 'https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png' },
  { name: 'Samsung', logo: 'https://1000logos.net/wp-content/uploads/2017/06/Samsung-Logo.png' },
  { name: 'Google', logo: 'https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png' },
  { name: 'Microsoft', logo: 'https://1000logos.net/wp-content/uploads/2021/04/Microsoft-logo.png' },
  { name: 'Intel', logo: 'https://1000logos.net/wp-content/uploads/2017/03/Intel-Logo.png' },
  { name: 'Dell', logo: 'https://1000logos.net/wp-content/uploads/2017/03/Dell-Logo.png' },
  { name: 'HP', logo: 'https://1000logos.net/wp-content/uploads/2017/03/HP-Logo.png' },
  { name: 'Lenovo', logo: 'https://1000logos.net/wp-content/uploads/2017/03/Lenovo-Logo.png' },
  { name: 'Sony', logo: 'https://1000logos.net/wp-content/uploads/2017/03/Sony-Logo.png' },
  { name: 'Nvidia', logo: 'https://1000logos.net/wp-content/uploads/2017/03/Nvidia-Logo.png' },
  { name: 'Qualcomm', logo: 'https://1000logos.net/wp-content/uploads/2017/03/Qualcomm-Logo.png' },
  { name: 'Huawei', logo: 'https://1000logos.net/wp-content/uploads/2017/03/Huawei-Logo.png' },
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
