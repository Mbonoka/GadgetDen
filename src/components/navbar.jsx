import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Container,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  ShoppingCart,
  AccountCircle,
  Person,
  ShoppingBag,
  Mail,
  FavoriteBorder,
  ConfirmationNumber,
  Logout,
  HelpOutline,
  ChatBubbleOutline,
  ArrowDropDown,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About us', path: '/about' },
  { label: 'Contact us', path: '/contact' },
];

const TopNavBar = () => {
  const [anchorUser, setAnchorUser] = useState(null);
  const [anchorHelp, setAnchorHelp] = useState(null);

  const openUser = Boolean(anchorUser);
  const openHelp = Boolean(anchorHelp);

  const handleUserClick = (event) => setAnchorUser(event.currentTarget);
  const handleHelpClick = (event) => setAnchorHelp(event.currentTarget);

  const handleClose = () => {
    setAnchorUser(null);
    setAnchorHelp(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#f8f8f8',
        color: 'black',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: '64px',
          }}
        >
          {/* Left Nav */}
          <Box sx={{ display: 'flex', gap: 3 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{ color: 'black', fontWeight: 500 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontWeight: 'bold',
              fontSize: '1.3rem',
              color: '#000',
              fontFamily: 'sans-serif',
              textDecoration: 'none',
            }}
          >
            GadgetDen
          </Typography>

          {/* Right Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Help Menu */}
            <Button
              onClick={handleHelpClick}
              sx={{ color: 'black', textTransform: 'none' }}
              startIcon={<HelpOutline />}
              endIcon={<ArrowDropDown />}
            >
              Help
            </Button>

            <Menu
              anchorEl={anchorHelp}
              open={openHelp}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={handleClose}>Help Center</MenuItem>
              <MenuItem onClick={handleClose}>Place your Order</MenuItem>
              <MenuItem onClick={handleClose}>Payment Options</MenuItem>
              <MenuItem onClick={handleClose}>Delivery Timelines & Track your Order</MenuItem>
              <MenuItem onClick={handleClose}>Returns & Refunds</MenuItem>
              <MenuItem onClick={handleClose}>Warranty</MenuItem>
              <Divider />
              <MenuItem onClick={handleClose} sx={{ backgroundColor: '#FFA500', color: 'white' }}>
                <ListItemIcon>
                  <ChatBubbleOutline sx={{ color: 'white' }} />
                </ListItemIcon>
                Live Chat
              </MenuItem>
            </Menu>

            {/* Cart Icon */}
            <IconButton>
              <ShoppingCart />
            </IconButton>

            {/* User Profile Dropdown */}
            <Button
              onClick={handleUserClick}
              sx={{ color: 'black', textTransform: 'none' }}
              endIcon={<ArrowDropDown />}
              startIcon={<AccountCircle />}
            >
              Hi, Ivy
            </Button>

            <Menu
              anchorEl={anchorUser}
              open={openUser}
              onClose={handleClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={handleClose}>
                <ListItemIcon><Person fontSize="small" /></ListItemIcon>
                My Account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon><ShoppingBag fontSize="small" /></ListItemIcon>
                Orders
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon><Mail fontSize="small" /></ListItemIcon>
                Inbox
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon><FavoriteBorder fontSize="small" /></ListItemIcon>
                Wishlist
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon><ConfirmationNumber fontSize="small" /></ListItemIcon>
                Vouchers
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon><Logout sx={{ color: 'orange' }} /></ListItemIcon>
                <Typography sx={{ color: 'orange' }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default TopNavBar;
