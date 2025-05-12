
import { Grid, Box, Typography } from '@mui/material';
import GadgetCard from './gadgetcard';

// Dummy gadgets
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

const GadgetGrid = () => {
  return (
    <Box sx={{ px: 4, py: 5 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Featured Gadgets
      </Typography>
      <Grid container spacing={4}>
        {gadgets.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <GadgetCard gadget={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GadgetGrid;
