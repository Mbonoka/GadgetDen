import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import GadgetCard from './gadgetcard';

const gadgets = [
  {
    name: 'iPhone 15 Pro Max',
    description: '256GB, Deep Blue Titanium, A17 Pro chip',
    price: 220000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692923781366',
  },
  {
    name: 'Samsung Galaxy S24 Ultra',
    description: '512GB, Titanium Gray, 200MP Camera',
    price: 195000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692923781366',
  },
  {
    name: 'MacBook Air M2',
    description: '13", 8GB RAM, 512GB SSD, Midnight',
    price: 185000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692923781366',
  },
  {
    name: 'HP Spectre x360',
    description: '14", Intel Evo, 16GB RAM, 1TB SSD',
    price: 175000,
    image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692923781366',
  },
];

const HeroSection = () => {
  const handleClick = (gadget) => {
    console.log('Clicked gadget:', gadget.name);
    // In future, navigate to detail page or open modal
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '80vh',
        backgroundImage: `url('https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-model-unselect-gallery-1-202309?wid=5120&hei=2880&fmt=jpeg&qlt=80&.v=1692923781366')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Carousel at the bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          py: 2,
          px: 4,
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
        }}
      >
        <Typography variant="h6" fontWeight="bold" mb={2} textAlign="center">
          Featured Gadgets
        </Typography>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={10} // tighter spacing
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {gadgets.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => handleClick(item)}
                className="p-4 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl rounded-xl"
              >
                <GadgetCard gadget={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

export default HeroSection;
