// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCartIcon';

const NavigationBar = ({ isLoggedIn, isAdmin, onLogout }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* <ShoppingCartIcon /> */}
        <Typography variant="h6">upGrad Eshop</Typography>
        <div>
        {isLoggedIn ? (
          <div>
            <input type="text" placeholder="Search" />
            <Link to="/">Home</Link>
            <button onClick={onLogout}>Logout</button>
            {isAdmin && <Link to="/add-products">Add Products</Link>}
          </div>
        ) : (
          <div>
            <Button component={Link} to="/signin" color="inherit">Sign In</Button>
            <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
          </div>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};


export default NavigationBar;
