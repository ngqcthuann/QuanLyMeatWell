// Header.js

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Header = () => {
  const [anchorCategories, setAnchorCategories] = React.useState(null);
  const [anchorProducts, setAnchorProducts] = React.useState(null);

  const handleCategoriesMenu = (event) => {
    setAnchorCategories(event.currentTarget);
  };

  const handleProductsMenu = (event) => {
    setAnchorProducts(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorCategories(null);
    setAnchorProducts(null);
  };

  return (
    <AppBar position="static"
    sx={{backgroundColor: 'rgba(169, 169, 169, 0.8)'}}>
      <Toolbar>
          {/* Logo */}
          <img
          src=""
          alt="Your Logo"
          style={{ width: '50px', marginRight: '10px' }}
        />

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleCategoriesMenu}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Your App Name
        </Typography>

        {/* Categories Dropdown */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleCategoriesMenu}
        >
          <Typography variant="body1" component="div">
            Categories
          </Typography>
          <ArrowDropDownIcon />
        </IconButton>

        {/* Products Dropdown */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleProductsMenu}
        >
          <Typography variant="body1" component="div">
            Products
          </Typography>
          <ArrowDropDownIcon />
        </IconButton>
      </Toolbar>

      {/* Categories Dropdown */}
      <Menu
        anchorEl={anchorCategories}
        open={Boolean(anchorCategories)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Category 1</MenuItem>
        <MenuItem onClick={handleClose}>Category 2</MenuItem>
        <MenuItem onClick={handleClose}>Category 3</MenuItem>
      </Menu>

      {/* Products Dropdown */}
      <Menu
        anchorEl={anchorProducts}
        open={Boolean(anchorProducts)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Product 1</MenuItem>
        <MenuItem onClick={handleClose}>Product 2</MenuItem>
        <MenuItem onClick={handleClose}>Product 3</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Header;
