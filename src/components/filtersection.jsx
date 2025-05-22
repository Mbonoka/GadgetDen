import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const brands = ['Apple', 'Samsung', 'Infinix', 'Xiaomi'];
const categories = ['Smartphones', 'Tablets', 'Accessories'];

// Currency conversion rates (approximate, as of May 2025)
const currencies = [
  { code: 'KES', symbol: 'KSh', rate: 1 }, // Base currency
  { code: 'USD', symbol: '$', rate: 0.0077 }, // 1 USD ≈ 130 KES
  { code: 'NGN', symbol: '₦', rate: 12.5 }, // 1 NGN ≈ 0.08 KES
];

const FilterSection = () => {
  const [categoryFilters, setCategoryFilters] = useState({});
  const [brandFilters, setBrandFilters] = useState({});
  const [priceRange, setPriceRange] = useState([20000, 100000]); // Price range in KES
  const [availability, setAvailability] = useState({ inStock: false, outOfStock: false });
  const [currency, setCurrency] = useState('KES'); // Default to KES

  const handleCategoryChange = (event) => {
    setCategoryFilters({
      ...categoryFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const handleBrandChange = (event) => {
    setBrandFilters({
      ...brandFilters,
      [event.target.name]: event.target.checked,
    });
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability({
      ...availability,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    const currentRate = currencies.find((c) => c.code === currency).rate;
    const newRate = currencies.find((c) => c.code === newCurrency).rate;
    // Convert price range to new currency
    setPriceRange([
      Math.round((priceRange[0] * currentRate) / newRate),
      Math.round((priceRange[1] * currentRate) / newRate),
    ]);
    setCurrency(newCurrency);
  };

  // Get current currency details
  const currentCurrency = currencies.find((c) => c.code === currency);
  const displayPrice = (value) =>
    `${currentCurrency.symbol}${Math.round(value * currentCurrency.rate).toLocaleString()}`;

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#000',
        color: '#fff',
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile
        alignItems: { xs: 'stretch', md: 'center' },
        justifyContent: 'space-between',
        gap: 2,
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      {/* Currency Selector */}
      <Box sx={{ flex: 1, mb: { xs: 2, md: 0 } }}>
        <FormControl fullWidth sx={{ bgcolor: '#000', color: '#fff' }}>
          <InputLabel sx={{ color: '#fff' }}>Currency</InputLabel>
          <Select
            value={currency}
            onChange={handleCurrencyChange}
            label="Currency"
            sx={{
              color: '#fff',
              '& .MuiSvgIcon-root': { color: '#fff' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#fff' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#ddd' },
            }}
          >
            {currencies.map((curr) => (
              <MenuItem key={curr.code} value={curr.code}>
                {curr.code} ({curr.symbol})
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Category Filter */}
      <Box sx={{ flex: 1 }}>
        <Accordion sx={{ bgcolor: '#000', color: '#fff' }} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
            <Typography variant="body1">Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {categories.map((cat) => (
                <FormControlLabel
                  key={cat}
                  control={
                    <Checkbox
                      sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }}
                      checked={categoryFilters[cat] || false}
                      onChange={handleCategoryChange}
                      name={cat}
                    />
                  }
                  label={<Typography sx={{ color: '#fff' }}>{cat}</Typography>}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Brand Filter */}
      <Box sx={{ flex: 1 }}>
        <Accordion sx={{ bgcolor: '#000', color: '#fff' }} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
            <Typography variant="body1">Brand</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {brands.map((brand) => (
                <FormControlLabel
                  key={brand}
                  control={
                    <Checkbox
                      sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }}
                      checked={brandFilters[brand] || false}
                      onChange={handleBrandChange}
                      name={brand}
                    />
                  }
                  label={<Typography sx={{ color: '#fff' }}>{brand}</Typography>}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Price Range Slider */}
      <Box sx={{ flex: 1 }}>
        <Accordion sx={{ bgcolor: '#000', color: '#fff' }} defaultExpanded>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
            <Typography variant="body1">Price Range</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              valueLabelFormat={displayPrice}
              min={0}
              max={currency === 'KES' ? 200000 : currency === 'USD' ? 1500 : 2500000}
              step={currency === 'KES' ? 5000 : currency === 'USD' ? 10 : 50000}
              sx={{
                color: '#fff',
                '& .MuiSlider-thumb': { bgcolor: '#fff' },
                '& .MuiSlider-track': { bgcolor: '#fff' },
                '& .MuiSlider-rail': { bgcolor: '#666' },
              }}
            />
            <Typography sx={{ color: '#fff' }}>
              {displayPrice(priceRange[0])} - {displayPrice(priceRange[1])}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Availability Filter */}
      <Box sx={{ flex: 1 }}>
        <Accordion sx={{ bgcolor: '#000', color: '#fff' }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: '#fff' }} />}>
            <Typography variant="body1">Availability</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }}
                    checked={availability.inStock}
                    onChange={handleAvailabilityChange}
                    name="inStock"
                  />
                }
                label={<Typography sx={{ color: '#fff' }}>In Stock</Typography>}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ color: '#fff', '&.Mui-checked': { color: '#fff' } }}
                    checked={availability.outOfStock}
                    onChange={handleAvailabilityChange}
                    name="outOfStock"
                  />
                }
                label={<Typography sx={{ color: '#fff' }}>Out of Stock</Typography>}
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Apply Filters Button */}
      <Box sx={{ flex: 1, textAlign: 'center', mt: { xs: 2, md: 0 } }}>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#fff',
            color: '#000',
            '&:hover': { bgcolor: '#ddd' },
            borderRadius: '20px',
            px: 4,
          }}
          onClick={() => {
            console.log('Filters applied:', { categoryFilters, brandFilters, priceRange, currency, availability });
          }}
        >
          Apply Filters
        </Button>
      </Box>
    </Box>
  );
};

export default FilterSection;
