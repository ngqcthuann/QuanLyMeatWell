import React from 'react';
import { AppBar, Toolbar, Button, Typography, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Logout icon
import BoyIcon from '@mui/icons-material/Boy';

const Navbar = () => {
  const [orderMenuAnchor, setOrderMenuAnchor] = React.useState(null);
  const [userMenuAnchor, setUserMenuAnchor] = React.useState(null);
  const [productMenuAnchor, setProductMenuAnchor] = React.useState(null);
  const [profileMenuAnchor, setProfileMenuAnchor] = React.useState(null); // Profile menu anchor

  const handleOrderMenuOpen = (event) => {
    setOrderMenuAnchor(event.currentTarget);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleProductMenuOpen = (event) => {
    setProductMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setOrderMenuAnchor(null);
    setUserMenuAnchor(null);
    setProductMenuAnchor(null);
    setProfileMenuAnchor(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#333' }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#fff', marginLeft: '10px' }}>
          <img src="/path/to/your/logo.png" alt="Logo" style={{ height: '30px', marginRight: '10px' }} />
          My App
        </Typography>

        {/* Order Category */}
        <Button
          color="inherit"
          onClick={handleOrderMenuOpen}
          style={{ color: '#fff', textTransform: 'none' }}
          startIcon={<ShoppingCartIcon />}
        >
          Order
        </Button>

        {/* User Category */}
        <Button
          color="inherit"
          onClick={handleUserMenuOpen}
          style={{ color: '#fff', textTransform: 'none' }}
          startIcon={<AccountCircleIcon />}
        >
          User
        </Button>

        {/* Product Category */}
        <Button
          color="inherit"
          onClick={handleProductMenuOpen}
          style={{ color: '#fff', textTransform: 'none' }}
          startIcon={<InventoryIcon />}
        >
          Product
        </Button>

        {/* Profile Category */}
        <IconButton
          color="inherit"
          onClick={handleProfileMenuOpen}
          style={{ color: '#fff' }}
        >
          <BoyIcon />
        </IconButton>

        <Menu
          anchorEl={orderMenuAnchor}
          open={Boolean(orderMenuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Add Orders</MenuItem>
          <MenuItem onClick={handleMenuClose}>View Orders</MenuItem>
          <MenuItem onClick={handleMenuClose}>Manage Orders</MenuItem>
        </Menu>

        <Menu
          anchorEl={userMenuAnchor}
          open={Boolean(userMenuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Add Users</MenuItem>
          <MenuItem onClick={handleMenuClose}>View Users</MenuItem>
          <MenuItem onClick={handleMenuClose}>Manage Users</MenuItem>
        </Menu>

        <Menu
          anchorEl={productMenuAnchor}
          open={Boolean(productMenuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Add Products</MenuItem>
          <MenuItem onClick={handleMenuClose}>View Products</MenuItem>
          <MenuItem onClick={handleMenuClose}>Manage Products</MenuItem>
        </Menu>

        {/* Profile Menu */}
        <Menu
          anchorEl={profileMenuAnchor}
          open={Boolean(profileMenuAnchor)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ExitToAppIcon style={{ marginRight: '8px' }} />
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
