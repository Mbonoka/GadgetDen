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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const brands = ['Apple', 'Samsung', 'Infinix', 'Xiaomi'];
const categories = ['Smartphones', 'Tablets', 'Accessories'];

const FilterSection = () => {
  const [categoryFilters, setCategoryFilters] = useState({});
  const [brandFilters, setBrandFilters] = useState({});
  const [priceRange, setPriceRange] = useState([20000, 100000]);
  const [availability, setAvailability] = useState({ inStock: false, outOfStock: false });

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

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#000',
        color: '#fff',
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 4,
      }}
    >
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
              min={0}
              max={200000}
              step={5000}
              sx={{
                color: '#fff',
                '& .MuiSlider-thumb': { bgcolor: '#fff' },
                '& .MuiSlider-track': { bgcolor: '#fff' },
                '& .MuiSlider-rail': { bgcolor: '#666' },
              }}
            />
            <Typography sx={{ color: '#fff' }}>
              ₦{priceRange[0]} - ₦{priceRange[1]}
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
      <Box sx={{ flex: 1, textAlign: 'center' }}>
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
            console.log('Filters applied:', { categoryFilters, brandFilters, priceRange, availability });
          }}
        >
          Apply Filters
        </Button>
      </Box>
    </Box>
  );
};

export default FilterSection;