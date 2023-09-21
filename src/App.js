// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/navbar/NavigationBar';
import LoginPage from './components/login/LoginPage'; // Create this component
import SignupPage from './components/signup/SignupPage'; // Create this component
// import ProductsPage from './ProductsPage'; // Create this component

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/signin" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        {/* <Route path="/products" component={ProductsPage} /> */}
        {/* Add more routes for your application */}
      </Routes>
    </Router>
  );
};

export default App;
