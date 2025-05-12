import React from 'react';
import { Box, Typography, AppBar, Toolbar, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import GadgetCard from './gadgetcard'; // Adjust path as needed

const gadgets = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    description: '256GB, Deep Blue Titanium, A17 Pro chip',
    price: 220000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692923781366',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    description: '512GB, Titanium Gray, 200MP Camera',
    price: 195000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692923781366',
  },
  {
    id: 3,
    name: 'MacBook Air M2',
    description: '13", 8GB RAM, 512GB SSD, Midnight',
    price: 185000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692923781366',
  },
  {
    id: 4,
    name: 'HP Spectre x360',
    description: '14", Intel Evo, 16GB RAM, 1TB SSD',
    price: 175000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692923781366',
  },
];

const TopNavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ mr: 4, color: '#fff' }}>
            Λ
          </Typography>
          <Button color="inherit" sx={{ color: '#fff' }}>Projects</Button>
          <Button color="inherit" sx={{ color: '#fff', mx: 2 }}>About</Button>
          <Button color="inherit" sx={{ color: '#fff' }}>Services</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const HeroSection = () => {
  const handleClick = (gadget) => {
    console.log('Clicked gadget:', gadget.name);
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <TopNavBar />
      <Box
        sx={{
          position: 'relative',
          height: '100%',
          backgroundImage: `url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '10%', // Higher on Y-axis
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            textAlign: 'center',
            px: 2,
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: '3.5rem',
              letterSpacing: '0.1em',
              lineHeight: 1.2,
              textTransform: 'uppercase',
              fontFamily: 'Georgia, serif',
            }}
          >
            WE BUILD THE FUTURE, BUILD WITH US
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 400,
              fontSize: '1.25rem',
              letterSpacing: '0.05em',
              lineHeight: 1.5,
              maxWidth: '600px',
              mx: 'auto',
              fontFamily: 'Arial, sans-serif',
              opacity: 0.9,
            }}
          >
            Our team of experts in house building is here to bring your vision to life.
          </Typography>
        </Box>
        <Box sx={{ position: 'absolute', top: 20, right: 20, textAlign: 'right', zIndex: 2 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: '1.5rem',
              letterSpacing: '0.1em',
              fontFamily: 'Georgia, serif',
            }}
          >
            2.5K projects
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              fontFamily: 'Arial, sans-serif',
              opacity: 0.7,
            }}
          >
            made around the world
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          py: 4,
          px: 4,
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          zIndex: 2,
        }}
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {gadgets.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                onClick={() => handleClick(item)}
                style={{ padding: '10px', cursor: 'pointer', transition: 'all 0.3s ease', borderRadius: '10px' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <GadgetCard gadget={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box sx={{ position: 'absolute', bottom: 20, right: 20, zIndex: 2, display: 'flex', gap: 2 }}>
        <Button variant="contained" sx={{ bgcolor: '#000', color: '#fff', borderRadius: '50%', minWidth: '40px', height: '40px' }}>⟵</Button>
        <Button variant="contained" sx={{ bgcolor: '#000', color: '#fff', borderRadius: '50%', minWidth: '40px', height: '40px' }}>⟶</Button>
      </Box>
    </Box>
  );
};

export default HeroSection;